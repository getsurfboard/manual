---
sidebar_position: 0
---

# HTTP/HTTPS

## Protocol standard

- https://en.wikipedia.org/wiki/HTTP_tunnel
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/CONNECT
- https://en.wikipedia.org/wiki/Proxy_server#Web_proxy_servers
- https://en.wikipedia.org/wiki/Transport_Layer_Security
- https://en.wikipedia.org/wiki/HTTPS
- https://en.wikipedia.org/wiki/Server_Name_Indication

## Sample

```ini
ProxyHTTP = http, 1.2.3.4, 443, username, password
ProxyHTTPS = https, 1.2.3.4, 443, username, password, skip-cert-verify=true, sni=www.google.com
```

## Format

```ini
{proxy name} = {protocol}, {host}, {port}, {username}, {password}, {skip-cert-verify}, {sni}
```

## Params

| Name             | Value          | Mandatory | Note                                                                                                            |
|------------------|----------------|-----------|-----------------------------------------------------------------------------------------------------------------|
| proxy name       | -              | true      |                                                                                                                 |
| protocol         | http<br/>https | true      |                                                                                                                 |
| host             | -              | true      | Support domain and ip format                                                                                    |
| port             | 0-65535        | true      |                                                                                                                 |
| username         | -              | false     |                                                                                                                 |
| password         | -              | false     |                                                                                                                 |
| skip-cert-verify | true<br/>false | false     | Usable if protocol is https<br/>set to true if proxy doesn't have a valid TLS certificate                       |
| sni              | -              | false     | Usable if protocol is https<br/>definition is unnecessary when the SNI value is the same as the host value      |