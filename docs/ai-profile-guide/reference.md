---
sidebar_position: 1
---

# Profile Syntax Reference

> **Audience: AI assistants.** Complete, self-contained syntax tables for generating Surfboard profiles. Distilled from the parser source code (`surfboard-core/profile/`); if a construct is not listed here, it is not supported.
>
> Maintainers: keep this page in sync with both the source code and the per-topic pages under [Profile Format](/docs/profile-format/overview).

## File Structure

- Surge-style INI. Comments: `#`, `;`, `//` (whole-line or trailing).
- Key/value separator: `=`. Parameter separator: `,`. Values may be wrapped in single or double quotes (required when a value contains `,`, `;` or spaces).
- Recognized sections (exact spelling, others silently ignored): `[General]`, `[Host]`, `[Proxy]`, `[Proxy Group]`, `[Rule]`, `[Panel]`, `[WireGuard <name>]`.
- Optional first line (managed subscription header):

```ini
#!MANAGED-CONFIG https://example.com/profile.conf interval=86400 strict=false
```

| Parameter | Default | Note |
|-----------|---------|------|
| `interval` | - | Auto-update interval in seconds. |
| `strict` | - | Parsed but ignored. |

Canonical doc: [Managed Config](/docs/profile-format/managed_config)

## [General]

All keys optional.

| Key | Value | Default | Note |
|-----|-------|---------|------|
| `ipv6` | `true`/`false` | `true` | Enable IPv6 support. |
| `dns-server` | Comma-separated list | - | Items: `system`, IPv4, `IPv4:port`, bare IPv6, `[IPv6]:port`. |
| `doh-server` | Comma-separated URLs | - | e.g. `https://1.1.1.1/dns-query`. |
| `http-listen` | `IP:port` | - | Port MUST be 1025-65535. |
| `socks5-listen` | `IP:port` | - | Port MUST be 1025-65535. |
| `skip-proxy` | Comma-separated list | - | Items: IP, `IP/prefix`, `localhost`, wildcard (`*.local`), plain domain. Bypasses proxying. |
| `proxy-test-url` | URL | `http://www.gstatic.com/generate_204` | **MUST be `http://`.** |
| `internet-test-url` | URL | `http://www.gstatic.cn/generate_204` | **MUST be `http://`.** |
| `test-timeout` | Integer seconds | `5` | Connectivity test timeout. |
| `always-real-ip` | Comma-separated domains/wildcards | - | Stored verbatim; bypasses fake-IP. |
| `udp-policy-not-supported-behaviour` | `DIRECT`/`REJECT` | `REJECT` | Fallback for UDP routed to a proxy without UDP relay. |

```ini
[General]
dns-server = system, 223.5.5.5, [2001:db8::1]:53
doh-server = https://1.1.1.1/dns-query
skip-proxy = 192.168.0.0/16, localhost, *.local, example.com
proxy-test-url = http://www.gstatic.com/generate_204
test-timeout = 5
udp-policy-not-supported-behaviour = DIRECT
ipv6 = true
```

Canonical docs: [General](/docs/profile-format/general/dns_server)

## [Proxy]

Line format:

```ini
{name} = {protocol}, {server}, {port}, [positional args...,] key=value, ...
```

Protocol keywords: `direct`, `reject`, `reject-tinygif`, `http`, `https`, `socks5`, `socks5-tls`, `shadowsocks` (aliases: `ss`, `custom`), `vmess`, `trojan`, `hysteria2`, `tuic-v5`, `anytls`, `snell`, `wireguard`.

### Common Parameters

Valid on all protocols except `direct`/`reject`/`wireguard` (which support only `block-quic`).

| Parameter | Value | Default | Note |
|-----------|-------|---------|------|
| `udp-relay` | `true`/`false` | Per protocol (see tables) | Enables UDP forwarding. |
| `underlying-proxy` | Proxy or group name | - | Chain: connect through another proxy. Reference must exist; cycles rejected. |
| `block-quic` | `off`/`on`/`auto` | `auto` (`off` for `direct`) | Per-node QUIC (UDP/443) blocking. |

