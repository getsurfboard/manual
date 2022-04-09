---
sidebar_position: 0
---

# Exact Mapping

## Sample

```ini title="map ip address to exact domain"
abc.com = 1.2.3.4
```

## Test

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