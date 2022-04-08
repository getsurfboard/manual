---
sidebar_position: 4
---

# `[Host]`

Host section mostly deal with DNS query/response, it is very useful if you want to test a local server with custom domain, 
just map local server ip with the domain you want to use.

Reference: https://en.wikipedia.org/wiki/Domain_Name_System

## Exact Mapping

### Sample

```ini title="map ip address to exact domain"
abc.com = 1.2.3.4
```

### Test

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

## Wildcard mapping

### Sample

```ini title="map ip address to wildcard domain"
*.dev = 6.7.8.9
```

### Test

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

## Domain alias

### Sample

```ini title="alias domain query result to another"
foo.com = bar.com
```

### Test

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

## Query domain with specified DNS server

### Sample

```ini title="DNS query will be sent to 8.8.8.8"
bar.com = server:8.8.8.8
```

```ini title="DNS query will be sent to system DNS server"
bar.com = server:system
```