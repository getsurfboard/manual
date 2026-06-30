---
sidebar_position: 0
---

# 精确映射

精确映射提供了特定域名与一个或多个 IP 地址之间的直接对应关系。可以通过逗号分隔来指定多个 IP。

## 示例

**单个 IP：**

```ini title="将 IP 地址映射到精确域名"
# 直接将 abc.com 映射到静态 IP 1.2.3.4
abc.com = 1.2.3.4
```

**多个 IP（A 记录）：**

```ini title="将域名映射到多个 IPv4 地址"
# 在单个 DNS A 记录响应中返回两个 IP
doh.pub = 120.53.53.53, 1.12.12.12
```

**混合 IPv4 和 IPv6：**

```ini title="将域名同时映射到 IPv4 和 IPv6 地址"
# A 查询返回 217.142.237.67，AAAA 查询返回 IPv6 地址
jp.yanghui.name = 217.142.237.67, 2603:c023:12:977e:0:e657:98bd:b030
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