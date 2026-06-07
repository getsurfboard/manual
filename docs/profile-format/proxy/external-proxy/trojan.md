---
sidebar_position: 4
---

# Trojan

Trojan is a protocol designed to bypass internet censorship by imitating common protocols like HTTPS. Surfboard supports Trojan with optional WebSocket (WS) transport.

## Protocol Standard

- https://trojan-gfw.github.io/trojan/protocol
- https://en.wikipedia.org/wiki/Transport_Layer_Security
- https://en.wikipedia.org/wiki/Server_Name_Indication

## Example

```ini
# Trojan proxy configuration with WebSocket transport and custom headers
ProxyTrojan = trojan, 192.168.20.6, 443, password=password1, udp-relay=false, skip-cert-verify=true, sni=www.example.com, server-cert-fingerprint-sha256=fac26f65c034829da42d740d23c4a7202475a3834f0ebaecae5f934adbbfd640, ws=true, ws-path=/index.html, ws-headers=X-Header-1:value|X-Header-2:value
```

## Format

```ini
{proxy name} = trojan, {server}, {port}, {password}, {udp-relay}, {skip-cert-verify}, {sni}, {server-cert-fingerprint-sha256}, {ws}, {ws-path}, {ws-headers}
```

## Parameters

| Name             | Value          | Mandatory | Note                                                                                                                                                                            |
|------------------|----------------|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| proxy name       | -              | true      |                                                                                                                                                                                 |
| server           | -              | true      | Supports domain and IP formats.                                                                                                                                                    |
| port             | 0 - 65535      | true      |                                                                                                                                                                                 |
| password         | -              | true      |                                                                                                                                                                                 |
| udp-relay        | true<br/>false | false     | Default value: false.                                                                                                                                                            |
| skip-cert-verify | true<br/>false | false     | Default value: false.                                                                                                                                                       |
| sni              | -              | false     | Definition is unnecessary if the SNI value matches the host value.                                                                                                      |
| server-cert-fingerprint-sha256 | -    | false     | SHA-256 fingerprint of the server certificate, hex-encoded (64 characters). Used for certificate pinning. Multiple fingerprints can be comma-separated. |
| ws               | true<br/>false | false     | Default value: false.                                                                                                                                                            |
| ws-path          | -              | false     | Default value: /<br/>Applicable only when ws is set to true.                                                                                                                            |
| ws-headers       | -              | false     | Value format: <code>Header-1:value-1\|Header-2:value-2</code><br/>Key and value are separated by a colon.<br/>Entries are separated by a vertical bar.<br/>Applicable only when ws is set to true. |
| underlying-proxy | -              | false     | Use a proxy or proxy group to connect another proxy (proxy chain). See [Common Parameters](/docs/profile-format/proxy#common-parameters). |