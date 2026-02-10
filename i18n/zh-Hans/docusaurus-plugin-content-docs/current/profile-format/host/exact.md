---
sidebar_position: 0
---

# 精确映射

精确映射提供了特定域名与 IP 地址之间直接的一一对应关系。

## 示例

```ini title="将 IP 地址映射到精确域名"
# 直接将 abc.com 映射到静态 IP 1.2.3.4
abc.com = 1.2.3.4
```

## 测试

```shell
➜ ping abc.com
PING abc.com (1.2.3.4): 56 data bytes
64 bytes from 1.2.3.4: icmp_seq=0 ttl=53 time=41.005 ms
64 bytes from 1.2.3.4: icmp_seq=1 ttl=53 time=45.930 ms
^C
--- abc.com ping statistics ---
2 packets transmitted, 2 packets received, 0.0% packet loss
round-trip min/avg/max/stddev = 41.005/43.468/45.930/2.462 ms
```