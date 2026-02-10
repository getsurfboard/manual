---
sidebar_position: 1
---

# DoH 服务器

指定应用程序使用的 [DoH (DNS over HTTPS)](https://en.wikipedia.org/wiki/DNS_over_HTTPS) 服务器，以提供加密和经过身份验证的 DNS 解析。

## 示例

```ini
# 为加密 DNS 查询定义单个 DoH 服务器
doh-server = https://9.9.9.9/dns-query
```

## 格式

```ini
doh-server = {doh_server1}[,doh_server2,...]
```

:::tip 提示
目前，DoH 查询流量默认使用 [DIRECT (直连)](/docs/profile-format/proxy/built-in-proxy/direct) 代理。请确保 DoH 服务器是可达的。

如果提供了多个 DoH 服务器，Surfboard 会并行查询它们并使用最快的响应。
:::