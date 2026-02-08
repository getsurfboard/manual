---
sidebar_position: 0
---

# HTTP/HTTPS

Surfboard supports both standard HTTP proxies and secure HTTPS (HTTP over TLS) proxies for routing traffic.

## Protocol Standard

- https://en.wikipedia.org/wiki/HTTP_tunnel
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/CONNECT
- https://en.wikipedia.org/wiki/Proxy_server#Web_proxy_servers
- https://en.wikipedia.org/wiki/Transport_Layer_Security
- https://en.wikipedia.org/wiki/HTTPS
- https://en.wikipedia.org/wiki/Server_Name_Indication

## Example

```ini
# Standard HTTP proxy without encryption
ProxyHTTP = http, 1.2.3.4, 443, username, password

# Secure HTTPS proxy with TLS and SNI configuration
ProxyHTTPS = https, 1.2.3.4, 443, username, password, skip-cert-verify=true, sni=www.example.com
```

## Format

```ini
{proxy name} = {protocol}, {server}, {port}, {username}, {password}, {skip-cert-verify}, {sni}
```

## Parameters

| Name             | Value          | Mandatory | Note                                                                                                            |
|------------------|----------------|-----------|-----------------------------------------------------------------------------------------------------------------|
| proxy name       | -              | true      |                                                                                                                 |
| protocol         | http<br/>https | true      |                                                                                                                 |
| server           | -              | true      | Supports domain and IP formats.                                                                                    |
| port             | 0-65535        | true      |                                                                                                                 |
| username         | -              | false     |                                                                                                                 |
| password         | -              | false     |                                                                                                                 |
| skip-cert-verify | true<br/>false | false     | Applicable if protocol is https.<br/>Set to true if the proxy does not have a valid TLS certificate.                       |
| sni              | -              | false     | Applicable if protocol is https.<br/>Definition is unnecessary if the SNI value matches the host value.      |