TLS parameters, valid on TLS-capable protocols (`https`, `socks5-tls`, `vmess`+`tls`, `trojan`, `hysteria2`, `tuic-v5`, `anytls`):

| Parameter | Value | Note |
|-----------|-------|------|
| `skip-cert-verify` | `true`/`false` | Skip certificate validation. |
| `sni` | Domain, or `off` | `sni=off` disables SNI entirely. Invalid values discarded. |
| `server-cert-fingerprint-sha256` | 64-char hex, comma-separated list | Certificate pinning. |

### direct / reject

```ini
LocalDirect = direct, block-quic=off
Block = reject
BlockGif = reject-tinygif
```

Built-in policy names usable anywhere without definition: `DIRECT`, `REJECT`, `REJECT-TINYGIF`, `REJECT-DROP`, `REJECT-NO-DROP`. (`REJECT-DROP`/`REJECT-NO-DROP` exist only as built-in names, not definable types.)

### http / https / socks5 / socks5-tls

`https` ≡ `http` + `tls=true`; `socks5-tls` ≡ `socks5` + `tls=true`. Username/password are **positional** (args 4 and 5), not `key=value`.

| Parameter | Mandatory | Default | Note |
|-----------|-----------|---------|------|
| server, port | true | - | |
| username, password | false | - | Positional, may be quoted. |
| `tls` | false | `false` | Upgrades `http`/`socks5` to the TLS variant. |
| `udp-relay` | false | `false` | Meaningful for socks5 only. |
| TLS params | false | - | Only on TLS variants. |

```ini
ProxyHTTP = http, 192.0.2.1, 8080, username, password
ProxyHTTPS = https, 192.0.2.1, 443, username, password, sni=example.com
ProxySOCKS5 = socks5, 192.0.2.1, 1080, udp-relay=true
```

### shadowsocks (ss, custom)

| Parameter | Mandatory | Default | Note |
|-----------|-----------|---------|------|
| server, port | true | - | |
| encrypt-method | true | - | `encrypt-method=` key or positional arg 4. See method list below. |
| password | true | - | `password=` key or positional arg 5. SS2022: base64, 16 bytes (aes-128) / 32 bytes (aes-256). |
| `udp-relay` | false | `false` | |
| `obfs` | false | - | `tls` or `http`. |
| `obfs-host` | false | `cloudfront.net` | Only when obfs set. |
| `obfs-uri` | false | `/` | Only when obfs set. |

Encrypt methods: `aes-128-gcm`, `aes-192-gcm`, `aes-256-gcm`, `chacha20-ietf-poly1305`, `xchacha20-ietf-poly1305`, `2022-blake3-aes-128-gcm`, `2022-blake3-aes-256-gcm`, `none`. Legacy stream ciphers (`rc4`, `rc4-md5`, `aes-*-cfb`, `aes-*-ctr`, `bf-cfb`, `camellia-*-cfb`, `salsa20`, `chacha20`, `chacha20-ietf`) are accepted **in debug builds only** — never generate them.

```ini
ProxySS = ss, 192.0.2.1, 8000, encrypt-method=chacha20-ietf-poly1305, password=<PASSWORD>, udp-relay=true, obfs=tls, obfs-host=example.com
ProxySS2022 = ss, 192.0.2.1, 8000, encrypt-method=2022-blake3-aes-256-gcm, password=<BASE64-32-BYTES>
```

### vmess

| Parameter | Mandatory | Default | Note |
|-----------|-----------|---------|------|
| server, port | true | - | |
| `username` | true | - | **MUST be a valid UUID.** |
| `tls` | false | `false` | |
| `ws` | false | `false` | WebSocket transport. |
| `ws-path` | false | `/` | |
| `ws-headers` | false | - | Format: `Key:Value|Key2:Value2`. |
| `vmess-aead` | false | `true` | |
| `encrypt-method` | false | `aes-128-gcm` | `aes-128-gcm` or `chacha20-ietf-poly1305`. |
| `udp-relay` | false | `false` | |
| TLS params | false | - | When `tls=true` and `sni` empty, SNI falls back to `Host` in `ws-headers`. |

