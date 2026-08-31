---
sidebar_position: 0
---

# Profile Generation Guide for AI

> **This document is written for AI assistants, not human readers.**
> It defines how to generate a valid Surfboard profile (`.conf`) from user requirements.
> Read it together with [Profile Syntax Reference](./reference.md) **before** generating any profile. The reference contains the complete parameter tables; this guide contains the rules, semantics and recipes.

Human-oriented documentation lives in [Profile Format](/docs/profile-format/overview) and [Profile Example](/docs/profile-example/global).

## Role

You are generating a **Surfboard profile**: a Surge-style INI configuration file consumed by the Surfboard Android VPN app. The user describes a goal (e.g. "block ads", "add my Hysteria2 node", "route only browsers through the proxy"); you output a complete, importable `.conf` file.

## Output Contract

These are hard rules. Violating any of them produces a broken or misleading profile.

1. **ALWAYS output a complete, self-contained file.** Include every section the configuration depends on. Never output fragments with comments like `# ... keep your existing rules ...` unless the user explicitly asked for a patch.
2. **ALWAYS resolve syntax against [reference.md](./reference.md).** Never invent keys, parameters, protocols, rule types or group types. If a capability is not listed there, it does not exist.
3. **NEVER emit dangling policy references.** Every name used as a rule target or group member MUST be defined in `[Proxy]`, defined in `[Proxy Group]`, or be a built-in policy (`DIRECT`, `REJECT`, `REJECT-TINYGIF`, `REJECT-DROP`, `REJECT-NO-DROP`). References are validated at import; unknown names fail.
4. **ALWAYS end `[Rule]` with a `FINAL,<policy>` rule.** Without it, unmatched traffic has undefined behavior. Nothing may appear after `FINAL`.
5. **NEVER fabricate server credentials or addresses.** If the user has not provided node details, use obvious placeholders (`<SERVER>`, `<PORT>`, `<PASSWORD>`, `<UUID>`) and add a `# TODO` comment on that line telling the user exactly what to fill in.
6. **NEVER emit real third-party domains or IP addresses as examples.** Use `example.com`, `*.example.com`, or reserved documentation ranges (`192.0.2.0/24`, `198.51.100.0/24`, `203.0.113.0/24`, `2001:db8::/32`). Well-known public infrastructure domains (e.g. `google.com`, `cloudflare.com`) are acceptable in test URLs and rule examples only.
7. **ALWAYS ask before guessing.** If the user's requirement is ambiguous (which apps? which region? which node?), ask a targeted question instead of silently picking one.
8. **VERIFY reachability of user-supplied external resources before referencing them.** When the user provides a URL intended for `DOMAIN-SET`, `RULE-SET`, `policy-path`, or a `#!MANAGED-CONFIG` subscription header, fetch it first and confirm it is reachable (HTTP 200, non-empty body). If the fetch fails, times out, or returns an error page, do NOT silently embed the URL — report the failure to the user and ask whether to keep it anyway or drop the feature. Also sanity-check the content format (DOMAIN-SET: one domain per line, `.` prefix = suffix; RULE-SET: rules without the policy column; policy-path: `[Proxy]`-style lines). Skip this check only for placeholder URLs (`example.com`) the user is expected to replace, and say so explicitly.

## Profile Anatomy

A profile is INI text with three comment styles (`#`, `;`, `//`), `key = value` pairs, and comma-separated parameters. Recognized sections, in canonical order:

```ini
#!MANAGED-CONFIG https://example.com/profile.conf interval=86400 strict=false   # optional, only for subscribed profiles

[General]        # global behavior: DNS, listeners, test URLs
[Host]           # custom DNS resolution (optional)
[Proxy]          # outbound proxy definitions
[Proxy Group]    # policy groups referencing proxies (optional)
[Rule]           # routing rules, first match wins, ends with FINAL
[Panel]          # UI panels (optional)
[WireGuard name] # one section per WireGuard interface, when used
```

### Minimal Viable Skeleton

Every generated profile should start from this shape:

```ini
[General]
dns-server = system
proxy-test-url = http://www.gstatic.com/generate_204

[Proxy]
MyNode = ss, <SERVER>, <PORT>, encrypt-method=chacha20-ietf-poly1305, password=<PASSWORD>   # TODO: fill in node details

[Proxy Group]
Proxy = select, MyNode, DIRECT

[Rule]
FINAL,Proxy
```

Grow it by adding nodes to `[Proxy]`, adding members/groups to `[Proxy Group]`, and inserting rules **above** `FINAL`.

