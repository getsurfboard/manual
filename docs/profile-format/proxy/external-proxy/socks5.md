---
sidebar_position: 1
---

# SOCKS5/SOCKS5-TLS

## Protocol standard

- https://datatracker.ietf.org/doc/html/rfc1928
- https://datatracker.ietf.org/doc/html/rfc1929
- https://en.wikipedia.org/wiki/Transport_Layer_Security
- https://en.wikipedia.org/wiki/Server_Name_Indication

## Sample

```ini
ProxySOCKS5 = socks5, 1.2.3.4, 443, username, password, udp-relay=false
ProxySOCKS5TLS = socks5-tls, 1.2.3.4, 443, username, password, skip-cert-verify=true, sni=www.google.com
```

## Format

```ini
{proxy name} = {protocol}, {server}, {port}, {username}, {password}, {skip-cert-verify}, {sni}
```

## Params

| Name             | Value                 | Mandatory | Note                                                                                                                 |
|------------------|-----------------------|-----------|----------------------------------------------------------------------------------------------------------------------|
| proxy name       | -                     | true      |                                                                                                                      |
| protocol         | socks5<br/>socks5-tls | true      |                                                                                                                      |
| server           | -                     | true      | Support domain and ip format                                                                                         |
| port             | 0-65535               | true      |                                                                                                                      |
| username         | -                     | false     |                                                                                                                      |
| password         | -                     | false     |                                                                                                                      |
| skip-cert-verify | true<br/>false        | false     | Usable if protocol is socks5-tls<br/>set to true if proxy doesn't have a valid TLS certificate                       |
| sni              |                       | false     | Usable if protocol is socks5-tls<br/>definition is unnecessary when the SNI value is the same as the host value      |

:::tip
To test with SOCKS5-TLS proxy, please try to use [https://github.com/ginuerzh/gost](https://github.com/ginuerzh/gost), which can a create SOCKS-TLS proxy out of the box
:::
