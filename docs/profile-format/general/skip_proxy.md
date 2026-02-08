---
sidebar_position: 2
---

# `skip-proxy`

Specifies a list of IP addresses, CIDR ranges, and domains that should bypass proxy rules and be connected to directly.

### Example

```ini
# Bypasses local addresses, private network ranges, and specific domains
skip-proxy = 127.0.0.1, 192.168.0.0/16, 10.0.0.0/8, 172.16.0.0/12, 100.64.0.0/10, localhost, *.local, www.example.com
```

### Format

```ini
skip-proxy = {ip}, {ip/mask}, {domain}, {wildcard domain}, ...
```

:::note
Due to system restrictions, traffic matching `skip-proxy` is still handled by VpnService but is treated as a [DIRECT](/docs/profile-format/proxy/built-in-proxy/direct) rule.
:::