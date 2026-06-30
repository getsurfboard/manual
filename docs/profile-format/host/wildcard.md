---
sidebar_position: 1
---

# Wildcard Mapping

Wildcard mapping allows you to map an entire subdomain tree to one or more IP addresses using the `*` prefix. Multiple IPs can be specified by separating them with commas, including mixed IPv4 and IPv6 addresses.

## Example

**Single IP:**

```ini title="Maps IP address to a wildcard domain"
# Maps all subdomains of .dev (e.g., app.dev, api.dev) to 6.7.8.9
*.dev = 6.7.8.9
```

**Multiple IPs:**

```ini title="Maps wildcard domain to multiple IP addresses"
*.dev = 6.7.8.9, 10.0.0.1
```

## Test

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