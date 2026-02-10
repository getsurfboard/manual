---
sidebar_position: 3
---

# VMESS

VMESS 是 V2Ray 用于客户端和服务器之间通信的主要协议。Surfboard 支持带有 TLS、WebSocket 传输和 AEAD 安全性的 VMESS。

## 协议标准

- https://www.v2fly.org/en_US/developer/protocols/vmess.html
- https://www.v2fly.org/config/protocols/vmess.html#vmess-md5-%E8%AE%A4%E8%AF%81%E4%BF%A1%E6%81%AF-%E7%8E%B7%E6%B1%A1%E6%9C%BA%E5%88%B6
- https://en.wikipedia.org/wiki/Universally_unique_identifier
- https://en.wikipedia.org/wiki/Transport_Layer_Security
- https://en.wikipedia.org/wiki/Server_Name_Indication

## 示例

```ini
# 使用 WebSocket 传输、TLS 加密和 AEAD 的 VMess 代理配置
ProxyVMess = vmess, 1.2.3.4, 8000, username=0233d11c-15a4-47d3-ade3-48ffca0ce119, udp-relay=false, ws=true, tls=true, ws-path=/v2, ws-headers=X-Header-1:value|X-Header-2:value, skip-cert-verify=true, sni=www.example.com, vmess-aead=true
```

## 格式

```ini
{proxy name} = vmess, {server}, {port}, {username}, {udp-relay}, {ws}, {tls}, {ws-path}, {ws-headers}, {skip-cert-verify}, {sni}, {vmess-aead}
```

## 参数

| 名称             | 值               | 是否必填 | 备注                                                                                                                                                                            |
|------------------|------------------|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| proxy name       | -                | 是      |                                                                                                                                                                                 |
| server           | -                | 是      | 支持域名和 IP 格式。                                                                                                                                                    |
| port             | 0 - 65535        | 是      |                                                                                                                                                                                 |
| username         | -                | 是      | UUID 格式。                                                                                                                                                                     |
| udp-relay        | true<br/>false   | 否     | 默认值: false。                                                                                                                                                            |
| ws               | true<br/>false   | 否     | 默认值: false。                                                                                                                                                            |
| tls              | true<br/>false   | 否     | 默认值: false。                                                                                                                                                            |
| ws-path          | -                | 否     | 默认值: /<br/>仅在 ws 设置为 true 时适用。                                                                                                                            |
| ws-headers       | -                | 否     | 值格式：<code>Header-1:value-1\|Header-2:value-2</code><br/>键和值之间用冒号分隔。<br/>条目之间用竖线分隔。<br/>仅在 ws 设置为 true 时适用。 |
| skip-cert-verify | true<br/>false   | 否     | 在 tls 为 true 时适用。<br/>如果代理没有有效的 TLS 证书，请设置为 true。                                                                                             |
| sni              | -                | 否     | 在 tls 为 true 时适用。<br/>如果 SNI 值与 host 值一致，则无需定义。                                                                            |
| vmess-aead       | true<br/>false   | 否     | 默认值: true。                                                                                                                                                            |

:::caution 注意
`vmess-aead` 是 Surge 配置文件格式中一个未经证实的标准；未来可能会发生变化。
:::