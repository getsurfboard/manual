---
sidebar_position: 3
---

# VMESS

## Protocol Standard

- https://www.v2fly.org/en_US/developer/protocols/vmess.html
- https://www.v2fly.org/config/protocols/vmess.html#vmess-md5-%E8%AE%A4%E8%AF%81%E4%BF%A1%E6%81%AF-%E7%8E%B7%E6%B1%A1%E6%9C%BA%E5%88%B6
- https://en.wikipedia.org/wiki/Universally_unique_identifier
- https://en.wikipedia.org/wiki/Transport_Layer_Security
- https://en.wikipedia.org/wiki/Server_Name_Indication

## Example

```ini
ProxyVMess = vmess, 1.2.3.4, 8000, username=0233d11c-15a4-47d3-ade3-48ffca0ce119, udp-relay=false, ws=true, tls=true, ws-path=/v2, ws-headers=X-Header-1:value|X-Header-2:value, skip-cert-verify=true, sni=www.google.com, vmess-aead=true
```

## Format

```ini
{proxy name} = vmess, {server}, {port}, {username}, {udp-relay}, {ws}, {tls}, {ws-path}, {ws-headers}, {skip-cert-verify}, {sni}, {vmess-aead}
```

## Parameters

| Name             | Value            | Mandatory | Note                                                                                                                                                                            |
|------------------|------------------|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| proxy name       | -                | true      |                                                                                                                                                                                 |
| server           | -                | true      | Supports domain and IP formats.                                                                                                                                                    |
| port             | 0 - 65535        | true      |                                                                                                                                                                                 |
| username         | -                | true      | UUID format.                                                                                                                                                                     |
| udp-relay        | true<br/>false   | false     | Default value: false.                                                                                                                                                            |
| ws               | true<br/>false   | false     | Default value: false.                                                                                                                                                            |
| tls              | true<br/>false   | false     | Default value: false.                                                                                                                                                            |
| ws-path          | -                | false     | Default value: /<br/>Applicable only when ws is set to true.                                                                                                                            |
| ws-headers       | -                | false     | Value format: <code>Header-1:value-1\|Header-2:value-2</code><br/>Key and value are separated by a colon.<br/>Entries are separated by a vertical bar.<br/>Applicable only when ws is set to true. |
| skip-cert-verify | true<br/>false   | false     | Applicable if tls is true.<br/>Set to true if the proxy does not have a valid TLS certificate.                                                                                             |
| sni              | -                | false     | Applicable if tls is true.<br/>Definition is unnecessary if the SNI value matches the host value.                                                                            |
| vmess-aead       | true<br/>false   | false     | Default value: true.                                                                                                                                                            |

:::caution
`vmess-aead` is an unconfirmed standard in the Surge profile format; this may change in the future.
:::