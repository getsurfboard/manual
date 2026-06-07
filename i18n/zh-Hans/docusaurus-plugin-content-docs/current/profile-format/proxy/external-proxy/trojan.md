---
sidebar_position: 4
---

# Trojan

Trojan 是一种旨在通过模仿 HTTPS 等常用协议来绕过互联网审查的协议。Surfboard 支持带有可选 WebSocket (WS) 传输的 Trojan。

## 协议标准

- https://trojan-gfw.github.io/trojan/protocol
- https://en.wikipedia.org/wiki/Transport_Layer_Security
- https://en.wikipedia.org/wiki/Server_Name_Indication

## 示例

```ini
# 带有 WebSocket 传输和自定义标头的 Trojan 代理配置
ProxyTrojan = trojan, 192.168.20.6, 443, password=password1, udp-relay=false, skip-cert-verify=true, sni=www.example.com, server-cert-fingerprint-sha256=fac26f65c034829da42d740d23c4a7202475a3834f0ebaecae5f934adbbfd640, ws=true, ws-path=/index.html, ws-headers=X-Header-1:value|X-Header-2:value
```

## 格式

```ini
{proxy name} = trojan, {server}, {port}, {password}, {udp-relay}, {skip-cert-verify}, {sni}, {server-cert-fingerprint-sha256}, {ws}, {ws-path}, {ws-headers}
```

## 参数

| 名称             | 值             | 是否必填 | 备注                                                                                                                                                                            |
|------------------|----------------|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| proxy name       | -              | 是      |                                                                                                                                                                                 |
| server           | -              | 是      | 支持域名和 IP 格式。                                                                                                                                                    |
| port             | 0 - 65535      | 是      |                                                                                                                                                                                 |
| password         | -              | 是      |                                                                                                                                                                                 |
| udp-relay        | true<br/>false | 否     | 默认值: false。                                                                                                                                                            |
| skip-cert-verify | true<br/>false | 否     | 默认值: false。                                                                                                                                                       |
| sni              | -              | 否     | 如果 SNI 值与 host 值一致，则无需定义。                                                                                                      |
| server-cert-fingerprint-sha256 | -    | 否     | 服务器证书的 SHA-256 指纹，十六进制编码（64 个字符）。用于证书固定 (certificate pinning)。多个指纹可用逗号分隔。 |
| ws               | true<br/>false | 否     | 默认值: false。                                                                                                                                                            |
| ws-path          | -              | 否     | 默认值: /<br/>仅在 ws 设置为 true 时适用。                                                                                                                            |
| ws-headers       | -              | 否     | 值格式：<code>Header-1:value-1\|Header-2:value-2</code><br/>键和值之间用冒号分隔。<br/>条目之间用竖线分隔。<br/>仅在 ws 设置为 true 时适用。 |
| underlying-proxy | -              | 否       | 通过一个代理来连接另一个代理（代理链）。值可以是另一个代理名称或策略组名称。参见 [通用参数](/docs/profile-format/proxy#通用参数)。 |