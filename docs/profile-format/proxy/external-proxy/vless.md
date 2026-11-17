---
sidebar_position: 4
---

# VLESS

VLESS policies use the Xray engine and accept Surge-style parameters. Nodes can be imported from a configuration file, subscription, clipboard, QR code or a `vless://` link.

Quote node names containing `=` or commas, and quote parameter values containing commas. Inside quoted text, write `\\` for a literal backslash and `\"` for a double quote. Other backslash sequences, such as `\d` in a regular expression, remain literal.

## Examples

Replace every example address, user ID and public key with values from your server. The REALITY key below is a placeholder, not a usable server key.

```ini
[Proxy]
VlessTLS = vless, proxy.example, 443, username=2cae91b3-f85c-433b-88ee-a002b9ed6d61, tls=true, flow=xtls-rprx-vision
VlessWS = vless, cdn.example, 443, username=2cae91b3-f85c-433b-88ee-a002b9ed6d61, tls=true, ws=true, ws-path=/vless, ws-headers=Host:cdn.example
VlessUpgrade = vless, cdn.example, 443, username=2cae91b3-f85c-433b-88ee-a002b9ed6d61, tls=true, ws=true, ws-http-upgrade=true, ws-path=/up
VlessGRPC = vless, proxy.example, 443, username=2cae91b3-f85c-433b-88ee-a002b9ed6d61, tls=true, grpc=true, grpc-service-name=vless, grpc-mode=multi
VlessXHTTP = vless, cdn.example, 443, username=2cae91b3-f85c-433b-88ee-a002b9ed6d61, tls=true, xhttp=true, xhttp-path=/xhttp, xhttp-mode=packet-up
VlessREALITY = vless, 203.0.113.10, 443, username=2cae91b3-f85c-433b-88ee-a002b9ed6d61, reality-public-key=AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA, reality-short-id=abcd, sni=cover.example, flow=xtls-rprx-vision
```

## Parameters

| Parameter | Default | Meaning |
|---|---|---|
| `username` | `required` | UUID, or a user ID of 1–30 UTF-8 bytes |
| `tls` | `false` | Enable TLS; REALITY does not need this flag |
| `sni` | `server hostname` | TLS/REALITY server name; off disables ordinary TLS SNI |
| `skip-cert-verify` | `false` | Skip ordinary TLS certificate verification |
| `server-cert-verify-name` | `SNI/hostname` | Verify the certificate against this name independently of SNI |
| `server-cert-fingerprint-sha256` | `unset` | 64 hexadecimal digits; pins the leaf certificate instead of system trust |
| `alpn` | `transport default` | Protocol list; quote multiple entries, for example alpn="h2,http/1.1" |
| `flow` | `unset` | xtls-rprx-vision or xtls-rprx-vision-udp443; both use block-quic for UDP/443 |
| `reality-public-key` | `unset` | 32-byte server public key in standard or URL-safe Base64, padding optional; enables REALITY |
| `reality-short-id` | `empty` | 0–16 hexadecimal digits in pairs; requires reality-public-key |
| `encryption` | `none` | Copy the complete client encryption string supplied by the server |
| `udp-relay` | `true` | Enable XUDP forwarding, including multiple destinations |
| `block-quic` | `auto` | auto, on, off; same shared policy behavior as other protocols |
| `underlying-proxy` | `unset` | Name of the proxy or selected group used to reach this server |
| `ws` | `false` | Select WebSocket |
| `ws-path` | `/` | WebSocket/HTTPUpgrade path |
| `ws-headers` | `unset` | Pipe-separated Key:Value headers; Host sets the virtual host |
| `ws-http-upgrade` | `false` | Select HTTPUpgrade; requires ws=true |
| `grpc` | `false` | Select gRPC; requires TLS or REALITY |
| `grpc-service-name` | `empty` | Service name or custom /service/method path |
| `grpc-mode` | `gun` | gun or multi |
| `grpc-authority` | `sni, then server` | HTTP/2 authority |
| `xhttp` | `false` | Select XHTTP |
| `xhttp-path` | `/` | Request path, including an optional query |
| `xhttp-host` | `sni, then server` | HTTP Host; do not put Host in xhttp-headers |
| `xhttp-mode` | `auto` | auto, packet-up, stream-up, stream-one |
| `xhttp-headers` | `unset` | Pipe-separated Key:Value headers; browser User-Agent aliases are accepted |
| `xhttp-padding-bytes` | `100-1000` | Padding length or range |
| `xhttp-padding-obfs` | `false` | Obfuscate padding |
| `xhttp-padding-key` | `x_padding` | Padding query/cookie key |
| `xhttp-padding-header` | `X-Padding` | Padding header name |
| `xhttp-padding-placement` | `queryInHeader` | queryInHeader, header, cookie, query |
| `xhttp-padding-method` | `repeat-x` | repeat-x or tokenish |
| `xhttp-uplink-method` | `POST` | POST; GET requires packet-up |
| `xhttp-session-placement` | `path` | path, query, header, cookie |
| `xhttp-session-key` | `by placement` | Session field name |
| `xhttp-session-table` | `UUID` | Custom ASCII session alphabet; use with session-length |
| `xhttp-session-length` | `by alphabet` | Session length/range; provide enough combinations for uniqueness |
| `xhttp-seq-placement` | `path` | path, query, header, cookie |
| `xhttp-seq-key` | `by placement` | Sequence field name |
| `xhttp-uplink-data-placement` | `auto` | auto, body, header, cookie; header/cookie require packet-up |
| `xhttp-uplink-data-key` | `by placement` | Upload data field name |
| `xhttp-uplink-chunk-size` | `by placement` | Upload chunk length/range |
| `xhttp-no-grpc-header` | `false` | Omit the gRPC-style content type |
| `xhttp-max-each-post-bytes` | `1000000` | Maximum upload bytes per packet-up request |
| `xhttp-min-posts-interval` | `30` | Minimum milliseconds between packet-up requests |
| `xhttp-xmux-max-concurrency` | `unset` | Concurrent streams limit/range |
| `xhttp-xmux-max-connections` | `accepted, inert` | Preserved for compatibility; does not override engine behavior |
| `xhttp-xmux-max-reuse-times` | `unset` | Connection reuse limit/range |
| `xhttp-xmux-max-request-times` | `600-900` | Requests per connection limit/range |
| `xhttp-xmux-max-reusable-secs` | `1800-3000` | Connection age limit/range, seconds |
| `xhttp-xmux-keep-alive` | `accepted, inert` | Preserved for compatibility; engine manages keep-alive |

