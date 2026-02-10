---
sidebar_position: 0
---

# DNS 服务器

指定应用程序用于域名解析的 DNS 服务器。

## 示例

```ini
# 指定多个 DNS 服务器，包括系统默认值和自定义端口
dns-server = system, 8.8.8.8, 8.8.4.4, 9.9.9.9:9953
```

## 格式

```ini
dns-server = system, {dns server}[:port], ...
```

- 端口定义是可选的，默认为 `53`。
- `system` 表示使用系统 DNS。

:::tip 提示
- 如果未指定 `dns-server`，将使用 `system`。
- 目前不支持 [DoT](https://en.wikipedia.org/wiki/DNS_over_TLS)。
:::