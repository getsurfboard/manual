---
sidebar_position: 1
---

# 通配符映射

通配符映射允许你使用 `*` 前缀将整个子域名树映射到单个 IP 地址。

## 示例

```ini title="将 IP 地址映射到通配符域名"
# 将 .dev 的所有子域名（如 app.dev, api.dev）映射到 6.7.8.9
*.dev = 6.7.8.9
```

## 测试

```shell
➜ ping abc.dev
PING abc.dev (1.2.3.4): 56 data bytes
64 bytes from 1.2.3.4: icmp_seq=0 ttl=53 time=41.005 ms
64 bytes from 1.2.3.4: icmp_seq=1 ttl=53 time=45.930 ms
^C
--- abc.dev ping statistics ---
2 packets transmitted, 2 packets received, 0.0% packet loss
round-trip min/avg/max/stddev = 41.005/43.468/45.930/2.462 ms
```