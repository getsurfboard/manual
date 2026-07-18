---
sidebar_position: 8
---

# TUIC v5

TUIC 是一种基于 QUIC 协议的代理协议。它在单个 QUIC 连接上复用 TCP 流并原生转发 UDP 数据包，消除了 TCP 握手和队头阻塞的开销。

## 协议标准

- https://github.com/tuic-protocol/tuic

## 示例

```ini
# 完整配置
ProxyTuic = tuic-v5, 1.2.3.4, 443, uuid=c44af1f3-f8c4-4f95-a999-6db4f7a40958, password=pwd, alpn=h3, port-hopping="1234;5000-6000", port-hopping-interval=30, skip-cert-verify=true, sni=example.com, server-cert-fingerprint-sha256=fac26f65c034829da42d740d23c4a7202475a3834f0ebaecae5f934adbbfd640, udp-relay=true

# 最小配置
ProxyTuicMin = tuic-v5, 1.2.3.4, 443, uuid=c44af1f3-f8c4-4f95-a999-6db4f7a40958, password=pwd
```

## 格式

```ini
{proxy name} = tuic-v5, {server}, {port}, uuid={uuid}, password={password}, alpn={alpn}, port-hopping={hopping}, port-hopping-interval={interval}, skip-cert-verify={skip}, sni={sni}, server-cert-fingerprint-sha256={fingerprint}, udp-relay={udp}
```

## 参数

| 名称                  | 值             | 是否必填 | 备注                                                                                                                               |
|-----------------------|----------------|-----------|------------------------------------------------------------------------------------------------------------------------------------|
| proxy name            | -              | 是      |                                                                                                                                    |
| server                | -              | 是      | 支持域名和 IP 格式。                                                                                                    |
| port                  | 1 - 65535      | 是      |                                                                                                                                    |
| uuid                  | -              | 是      | 用于身份验证的用户 UUID（例如：`c44af1f3-f8c4-4f95-a999-6db4f7a40958`）。                            |
| password              | -              | 是      | 身份验证密码。                                                                                                           |
| alpn                  | -              | 否      | 默认值: h3。必须与服务端的 ALPN 设置一致。                                                                               |
| port-hopping          | -              | 否      | 端口跳跃配置（例如：`"1234;5000-6000"`）。启用后，声明中的主端口将不再使用。                                  |
| port-hopping-interval | -              | 否      | 端口跳跃间隔（秒）。默认值: 30。                                                                                          |
| skip-cert-verify      | true<br/>false | 否      | 默认值: false。如果代理没有有效的 TLS 证书，请设置为 true。                                              |
| sni                   | -              | 否      | 如果 SNI 值与 host 值一致，则无需定义。                                                                 |
| server-cert-fingerprint-sha256 | -      | 否      | 服务器证书的 SHA-256 指纹，十六进制编码（64 个字符）。用于证书固定 (certificate pinning)。多个指纹可用逗号分隔。 |
| udp-relay             | true<br/>false | 否      | 默认值: true。启用或禁用 UDP 转发。                                                                                  |
| underlying-proxy | -              | 否       | 通过一个代理来连接另一个代理（代理链）。由于 TUIC 基于 UDP，链上每个代理都必须支持 UDP 转发。参见 [通用参数](/docs/profile-format/proxy#通用参数)。 |

## 说明

- 仅支持 TUIC 协议第 5 版。旧版 v4 格式（`tuic, ..., token=...`）不受支持。
- uTLS 指纹选项对 TUIC 等基于 QUIC 的协议不生效。
- 启用端口跳跃后，每个间隔都会使用列表中的下一个端口建立新的 QUIC 连接；旧端口上的存量连接会在一个间隔后平滑关闭。
