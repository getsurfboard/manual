---
sidebar_position: 2
---

# 加密 DNS 服务器

指定加密 DNS 服务器。配置后，Surfboard 会通过加密传输发送 DNS 查询而不是明文 UDP；传统 DNS 服务器（`dns-server`）只用于解析这些 URL 中的域名和做连通性检测。

## 示例

```ini
[General]
encrypted-dns-server = https://dns.example/dns-query, tls://dns.example:853

# 可选：跳过证书校验（不安全，仅用于测试）
encrypted-dns-skip-cert-verification = false
```

## 格式

```ini
encrypted-dns-server = {server_url1}[,server_url2,...]
```

## 支持的协议

| URL scheme | 协议 | 默认端口 |
| --- | --- | --- |
| `https://` | DNS over HTTPS (DoH) | 443 |
| `h3://` | DNS over HTTP/3 (DoH3) | 443 |
| `quic://` | DNS over QUIC (DoQ) | 853 |
| `tls://` | DNS over TLS (DoT) | 853 |
| `tcp://` | 传统 DNS over TCP（明文） | 53 |

`tcp://` **不是加密传输**，只接受主机名和可选端口。

## 多服务器

配置多个服务器时，会并行查询全部服务器并使用第一个成功的响应。

## 按域名指定

可以通过 `[Host]` 段让特定域名使用自己的加密服务器，其它域名继续使用全局列表：

```ini
[Host]
example.com = server:https://dns.example/dns-query
```

## 关闭

`encrypted-dns-server = off` 关闭加密 DNS，回退到 `dns-server`。

:::note 注意
加密 DNS 连接始终直连（`DIRECT` 策略），不会经过代理。

URL 中的域名通过传统 DNS 做 bootstrap 解析，因此必须能被传统 DNS 解析。
:::

:::tip 旧键兼容
旧键 `doh-server` 仍然可用，但只支持 `https://` URL。它会在解析时与 `encrypted-dns-server` 合并（仅在内存中归一化），不会改写 profile 文件。
:::
