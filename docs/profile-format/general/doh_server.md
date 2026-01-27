---
sidebar_position: 1
---

# `doh-server`

Specify [DoH(DNS over HTTPS)](https://en.wikipedia.org/wiki/DNS_over_HTTPS) server used by application

## Sample

```ini
doh-server = https://9.9.9.9/dns-query
```

## Format

```ini
doh-server = {doh_server1}[,doh_server2,...]
```

:::tip
Currently DoH query traffic will use [DIRECT](/docs/profile-format/proxy/built-in-proxy/direct) proxy by default, please make sure you are using a reachable DoH server

If multiple DoH servers are provided, Surfboard queries them in parallel and uses the fastest response.
:::