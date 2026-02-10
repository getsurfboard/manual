---
sidebar_position: 5
---

# 真实 IP

强制 Surfboard 将特定域名解析为其实际 IP 地址，绕过为了提高效率而使用的默认 Fake IP 行为。

## 示例

```ini
# 确保特定的游戏和控制台服务始终解析为其实际 IP 地址
always-real-ip = *.srv.nintendo.net, *.stun.playstation.net, xbox.*.microsoft.com, *.xboxlive.com
```

## 格式

```ini
always-real-ip = {domain}, {wildcard domain}, ...
```

:::tip 提示
我们观察到，通过使用 `always-real-ip` 可以解决 Google Voice 的拨号问题。请尝试下面的示例：

```ini
always-real-ip = stun.l.google.com
```
:::