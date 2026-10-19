---
sidebar_position: 2
---

# `encrypted-dns-server`

Specifies encrypted DNS servers. When configured, Surfboard sends DNS queries over encrypted transports instead of plain UDP, and traditional DNS servers (`dns-server`) are only used to resolve the hostnames inside these URLs and to test connectivity.

## Example

```ini
[General]
encrypted-dns-server = https://dns.example/dns-query, tls://dns.example:853

# Optional: skip certificate verification (insecure, testing only)
encrypted-dns-skip-cert-verification = false
```

## Format

```ini
encrypted-dns-server = {server_url1}[,server_url2,...]
```

## Supported protocols

| URL scheme | Protocol | Default port |
| --- | --- | --- |
| `https://` | DNS over HTTPS (DoH) | 443 |
| `h3://` | DNS over HTTP/3 (DoH3) | 443 |
| `quic://` | DNS over QUIC (DoQ) | 853 |
| `tls://` | DNS over TLS (DoT) | 853 |
| `tcp://` | Traditional DNS over TCP (plain) | 53 |

`tcp://` is **not encrypted**; it only accepts a host and an optional port.

## Multiple servers

When more than one server is configured, all of them are queried in parallel and the first successful answer is used.

## Per-domain servers

A specific domain can use its own encrypted server through the `[Host]` section; other domains keep using the global list:

```ini
[Host]
example.com = server:https://dns.example/dns-query
```

## Disabling

`encrypted-dns-server = off` disables encrypted DNS and falls back to `dns-server`.

:::note
Encrypted DNS connections always go out directly (the `DIRECT` policy) and are not routed through proxies.

URL hostnames are resolved with traditional DNS (bootstrap); they must be reachable that way.
:::

:::tip Legacy key
The legacy key `doh-server` is still accepted and only supports `https://` URLs. It is merged with `encrypted-dns-server` at parse time in memory; profile files are not rewritten.
:::