```ini
ProxyVMess = vmess, 192.0.2.1, 443, username=<UUID>, ws=true, tls=true, ws-path=/v2, ws-headers=Host:cdn.example.com
```

### trojan

| Parameter | Mandatory | Default | Note |
|-----------|-----------|---------|------|
| server, port | true | - | |
| `password` | true | - | Non-empty. |
| `ws`, `ws-path`, `ws-headers` | false | `false`, `/`, - | Same as vmess. |
| `udp-relay` | false | `false` | |
| TLS params | false | - | Trojan is always TLS. |

```ini
ProxyTrojan = trojan, 192.0.2.1, 443, password=<PASSWORD>, sni=example.com, ws=true, ws-path=/ws
```

### hysteria2

| Parameter | Mandatory | Default | Note |
|-----------|-----------|---------|------|
| server, port | true | - | |
| `password` | true | - | |
| `download-bandwidth` | false | - | Integer, Mbps. |
| `port-hopping` | false | - | **Semicolon-separated** ranges, quoted: `"1234;5000-6000"`. |
| `port-hopping-interval` | false | - | Seconds. |
| `salamander-password` | false | - | Salamander obfuscation. |
| `udp-relay` | false | `true` | |
| TLS params | false | - | |

```ini
ProxyHysteria2 = hysteria2, 192.0.2.1, 443, password=<PASSWORD>, port-hopping="1234;5000-6000", port-hopping-interval=30, sni=example.com
```

### tuic-v5

| Parameter | Mandatory | Default | Note |
|-----------|-----------|---------|------|
| server, port | true | - | |
| `uuid` | true | - | **MUST be a valid UUID.** |
| `password` | true | - | |
| `alpn` | false | - | e.g. `h3`. |
| `port-hopping`, `port-hopping-interval` | false | - | Same format as hysteria2. |
| `udp-relay` | false | `true` | |
| TLS params | false | - | |

```ini
ProxyTuic = tuic-v5, 192.0.2.1, 443, uuid=<UUID>, password=<PASSWORD>, alpn=h3
```

### anytls

| Parameter | Mandatory | Default | Note |
|-----------|-----------|---------|------|
| server, port | true | - | |
| password | true | - | `password=` key or positional arg 4. |
| `reuse` | false | `true` | Session reuse. |
| `udp-relay` | false | `true` | |
| TLS params | false | - | |

```ini
ProxyAnyTLS = anytls, 192.0.2.1, 443, password=<PASSWORD>, sni=example.com
```

### snell

| Parameter | Mandatory | Default | Note |
|-----------|-----------|---------|------|
| server, port | true | - | |
| psk | true | - | `psk=` key or positional arg 4. |
| `version` | false | `1` | 1-4; values >4 clamped to 4. |
| `obfs`, `obfs-host`, `obfs-uri` | false | -, `cloudfront.net`, - | |
| `udp-relay` | false | `false` | **Effective only with version>=3**; forced off on v1/v2. |

```ini
ProxySnell = snell, 192.0.2.1, 443, psk=<PSK>, version=4, obfs=http, obfs-host=example.com, udp-relay=true
```

### wireguard

`[Proxy]` line only references a `[WireGuard <name>]` section:

```ini
ProxyWG = wireguard, section-name = HomeServer

[WireGuard HomeServer]
private-key = <BASE64>
self-ip = 192.0.2.2
dns-server = 1.1.1.1
mtu = 1280
peer = (public-key = <BASE64>, preshared-key = <BASE64>, allowed-ips = "0.0.0.0/0, ::/0", endpoint = example.com:51820, keepalive = 25)
```

