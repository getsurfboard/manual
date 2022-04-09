---
sidebar_position: 2
---

# Domain alias

## Sample

```ini title="alias domain query result to another"
foo.com = bar.com
```

## Test

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