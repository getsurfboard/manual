---
sidebar_position: 7
---

# AnyTLS

AnyTLS 是一种使用 TLS 进行安全通信的代理类型。它是一种通过 TLS 加密连接隧道化流量的简单且高效的方式。

## Format

```ini
{proxy name} = anytls, {server}, {port}, {password}, {skip-cert-verify}, {sni}, {reuse}
```

## Parameters

| 名称             | 值                | 强制性 | 备注                                                                                                                                                                            |
|------------------|-------------------|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| proxy name       | -                 | 是      |                                                                                                                                                                                 |
| server           | -                 | 是      | 支持域名和 IP 格式。                                                                                                                                                    |
| port             | 0 - 65535         | 是      |                                                                                                                                                                                 |
| password         | -                 | 是      | 认证密码。                                                                                                                                                         |
| skip-cert-verify | true<br/>false    | 否     | 如果代理没有有效的 TLS 证书，请设置为 true。默认值：false。                                                                                             |
| sni              | -                 | 否     | 服务器名称指示 (Server Name Indication)。如果 SNI 值与 host 值匹配，则无需定义。                                                                            |
| reuse            | true<br/>false    | 否     | 是否复用连接。默认值：true。                                                                                                                               |

## Example

```ini
# 完整配置
ProxyAnyTLS = anytls, 1.2.3.4, 443, password, skip-cert-verify=true, sni=abc.com, reuse=false

# 最小配置
ProxyAnyTLSMin = anytls, 1.2.3.4, 443, password
```
