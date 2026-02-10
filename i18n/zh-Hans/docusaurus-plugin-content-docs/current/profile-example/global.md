---
sidebar_position: 0
---

# 全局代理

所有设备流量都将重定向到指定的代理。

```ini
[Proxy]
ProxySS = ss, 1.2.3.4, 8000, encrypt-method=chacha20-ietf-poly1305, password=abcd1234

[Rule]
FINAL, ProxySS
```