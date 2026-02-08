---
sidebar_position: 0
---

# Exact Mapping

Exact mapping provides a direct one-to-one relationship between a specific domain and an IP address.

## Example

```ini title="Maps IP address to an exact domain"
# Directly maps abc.com to the static IP 1.2.3.4
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