| Key | Mandatory | Default | Note |
|-----|-----------|---------|------|
| `private-key` | true | - | Base64. |
| `self-ip` | true | - | IPv4. |
| `self-ip-v6` | false | - | IPv6. |
| `dns-server` | false | - | Comma-separated IPs. |
| `mtu` | false | `1280` | |
| `peer` | true | - | Parenthesized map. `public-key`, `allowed-ips`, `endpoint` mandatory; `preshared-key`, `keepalive` optional. |

WireGuard always supports UDP (`udp-relay` implied `true`).

Canonical docs: [Proxy](/docs/profile-format/proxy) · [shadowsocks](/docs/profile-format/proxy/external-proxy/shadowsocks) · [vmess](/docs/profile-format/proxy/external-proxy/vmess) · [trojan](/docs/profile-format/proxy/external-proxy/trojan) · [hysteria2](/docs/profile-format/proxy/external-proxy/hysteria2) · [tuic-v5](/docs/profile-format/proxy/external-proxy/tuic-v5) · [anytls](/docs/profile-format/proxy/external-proxy/anytls) · [snell](/docs/profile-format/proxy/external-proxy/snell) · [http](/docs/profile-format/proxy/external-proxy/http) · [socks5](/docs/profile-format/proxy/external-proxy/socks5) · [wireguard](/docs/profile-format/proxy/external-proxy/wireguard) · [direct](/docs/profile-format/proxy/built-in-proxy/direct) · [reject](/docs/profile-format/proxy/built-in-proxy/reject)

## [Proxy Group]

Line format:

```ini
{name} = {type}, member1, member2, ..., key=value, ...
```

Types: `select`, `url-test` (alias: `smart`), `fallback`, `load-balance`, `subnet`, `ssid`. Members are proxy names, group names, or built-in policies.

### Common Parameters

| Parameter | Value | Default | Note |
|-----------|-------|---------|------|
| `policy-path` | URL | - | Remote proxy list (parsed as `[Proxy]` lines); members merged into the group. |
| `policy-regex-filter` | Regex | `.*` | Filters members from `policy-path`/`include-all-proxies`/`include-other-group`. |
| `update-interval` | Seconds | `86400` | `policy-path` refresh interval. |
| `hidden` | `true`/`false` | `false` | Hide from UI. |
| `no-alert` | `true`/`false` | `false` | |
| `include-all-proxies` | `true`/`false` | `false` | Include all `[Proxy]` entries (regex-filtered). |
| `include-other-group` | Quoted, comma-separated group names | - | Merge members of other groups (recursive). |

`evaluate-before-use` and `icon-url` are parsed but **silently ignored**.

### Type-Specific Parameters

| Type | Parameters | Defaults |
|------|-----------|----------|
| `select` | None. | - |
| `url-test` / `smart` | `url` (**MUST be `http://`**), `interval` (s), `tolerance` (ms), `timeout` (s) | `interval=600`, `tolerance=100`, `timeout=5` |
| `fallback` | `url` (**MUST be `http://`**), `interval` (s), `timeout` (s) | `interval=600`, `timeout=5` |
| `load-balance` | `persistent=true/false` | `false` |
| `subnet` / `ssid` | **MUST contain `default = <policy>`**; other entries are `condition = policy` where condition is `SSID:<name>`, `BSSID:<mac>`, `ROUTER:<ip>`, `TYPE:WIFI`/`WIRED`/`CELLULAR`, `MCCMNC:<mcc-mnc>` | - |

```ini
SelectGroup = select, NodeA, NodeB, DIRECT, REJECT
AutoGroup = url-test, NodeA, NodeB, url=http://www.gstatic.com/generate_204, interval=600, tolerance=100, timeout=5
SubGroup = select, policy-path=https://example.com/nodes.txt, update-interval=86400, policy-regex-filter=HK
AllProxies = select, include-all-proxies=true
LBGroup = load-balance, NodeA, NodeB, persistent=true
SubnetGroup = subnet, default = NodeA, TYPE:WIFI = DIRECT, SSID:MyHome = NodeB
```

