---
sidebar_position: 0
---

# Exact Mapping

Exact mapping provides a direct relationship between a specific domain and one or more IP addresses. Multiple IPs can be specified by separating them with commas.

## Example

**Single IP:**

```ini title="Maps IP address to an exact domain"
# Directly maps abc.com to the static IP 1.2.3.4
abc.com = 1.2.3.4
```

**Multiple IPs (A records):**

```ini title="Maps a domain to multiple IPv4 addresses"
# Returns both IPs in a single DNS A-record response
doh.pub = 120.53.53.53, 1.12.12.12
```

**Mixed IPv4 and IPv6:**

```ini title="Maps a domain to both IPv4 and IPv6 addresses"
# A queries return 217.142.237.67, AAAA queries return the IPv6 address
jp.yanghui.name = 217.142.237.67, 2603:c023:12:977e:0:e657:98bd:b030
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