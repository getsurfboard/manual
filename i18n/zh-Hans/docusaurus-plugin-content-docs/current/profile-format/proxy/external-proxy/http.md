---
sidebar_position: 0
---

# HTTP/HTTPS

Surfboard 支持标准 HTTP 代理和安全的 HTTPS (HTTP over TLS) 代理来路由流量。

## 协议标准

- https://en.wikipedia.org/wiki/HTTP_tunnel
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/CONNECT
- https://en.wikipedia.org/wiki/Proxy_server#Web_proxy_servers
- https://en.wikipedia.org/wiki/Transport_Layer_Security
- https://en.wikipedia.org/wiki/HTTPS
- https://en.wikipedia.org/wiki/Server_Name_Indication

## 示例

```ini
# 不带加密的标准 HTTP 代理
ProxyHTTP = http, 1.2.3.4, 443, username, password

# 带有 TLS 和 SNI 配置的安全 HTTPS 代理
ProxyHTTPS = https, 1.2.3.4, 443, username, password, skip-cert-verify=true, sni=www.example.com
```

## 格式

```ini
{proxy name} = {protocol}, {server}, {port}, {username}, {password}, {skip-cert-verify}, {sni}
```

## 参数

| 名称             | 值             | 是否必填 | 备注                                                                                                            |
|------------------|----------------|-----------|-----------------------------------------------------------------------------------------------------------------|
| proxy name       | -              | 是      |                                                                                                                 |
| protocol         | http<br/>https | 是      |                                                                                                                 |
| server           | -              | 是      | 支持域名和 IP 格式。                                                                                    |
| port             | 0-65535        | 是      |                                                                                                                 |
| username         | -              | 否     |                                                                                                                 |
| password         | -              | 否     |                                                                                                                 |
| skip-cert-verify | true<br/>false | 否     | 适用于协议为 https 的情况。<br/>如果代理没有有效的 TLS 证书，请设置为 true。                       |
| sni              | -              | 否     | 适用于协议为 https 的情况。<br/>如果 SNI 值与 host 值一致，则无需定义。      |