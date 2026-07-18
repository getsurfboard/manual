---
sidebar_position: 8
---

# TUIC v5

TUIC is a proxy protocol based on QUIC. It multiplexes TCP streams and relays UDP packets natively over a single QUIC connection, eliminating the TCP handshake and head-of-line blocking overhead.

## Protocol Standard

- https://github.com/tuic-protocol/tuic

## Example

```ini
# Full configuration
ProxyTuic = tuic-v5, 1.2.3.4, 443, uuid=c44af1f3-f8c4-4f95-a999-6db4f7a40958, password=pwd, alpn=h3, port-hopping="1234;5000-6000", port-hopping-interval=30, skip-cert-verify=true, sni=example.com, server-cert-fingerprint-sha256=fac26f65c034829da42d740d23c4a7202475a3834f0ebaecae5f934adbbfd640, udp-relay=true

# Minimal configuration
ProxyTuicMin = tuic-v5, 1.2.3.4, 443, uuid=c44af1f3-f8c4-4f95-a999-6db4f7a40958, password=pwd
```

## Format

```ini
{proxy name} = tuic-v5, {server}, {port}, uuid={uuid}, password={password}, alpn={alpn}, port-hopping={hopping}, port-hopping-interval={interval}, skip-cert-verify={skip}, sni={sni}, server-cert-fingerprint-sha256={fingerprint}, udp-relay={udp}
```

## Parameters

| Name                  | Value          | Mandatory | Note                                                                                                                               |
|-----------------------|----------------|-----------|------------------------------------------------------------------------------------------------------------------------------------|
| proxy name            | -              | true      |                                                                                                                                    |
| server                | -              | true      | Supports domain and IP formats.                                                                                                    |
| port                  | 1 - 65535      | true      |                                                                                                                                    |
| uuid                  | -              | true      | User UUID for authentication (e.g., `c44af1f3-f8c4-4f95-a999-6db4f7a40958`).                                                       |
| password              | -              | true      | Authentication password.                                                                                                           |
| alpn                  | -              | false     | Default value: h3. It must match the server's ALPN setting.                                                                        |
| port-hopping          | -              | false     | Port hopping configuration (e.g., `"1234;5000-6000"`). When enabled, the primary port in the declaration is no longer used.        |
| port-hopping-interval | -              | false     | Interval for port hopping in seconds. Default value: 30.                                                                           |
| skip-cert-verify      | true<br/>false | false     | Default value: false. Set to true if the proxy does not have a valid TLS certificate.                                              |
| sni                   | -              | false     | Definition is unnecessary if the SNI value matches the host value.                                                                 |
| server-cert-fingerprint-sha256 | -      | false     | SHA-256 fingerprint of the server certificate, hex-encoded (64 characters). Used for certificate pinning. Multiple fingerprints can be comma-separated. |
| udp-relay             | true<br/>false | false     | Default value: true. Enable or disable UDP relay.                                                                                  |
| underlying-proxy | -              | false     | Use a proxy or proxy group to connect another proxy (proxy chain). Since TUIC is UDP-based, every proxy in the chain must support UDP relay. See [Common Parameters](/docs/profile-format/proxy#common-parameters). |

## Notes

- Only TUIC protocol version 5 is supported. The legacy v4 format (`tuic, ..., token=...`) is not supported.
- The uTLS fingerprint option does not take effect for QUIC-based protocols like TUIC.
- When port hopping is enabled, new QUIC connections are established to the next port in the list on every interval; in-flight connections on the old port are closed gracefully after one interval.