## Core Semantics

Internalize these before writing any `[Rule]` section:

- **First match wins.** Rules are evaluated top to bottom. Specific rules (exact domains, process names) MUST come before broad ones (domain keywords, GEOIP, IP-CIDR).
- **Rule order is part of correctness.** `GEOIP,CN,DIRECT` placed before `DOMAIN-SUFFIX,example.com,Proxy` would break the intent for CN-hosted domains.
- **Policies must exist before use.** A rule or group referencing `MyNode` is invalid unless `MyNode` is defined. Define proxies before groups, groups before rules.
- **A `Global Proxy` select group is generated automatically** containing all non-hidden proxies; you do not define it, and you MUST NOT redefine this name.
- **Domain rules may trigger DNS resolution** for the connection's host. Append `no-resolve` to IP-based rules (`IP-CIDR`, `GEOIP`) when the rule must not force resolution of domain-based connections.
- **`udp-policy-not-supported-behaviour`** (default `REJECT`) decides what happens to UDP traffic routed to a proxy without `udp-relay=true`. If the user wants UDP (games, calls) to fall back instead of being dropped, set it to `DIRECT`.
- **SSID/BSSID rules and subnet/ssid groups require location permission** on the device; mention this to the user when you generate them.

## Common Recipes

Map user intents to these patterns. Adapt names; keep the structure.

### 1. "Add my proxy node"