A `Global Proxy` select group (all non-hidden proxies, excluding DIRECT/REJECT) is **auto-generated**; never define it yourself.

SSID/BSSID-based groups require location permission on the device.

Canonical docs: [Proxy Group](/docs/profile-format/proxygroup/) · [select](/docs/profile-format/proxygroup/select) · [url-test](/docs/profile-format/proxygroup/auto) · [fallback](/docs/profile-format/proxygroup/fallback) · [load-balance](/docs/profile-format/proxygroup/load-balance) · [subnet/ssid](/docs/profile-format/proxygroup/subnet)

## [Rule]

Line format: `TYPE,value,policy[,attributes...]`. Evaluated **top-down, first match wins**. `policy` must be a defined proxy/group or a built-in policy name.

| Type | Syntax | Note |
|------|--------|------|
| `DOMAIN` | `DOMAIN,www.example.com,Proxy` | Exact match. |
| `DOMAIN-SUFFIX` | `DOMAIN-SUFFIX,example.com,Proxy` | Matches the domain and all subdomains. |
| `DOMAIN-KEYWORD` | `DOMAIN-KEYWORD,example,Proxy` | Substring match. |
| `DOMAIN-WILDCARD` | `DOMAIN-WILDCARD,*.example.com,Proxy` | `*`/`?` wildcards. |
| `DOMAIN-SET` | `DOMAIN-SET,https://example.com/list.txt,Proxy` | Remote URL **only**. File: one domain per line; leading `.` = suffix match, otherwise exact. |
| `IP-CIDR` / `IP-CIDR6` | `IP-CIDR,192.0.2.0/24,DIRECT,no-resolve` | CIDR. |
| `GEOIP` | `GEOIP,CN,DIRECT,no-resolve` | Two-letter country code. |
| `PROCESS-NAME` | `PROCESS-NAME,com.example.app,Proxy` | Android package name; wildcards supported. |
| `USER-AGENT` | `USER-AGENT,ExampleApp*,DIRECT` | Wildcard match on HTTP User-Agent. |
| `SUBNET` | `SUBNET,TYPE:WIFI,DIRECT` | Subtypes: `SSID:`, `BSSID:`, `ROUTER:`, `TYPE:WIFI/WIRED/CELLULAR`, `MCCMNC:`. Requires location permission for SSID/BSSID. |
| `DEST-PORT` | `DEST-PORT,443,DIRECT` | 1-65535. |
| `SRC-IP` | `SRC-IP,192.0.2.10,DIRECT` | Exact source IP. |
| `IN-PORT` | `IN-PORT,6152,DIRECT` | 1-65535. |
| `PROTOCOL` | `PROTOCOL,QUIC,REJECT` | `HTTP` (TCP:80), `HTTPS` (TCP:443), `TCP`, `UDP`, `QUIC` (UDP:443). |
| `RULE-SET` | `RULE-SET,https://example.com/rules.conf,Proxy` | Remote URL **only**. `RULE-SET,SYSTEM`/`RULE-SET,LAN` NOT supported. File lines are rules **without** the policy column (policy inherited). Nested `RULE-SET` forbidden. |
| `AND` / `OR` / `NOT` | `AND,((RULE1),(RULE2)),Proxy` | AND/OR take ≥2 sub-rules, NOT exactly 1. Sub-rules have no policy. Max nesting depth 16. No `RULE-SET`/`DOMAIN-SET` inside. Any invalid sub-rule drops the whole rule. |
| `FINAL` | `FINAL,Proxy` | Catch-all. MUST be the last rule. |

Rule attributes (4th column onward), only on `DOMAIN`/`DOMAIN-SUFFIX`/`DOMAIN-KEYWORD`/`DOMAIN-WILDCARD`/`PROCESS-NAME`/`USER-AGENT`:

| Attribute | Effect |
|-----------|--------|
| `force-remote-dns` | Resolve the domain via the proxy instead of locally. |
| `enhanced-mode` | Enable enhanced matching mode. |

