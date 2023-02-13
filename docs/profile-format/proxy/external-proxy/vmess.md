---
sidebar_position: 3
---

# VMESS

## Protocol standard

- https://www.v2fly.org/en_US/developer/protocols/vmess.html
- https://www.v2fly.org/config/protocols/vmess.html#vmess-md5-%E8%AE%A4%E8%AF%81%E4%BF%A1%E6%81%AF-%E7%8E%B7%E6%B1%A1%E6%9C%BA%E5%88%B6
- https://en.wikipedia.org/wiki/Universally_unique_identifier
- https://en.wikipedia.org/wiki/Transport_Layer_Security
- https://en.wikipedia.org/wiki/Server_Name_Indication

## Sample

```ini
ProxyVMess = vmess, 5.udemy.com, 8080, username=b27a7cb7-d281-428f-8000-7d20e51cb6fa, udp-relay=false, ws=true, tls=true, ws-path=/v2, ws-headers=X-Header-1:value|X-Header-2:value, skip-cert-verify=true, sni=sg2.flashssh.net, vmess-aead=true
```

## Format

```ini
sg2.flashssh.net  = vmess, 5.udemy.com, 8080, username=b27a7cb7-d281-428f-8000-7d20e51cb6fa, tls=false, ws=true, ws-path=/FlowSSH, sni=sg2.flashssh.net , ws-headers=Host:sg2.flashssh.net , skip-cert-verify=1, tfo=true, udp-relay=true
```

## Params

| Name             | Value            | Mandatory | Note                                                                                                                                                                            |
|------------------|------------------|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| proxy name       | -                | true      |                                                                                                                                                                                 |
| server           | -                | true      | Support domain and ip format                                                                                                                                                    |
| port             | 0 - 65535        | true      |                                                                                                                                                                                 |
| username         | -                | true      | UUID format                                                                                                                                                                     |
| udp-relay        | true<br/>false   | false     | Default value: false                                                                                                                                                            |
| ws               | true<br/>false   | false     | Default value: false                                                                                                                                                            |
| tls              | true<br/>false   | false     | Default value: false                                                                                                                                                            |
| ws-path          | -                | false     | Default value: /<br/>usable only when ws set to true                                                                                                                            |
| ws-headers       | -                | false     | Value format: <code>Header-1:value-1\|Header-2:value-2</code><br/>Key and value is divided by colon<br/>Entries are divided by vertical bar<br/>Usable only when ws set to true |
| skip-cert-verify | true<br/>false   | false     | Usable if tls is true<br/>set to true if proxy doesn't have a valid TLS certificate                                                                                             |
| sni              | -                | false     | Usable if tls is true<br/>definition is unnecessary when the SNI value is the same as the host value                                                                            |
| vmess-aead       | true<br/>false   | false     | Default value: true                                                                                                                                                            |

:::caution
`vmess-aead` is still an unconfirmed standard of Surge profile format, format may be changed in the future
:::