Add one line to `[Proxy]` using the correct protocol row from [reference.md](./reference.md#proxy). If the user pastes a share link (`ss://`, `vmess://`, `trojan://`, `anytls://`, `hysteria2://`/`hy2://`), decode it into a `[Proxy]` line (see [Share Links](./reference.md#share-links)). Then add the node to the relevant groups.

User: *"add a trojan node, server 203.0.113.10 port 443 password abc, sni cdn.example.com"*

```ini
[Proxy]
MyTrojan = trojan, 203.0.113.10, 443, password=abc, sni=cdn.example.com

[Proxy Group]
Proxy = select, MyTrojan, DIRECT
```

### 2. "Block ads"

Use `REJECT` rules above the traffic rules. For a handful of domains write them inline; for large lists prefer a remote `DOMAIN-SET` or `RULE-SET`. See [full example](/docs/profile-example/adblock).

```ini
[Rule]
DOMAIN-SUFFIX,ads.example.com,REJECT
DOMAIN-KEYWORD,advertising,REJECT
DOMAIN-SET,https://example.com/adblock-domains.txt,REJECT
# ... traffic rules ...
FINAL,Proxy
```

`REJECT` resets TCP and drops UDP/ICMP. `REJECT-TINYGIF` behaves like `REJECT`. Use `REJECT-DROP` when the user wants silent drops.

### 3. "Route specific apps through the proxy"

Use `PROCESS-NAME` with Android package names (wildcards supported). Note: on Android 11+, app visibility is restricted; Surfboard's per-app proxy settings control which apps enter the VPN at all — `PROCESS-NAME` only routes traffic that reaches the VPN. See [PROCESS-NAME docs](/docs/profile-format/rule/process).

```ini
[Rule]
PROCESS-NAME,com.example.app,Proxy
PROCESS-NAME,com.example.bank,DIRECT
FINAL,DIRECT
```

### 4. "Bypass proxy for domestic sites" (GEOIP split)

The classic layout: CN domains/IPs direct, everything else proxied. Local/private ranges first.

```ini
[Rule]
DOMAIN-SUFFIX,example.cn,DIRECT
IP-CIDR,192.168.0.0/16,DIRECT,no-resolve
GEOIP,CN,DIRECT
FINAL,Proxy
```

For a production-scale version, see [gfw example](/docs/profile-example/gfw).

### 5. "Auto-select the fastest node"

Use `url-test`. The test `url` MUST be `http://` (https is rejected at parse time).

```ini
[Proxy Group]
Auto = url-test, NodeA, NodeB, NodeC, url=http://www.gstatic.com/generate_204, interval=600, tolerance=100, timeout=5
Proxy = select, Auto, NodeA, NodeB, NodeC, DIRECT
```

To auto-include nodes from a subscription instead of listing them: `policy-path=https://example.com/nodes.txt, policy-regex-filter=HK` filters members by name regex.

### 6. "Chain proxies" (landing node via relay)

```ini
[Proxy]
Relay = ss, 198.51.100.1, 8000, encrypt-method=aes-256-gcm, password=<PASSWORD>      # TODO
Landing = trojan, 203.0.113.20, 443, password=<PASSWORD>, underlying-proxy=Relay   # TODO
```

`underlying-proxy` works on every protocol; cycles are rejected at import.

### 7. "Block QUIC for some nodes"

QUIC (UDP/443) bypasses TCP-based filtering expectations. Per node: append `block-quic=on` (or `auto`). Globally: `PROTOCOL,QUIC,REJECT` rule.

## Pitfalls

Frequent generation mistakes. Check every output against this list.

- **`proxy-test-url`, `internet-test-url`, group `url` MUST be `http://`, not `https://`** — parse-time failure otherwise.
- **`ws-headers` format is `Key:Value|Key2:Value2`** (pipe-separated, colon inside). Not JSON, not commas.
- **Quote values containing commas, semicolons or spaces**: `port-hopping="1234;5000-6000"`, `include-other-group="GroupA, GroupB"`.
- **Hysteria2/TUIC `port-hopping` uses `;` between ranges in conf files**, but share links encode multiple ports with `,`. Do not mix them up when converting links.
- **VMess `username` and TUIC `uuid` MUST be valid UUIDs** — parse-time failure otherwise.
- **SS2022 passwords MUST be base64** of exactly 16 bytes (`2022-blake3-aes-128-gcm`) or 32 bytes (`2022-blake3-aes-256-gcm`).
- **`sni=off` explicitly disables SNI**; omitting `sni` is different from disabling it.
- **Snell `version` above 4 is silently clamped to 4**; `udp-relay` only works with `version>=3`.
- **Listen ports (`http-listen`, `socks5-listen`) must be in 1025-65535.**
- **`RULE-SET,SYSTEM` and `RULE-SET,LAN` are NOT supported.** `RULE-SET`/`DOMAIN-SET` accept remote `http(s)` URLs only; entries inside a `RULE-SET` file have no policy column.
- **Logical rules (`AND`/`OR`/`NOT`)**: sub-rules carry no policy; max nesting depth 16; `NOT` takes exactly one sub-rule. If any sub-rule is invalid, the whole rule is dropped (fail-closed).
- **`hysteria2://` share links support `obfs=salamander`/`obfs=gecko` with `obfs-password`**; any other `obfs` value, or `obfs` without `obfs-password`, is rejected. In conf lines use the equivalent `salamander-password` / `gecko-password` parameters.
- **Legacy SS stream ciphers** (`rc4`, `aes-*-cfb`, `chacha20`, …) only work in debug builds. Prefer AEAD methods in generated profiles.
- **`evaluate-before-use` and `icon-url` group parameters are silently ignored** — do not rely on them.

## Self-Validation Checklist

Before presenting the generated profile, walk this checklist mentally and fix any failure:

1. Every section header spelled exactly: `[General]` `[Host]` `[Proxy]` `[Proxy Group]` `[Rule]` `[Panel]` `[WireGuard <name>]` — others are silently ignored.
2. Every policy referenced in `[Rule]` and `[Proxy Group]` is defined or built-in.
3. `[Rule]` ends with `FINAL,<defined policy>`; nothing follows it.
4. Specific rules precede broad rules; `no-resolve` present on IP rules where DNS resolution is undesirable.
5. All test URLs are `http://`.
6. All UUIDs are UUID-shaped; SS2022 passwords base64 of correct length.
7. Values with `,`/`;`/spaces are quoted.
8. Every protocol parameter used exists in [reference.md](./reference.md) for that protocol.
9. Placeholders are marked with `# TODO` comments; no invented credentials.
10. Sections follow dependency order: proxies → groups → rules.
11. Every external resource URL (DOMAIN-SET / RULE-SET / policy-path / subscription header) has been fetched and confirmed reachable, or the user has explicitly acknowledged keeping an unverified/placeholder URL.

## References

- **Complete syntax tables**: [Profile Syntax Reference](./reference.md) — read this first.
- Human-oriented per-topic docs: [Profile Format](/docs/profile-format/overview) · [Proxy](/docs/profile-format/proxy) · [Proxy Group](/docs/profile-format/proxygroup/) · [Rule](/docs/profile-format/rule/) · [General](/docs/profile-format/general/dns_server) · [Host](/docs/profile-format/host/)
- Full annotated examples: [global](/docs/profile-example/global) · [adblock](/docs/profile-example/adblock) · [gfw split routing](/docs/profile-example/gfw) · [local server](/docs/profile-example/local_server)
- Authoritative sample (source repository): `surfboard-core/profile/src/test/resources/test_profile.conf` covers nearly every syntax variant and edge case.
