---
sidebar_position: 6
---

# Hysteria2

Hysteria2 是一种基于 QUIC 协议的高性能代理，专为具有挑战性的网络环境而设计。它专注于在拥塞或高丢包率的链路上最大限度地提高吞吐量并最大限度地降低延迟。

## 协议标准

- https://hysteria.network/

## 示例

```ini
# 带有可选性能和安全设置的 Hysteria2 代理配置
ProxyHysteria2 = hysteria2, 1.2.3.4, 443, password=pwd, download-bandwidth=100, port-hopping="1234;5000-6000", port-hopping-interval=30, skip-cert-verify=true, sni=example.com, udp-relay=true
```

## 格式

```ini
{proxy name} = hysteria2, {server}, {port}, password={password}, download-bandwidth={bandwidth}, port-hopping={hopping}, port-hopping-interval={interval}, skip-cert-verify={skip}, sni={sni}, udp-relay={udp}
```

## 参数

| 名称                  | 值             | 是否必填 | 备注                                                                                                                               |
|-----------------------|----------------|-----------|------------------------------------------------------------------------------------------------------------------------------------|
| proxy name            | -              | 是      |                                                                                                                                    |
| server                | -              | 是      | 支持域名和 IP 格式。                                                                                                    |
| port                  | 1 - 65535      | 是      |                                                                                                                                    |
| password              | -              | 是      | 身份验证密码。                                                                                                           |
| download-bandwidth    | -              | 否     | 最大下载速度 (Mbps)。                                                                                                    |
| port-hopping          | -              | 否     | 端口跳跃配置（例如：`"1234;5000-6000"`）。                                                                             |
| port-hopping-interval | -              | 否     | 端口跳跃间隔（秒）（例如：`30`）。                                                                                 |
| skip-cert-verify      | true<br/>false | 否     | 默认值: false。如果代理没有有效的 TLS 证书，请设置为 true。                                              |
| sni                   | -              | 否     | 如果 SNI 值与 host 值一致，则无需定义。                                                                 |
| udp-relay             | true<br/>false | 否     | 默认值: true。启用或禁用 UDP 转发。                                                                                  |