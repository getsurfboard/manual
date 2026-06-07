---
sidebar_position: 1
---

# SOCKS5/SOCKS5-TLS

SOCKS5 是一种通用的代理协议，用于在客户端和服务器之间路由数据包。Surfboard 支持标准 SOCKS5 及其加密变体 SOCKS5-TLS。

## 协议标准

- https://datatracker.ietf.org/doc/html/rfc1928
- https://datatracker.ietf.org/doc/html/rfc1929
- https://en.wikipedia.org/wiki/Transport_Layer_Security
- https://en.wikipedia.org/wiki/Server_Name_Indication

## 示例

```ini
# 带有身份验证且禁用 UDP 转发的标准 SOCKS5 代理
ProxySOCKS5 = socks5, 1.2.3.4, 443, username, password, udp-relay=false

# 绕过证书验证并自定义 SNI 的安全 SOCKS5-TLS 代理
ProxySOCKS5TLS = socks5-tls, 1.2.3.4, 443, username, password, skip-cert-verify=true, sni=www.example.com, server-cert-fingerprint-sha256=fac26f65c034829da42d740d23c4a7202475a3834f0ebaecae5f934adbbfd640
```

## 格式

```ini
{proxy name} = {protocol}, {server}, {port}, {username}, {password}, {skip-cert-verify}, {sni}, {server-cert-fingerprint-sha256}
```

## 参数

| 名称             | 值                    | 是否必填 | 备注                                                                                                                 |
|------------------|-----------------------|-----------|----------------------------------------------------------------------------------------------------------------------|
| proxy name       | -                     | 是      |                                                                                                                      |
| protocol         | socks5<br/>socks5-tls | 是      |                                                                                                                      |
| server           | -                     | 是      | 支持域名和 IP 格式。                                                                                         |
| port             | 0-65535               | 是      |                                                                                                                      |
| username         | -                     | 否     |                                                                                                                      |
| password         | -                     | 否     |                                                                                                                      |
| skip-cert-verify | true<br/>false        | 否     | 适用于协议为 socks5-tls 的情况。<br/>如果代理没有有效的 TLS 证书，请设置为 true。                       |
| sni              |                       | 否     | 适用于协议为 socks5-tls 的情况。<br/>如果 SNI 值与 host 值一致，则无需定义。      |
| server-cert-fingerprint-sha256 | -      | 否     | 适用于协议为 socks5-tls 的情况。<br/>服务器证书的 SHA-256 指纹，十六进制编码（64 个字符）。用于证书固定 (certificate pinning)。多个指纹可用逗号分隔。 |
| underlying-proxy | -              | 否       | 通过一个代理来连接另一个代理（代理链）。值可以是另一个代理名称或策略组名称。参见 [通用参数](/docs/profile-format/proxy#通用参数)。 |

:::tip 提示
如需测试 SOCKS5-TLS 代理，请尝试使用 [https://github.com/ginuerzh/gost](https://github.com/ginuerzh/gost)，它可以开箱即用地创建 SOCKS-TLS 代理。
:::