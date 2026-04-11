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

```ini title="DNS 查询将发送到自定义端口"
# 强制 example.com 的所有 DNS 查询通过自定义 DNS 服务器的 5353 端口进行解析
example.com = server:192.168.1.100:5353
```

```ini title="通配符域名使用自定义 DNS 端口"
# cloud-nodes.com 的所有子域名将使用 1053 端口的 DNS 服务器进行解析
*.cloud-nodes.com = server:140.205.1.13:1053
```

## 语法

- `server:<ip>` - 使用默认 DNS 端口 53
- `server:<ip>:<port>` - 使用指定的自定义端口
- `server:system` - 使用系统 DNS
- `server:syslib` - 使用系统 DNS 库