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
ProxySOCKS5TLS = socks5-tls, 1.2.3.4, 443, username, password, skip-cert-verify=true, sni=www.example.com
```

## 格式

```ini
{proxy name} = {protocol}, {server}, {port}, {username}, {password}, {skip-cert-verify}, {sni}
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

:::tip 提示
如需测试 SOCKS5-TLS 代理，请尝试使用 [https://github.com/ginuerzh/gost](https://github.com/ginuerzh/gost)，它可以开箱即用地创建 SOCKS-TLS 代理。
:::