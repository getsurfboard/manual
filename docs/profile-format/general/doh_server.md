---
sidebar_position: 1
---

# `doh-server`

Specifies the [DoH (DNS over HTTPS)](https://en.wikipedia.org/wiki/DNS_over_HTTPS) servers used by the application to provide encrypted and authenticated DNS resolution.

## Example

```ini
# Defines a single DoH server for encrypted DNS queries
doh-server = https://9.9.9.9/dns-query
```

## Format

```ini
doh-server = {doh_server1}[,doh_server2,...]
```

:::tip
Currently, DoH query traffic uses the [DIRECT](/docs/profile-format/proxy/built-in-proxy/direct) proxy by default. Please ensure the DoH server is reachable.

If multiple DoH servers are provided, Surfboard queries them in parallel and uses the fastest response.
:::