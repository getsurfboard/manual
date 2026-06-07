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
ProxyHTTPS = https, 1.2.3.4, 443, username, password, skip-cert-verify=true, sni=www.example.com, server-cert-fingerprint-sha256=fac26f65c034829da42d740d23c4a7202475a3834f0ebaecae5f934adbbfd640
```

## 格式

```ini
{proxy name} = {protocol}, {server}, {port}, {username}, {password}, {skip-cert-verify}, {sni}, {server-cert-fingerprint-sha256}
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
| server-cert-fingerprint-sha256 | -    | 否     | 适用于协议为 https 的情况。<br/>服务器证书的 SHA-256 指纹，十六进制编码（64 个字符）。用于证书固定 (certificate pinning)。多个指纹可用逗号分隔。 |
| underlying-proxy | -              | 否       | 通过一个代理来连接另一个代理（代理链）。值可以是另一个代理名称或策略组名称。参见 [通用参数](/docs/profile-format/proxy#通用参数)。 |