---
sidebar_position: 2
---

# `skip-proxy`

Specifies route rules and domain rules. Matching traffic will not be redirected or rejected.

### Example

```ini
skip-proxy = 127.0.0.1, 192.168.0.0/16, 10.0.0.0/8, 172.16.0.0/12, 100.64.0.0/10, localhost, *.local, www.baidu.com
```

### Format

```ini
skip-proxy = {ip}, {ip/mask}, {domain}, {wildcard domain}, ...
```

:::note
Due to system restrictions, traffic matching `skip-proxy` is still handled by VpnService but is treated as a [DIRECT](/docs/profile-format/proxy/built-in-proxy/direct) rule.
:::