---
sidebar_position: 1
---

# SOCKS5/SOCKS5-TLS

## Protocol Standard

- https://datatracker.ietf.org/doc/html/rfc1928
- https://datatracker.ietf.org/doc/html/rfc1929
- https://en.wikipedia.org/wiki/Transport_Layer_Security
- https://en.wikipedia.org/wiki/Server_Name_Indication

## Example

```ini
ProxySOCKS5 = socks5, 1.2.3.4, 443, username, password, udp-relay=false
ProxySOCKS5TLS = socks5-tls, 1.2.3.4, 443, username, password, skip-cert-verify=true, sni=www.google.com
```

## Format

```ini
{proxy name} = {protocol}, {server}, {port}, {username}, {password}, {skip-cert-verify}, {sni}
```

## Parameters

| Name             | Value                 | Mandatory | Note                                                                                                                 |
|------------------|-----------------------|-----------|----------------------------------------------------------------------------------------------------------------------|
| proxy name       | -                     | true      |                                                                                                                      |
| protocol         | socks5<br/>socks5-tls | true      |                                                                                                                      |
| server           | -                     | true      | Supports domain and IP formats.                                                                                         |
| port             | 0-65535               | true      |                                                                                                                      |
| username         | -                     | false     |                                                                                                                      |
| password         | -                     | false     |                                                                                                                      |
| skip-cert-verify | true<br/>false        | false     | Applicable if protocol is socks5-tls.<br/>Set to true if the proxy does not have a valid TLS certificate.                       |
| sni              |                       | false     | Applicable if protocol is socks5-tls.<br/>Definition is unnecessary if the SNI value matches the host value.      |

:::tip
To test with a SOCKS5-TLS proxy, please try using [https://github.com/ginuerzh/gost](https://github.com/ginuerzh/gost), which can create a SOCKS-TLS proxy out of the box.
:::