## Transport combinations

Only one of `ws`, `grpc` and `xhttp` may be enabled. Without them, RAW/TCP is used. HTTPUpgrade also requires `ws=true`. The selected transport, credentials, service/path, security and flow must match the server.

| Transport | Security | Vision |
|---|---|---|
| RAW/TCP | none, TLS, REALITY | TLS/REALITY or Encryption required |
| WebSocket | none, TLS | Encryption required |
| HTTPUpgrade | none, TLS | Encryption required |
| gRPC | TLS, REALITY | Unsupported |
| XHTTP | none, TLS, REALITY | Encryption required |

Encryption may be used with any supported transport/security combination. mKCP and separate XHTTP `downloadSettings` are not supported.

## VLESS Encryption

Copy the client string from the server's `xray vlessenc` output into `encryption`. Do not use the server's `decryption` string. Its format is `mlkem768x25519plus.MODE.HANDSHAKE[.PADDING].KEY[.KEY...]`.

`MODE` is `native`, `xorpub` or `random`; `HANDSHAKE` is `1rtt` or `0rtt`. Padding alternates probability/minimum/maximum length and pause segments. The first segment requires probability 100 and at least 35 bytes. Keys must come from the server; do not invent them. Encryption is independent of TLS. Vision over WS, HTTPUpgrade or XHTTP requires Encryption. gRPC cannot use Vision.

0rtt reuses an earlier handshake ticket. A server restart may invalidate that ticket: the affected request fails and the next connection performs a new handshake.

## XHTTP behavior

Plain XHTTP uses HTTP/1.1. TLS normally uses HTTP/2; `alpn=http/1.1` selects HTTP/1.1 and `alpn=h3` selects HTTP/3. REALITY uses HTTP/2. HTTP/3 reaches the proxy server over UDP; an underlying proxy must support UDP for that connection.

Ranges use a single number or `minimum-maximum`. Padding/session/upload fields must match the server. Uploading in headers or cookies requires `packet-up`; use a small `xhttp-max-each-post-bytes` and a server header limit large enough for Base64 data.

## Share links

Standard syntax: `vless://ID@HOST:PORT?QUERY#NAME`. IPv6 hosts use brackets. Percent-encode IDs, paths and names where necessary.

- `type=tcp`/`raw`, `ws`, `httpupgrade`, `grpc`, `xhttp`/`splithttp` select the transport.
- `security=tls` enables TLS; `security=reality`, `pbk`, `sid` select REALITY.
- `path`/`host` map to the selected HTTP transport; gRPC uses `serviceName`, `authority`, and optional `mode=multi`.
- `sni`, `flow`, `encryption`, `alpn`, `pcs`, `vcn`, `allowInsecure=1`/`insecure=1` map to the corresponding policy options.
- XHTTP `extra` JSON imports supported client fields and XMUX limits. Server-only fields are ignored; `downloadSettings` is rejected.
- Shadowrocket Base64 `none:ID@HOST:PORT` links accept `remarks`, `tls=1`, `peer`, `xtls=2`, `obfs=websocket`/`grpc`, `path`, and `obfsParam`.

## Compatibility notes

REALITY uses a Chrome ClientHello and its own certificate authentication; ordinary certificate bypass/pinning options do not replace REALITY verification. Older REALITY servers that cannot handle ML-KEM are retried once on a new connection without ML-KEM, while retaining TLS 1.3 and REALITY authentication. No extra setting is required. A successful compatibility mode is remembered for that server and credentials in memory for 30 minutes; failed authentication is never cached. After a server upgrade, a failed compatibility connection retries the normal Chrome handshake. Modern servers continue using ML-KEM. Share-link `fp` and `spx` are ignored.

The documented parameters are accepted, while connection scheduling and pooling follow the bundled Xray engine. Inert XMUX parameters are preserved when saving. This feature does not add Surge's Keystore, mutual TLS or Shadow TLS support.

See also: [shared proxy parameters](/docs/profile-format/proxy), [Surge VLESS syntax](https://manual.nssurge.com/policies/vless.html).
