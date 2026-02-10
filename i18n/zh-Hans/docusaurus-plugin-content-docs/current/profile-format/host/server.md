---
sidebar_position: 3
---

# 指定 DNS 服务器

你可以为特定域名指定自定义 DNS 服务器，从而实现对解析源的精细控制。

## 示例

```ini title="DNS 查询将被发送到 8.8.8.8"
# 强制 bar.com 的所有 DNS 查询通过 Google Public DNS (8.8.8.8) 进行解析
bar.com = server:8.8.8.8
```

```ini title="DNS 查询将被发送到系统 DNS 服务器"
# 确保 bar.com 始终使用设备的系统 DNS 进行解析
bar.com = server:system
```