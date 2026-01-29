---
sidebar_position: 0
---

# Global Proxy

All device traffic will be redirected to the specified proxy.

```ini
[Proxy]
ProxySS = ss, 1.2.3.4, 8000, encrypt-method=chacha20-ietf-poly1305, password=abcd1234

[Rule]
FINAL, ProxySS
```