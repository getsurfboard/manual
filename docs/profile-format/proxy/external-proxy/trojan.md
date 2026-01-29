---
sidebar_position: 4
---

# Trojan

## Protocol Standard

- https://trojan-gfw.github.io/trojan/protocol
- https://en.wikipedia.org/wiki/Transport_Layer_Security
- https://en.wikipedia.org/wiki/Server_Name_Indication

## Example

```ini
ProxyTrojan = trojan, 192.168.20.6, 443, password=password1, udp-relay=false, skip-cert-verify=true, sni=www.google.com, ws=true, ws-path=/index.html, ws-headers=X-Header-1:value|X-Header-2:value
```

## Format

```ini
{proxy name} = trojan, {server}, {port}, {password}, {udp-relay}, {skip-cert-verify}, {sni}, {ws}, {ws-path}, {ws-headers}
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
| ws               | true<br/>false | false     | Default value: false.                                                                                                                                                            |
| ws-path          | -              | false     | Default value: /<br/>Applicable only when ws is set to true.                                                                                                                            |
| ws-headers       | -              | false     | Value format: <code>Header-1:value-1\|Header-2:value-2</code><br/>Key and value are separated by a colon.<br/>Entries are separated by a vertical bar.<br/>Applicable only when ws is set to true. |