`no-resolve` on IP-based rules is accepted (compatibility) and conventionally means "do not trigger DNS resolution to evaluate this rule".

```ini
[Rule]
DOMAIN,www.example.com,Proxy
DOMAIN-SUFFIX,ads.example.com,REJECT
DOMAIN-KEYWORD,tracker,REJECT
PROCESS-NAME,com.example.app,Proxy,force-remote-dns
IP-CIDR,192.168.0.0/16,DIRECT,no-resolve
SUBNET,TYPE:WIFI,DIRECT
PROTOCOL,QUIC,REJECT
AND,((DOMAIN-SUFFIX,example.com),(DEST-PORT,443)),Proxy
GEOIP,CN,DIRECT
RULE-SET,https://example.com/reject-rules.conf,REJECT
FINAL,Proxy
```

Canonical docs: [Rule](/docs/profile-format/rule/) · [domain](/docs/profile-format/rule/domain) · [ip](/docs/profile-format/rule/ip) · [process](/docs/profile-format/rule/process) · [ruleset](/docs/profile-format/rule/ruleset) · [domainset](/docs/profile-format/rule/domainset) · [logical](/docs/profile-format/rule/logical) · [subnet](/docs/profile-format/rule/subnet) · [misc](/docs/profile-format/rule/misc) · [user-agent](/docs/profile-format/rule/user-agent) · [final](/docs/profile-format/rule/final)

## [Host]

Custom DNS resolution. Format: `key = value[, value...]`.

| Key form | Value form | Example |
|----------|-----------|---------|
| Domain or `*` wildcard | One or more IPs (v4/v6 mixed) | `example.com = 192.0.2.1, 2001:db8::1` |
| Domain or wildcard | Single domain (alias) | `foo.example.com = bar.example.com` |
| Domain or wildcard | `server:<IP>` / `server:<IP>:<port>` | `bar.example.com = server:1.1.1.1` |
| Domain or wildcard | `server:system` / `server:syslib` | `baz.example.com = server:system` |
| Domain or wildcard | `server:https://<doh-url>` | `doh.example.com = server:https://1.1.1.1/dns-query` |
| `DOMAIN-SET:<url>` | Any value form above | `DOMAIN-SET:https://example.com/list.txt = 192.0.2.1` |
| `RULE-SET:<url>` | Any value form above | Domain rules in the set match for DNS. |

Canonical docs: [Host](/docs/profile-format/host/)

## [Panel]

```ini
{name} = title="...", content="...\n...", style=good|info|alert|error
```

`title` and `content` mandatory; `style` optional. `\n` produces a line break. `icon` is parsed but ignored.

Canonical doc: [Panel](/docs/profile-format/panel/static)

## Share Links

Single-proxy share links the app accepts (convert them into `[Proxy]` lines when the user pastes one):

| Scheme | Notes |
|--------|-------|
| `ss://` | SIP002 (base64url userinfo) and legacy whole-base64 forms. `plugin=obfs-local;obfs=tls;obfs-host=...;obfs-uri=...` maps to obfs parameters. |
| `vmess://` | v2rayN base64 JSON (`ps`/`add`/`port`/`id`/`tls`/`sni`/`net`/`path`/`host`). Only `net=ws` (or plain TCP) supported. |
| `trojan://` | Query: `sni`, `type=ws`, `path`, `host`, `allowInsecure`. |
| `anytls://` | Query: `sni`, `insecure=1`. Default port 443. |
| `hysteria2://`, `hy2://` | Query: `sni`, `insecure=1`. Port list uses **commas** (`443,5000-6000`) — convert to semicolons in `port-hopping`. `obfs` parameter is **rejected**; use `salamander-password` manually. |

Subscription URL schemes: `http(s)://`, `surfboard://`, `surge://`, `surge3://`. Deep links of the form `surfboard:///install-config?url=<encoded>` wrap a subscription URL.
