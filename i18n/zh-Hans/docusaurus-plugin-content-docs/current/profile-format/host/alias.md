---
sidebar_position: 2
---

# 域名别名

域名别名（类似于 CNAME 记录）允许一个域名继承另一个域名的 DNS 解析结果。

## 示例

```ini title="将一个域名的查询结果别名为另一个域名"
# 解析 foo.com 时使用与 bar.com 相同的 IP 地址
foo.com = bar.com
```

## 测试

```shell
➜ ping bar.com
PING bar.com (2.3.4.5): 56 data bytes
64 bytes from 2.3.4.5: icmp_seq=0 ttl=53 time=41.005 ms
64 bytes from 2.3.4.5: icmp_seq=1 ttl=53 time=45.930 ms
^C
--- bar.com ping statistics ---
2 packets transmitted, 2 packets received, 0.0% packet loss
round-trip min/avg/max/stddev = 41.005/43.468/45.930/2.462 ms
```

```shell
➜ ping foo.com
PING foo.com (2.3.4.5): 56 data bytes
64 bytes from 2.3.4.5: icmp_seq=0 ttl=53 time=41.005 ms
64 bytes from 2.3.4.5: icmp_seq=1 ttl=53 time=45.930 ms
^C
--- foo.com ping statistics ---
2 packets transmitted, 2 packets received, 0.0% packet loss
round-trip min/avg/max/stddev = 41.005/43.468/45.930/2.462 ms
```