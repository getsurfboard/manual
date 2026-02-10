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
ProxyTrojan = trojan, 192.168.20.6, 443, password=password1, udp-relay=false, skip-cert-verify=true, sni=www.example.com, ws=true, ws-path=/index.html, ws-headers=X-Header-1:value|X-Header-2:value
```

## 格式

```ini
{proxy name} = trojan, {server}, {port}, {password}, {udp-relay}, {skip-cert-verify}, {sni}, {ws}, {ws-path}, {ws-headers}
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
| ws               | true<br/>false | 否     | 默认值: false。                                                                                                                                                            |
| ws-path          | -              | 否     | 默认值: /<br/>仅在 ws 设置为 true 时适用。                                                                                                                            |
| ws-headers       | -              | 否     | 值格式：<code>Header-1:value-1\|Header-2:value-2</code><br/>键和值之间用冒号分隔。<br/>条目之间用竖线分隔。<br/>仅在 ws 设置为 true 时适用。 |