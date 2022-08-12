---
sidebar_position: 4
---

# Trojan

## Protocol standard

- https://trojan-gfw.github.io/trojan/protocol
- https://en.wikipedia.org/wiki/Transport_Layer_Security
- https://en.wikipedia.org/wiki/Server_Name_Indication

## Sample

```ini
ProxyTrojan = trojan, 192.168.20.6, 443, password=password1, udp-relay=false, skip-cert-verify=true, sni=www.google.com, ws=true, ws-path=/index.html, ws-headers=X-Header-1:value|X-Header-2:value
```

## Format

```ini
{proxy name} = trojan, {server}, {port}, {password}, {udp-relay}, {skip-cert-verify}, {sni}, {ws}, {ws-path}, {ws-headers}
```

## Params

| Name             | Value          | Mandatory | Note                                                                                                                                                                            |
|------------------|----------------|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| proxy name       | -              | true      |                                                                                                                                                                                 |
| server           | -              | true      | Support domain and ip format                                                                                                                                                    |
| port             | 0 - 65535      | true      |                                                                                                                                                                                 |
| password         | -              | true      |                                                                                                                                                                                 |
| udp-relay        | true<br/>false | false     | Default value: false                                                                                                                                                            |
| skip-cert-verify | true<br/>false | false     | Default value: false<br/>                                                                                                                                                       |
| sni              | -              | false     | Definition is unnecessary when the SNI value is the same as the host value                                                                                                      |
| ws               | true<br/>false | false     | Default value: false                                                                                                                                                            |
| ws-path          | -              | false     | Default value: /<br/>usable only when ws set to true                                                                                                                            |
| ws-headers       | -              | false     | Value format: <code>Header-1:value-1\|Header-2:value-2</code><br/>Key and value is divided by colon<br/>Entries are divided by vertical bar<br/>Usable only when ws set to true |