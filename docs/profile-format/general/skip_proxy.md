---
sidebar_position: 1
---

# `skip-proxy`

Specify route rule and domain rule, matching traffic will not be redirected or rejected.

### Sample

```ini
skip-proxy = 127.0.0.1, 192.168.0.0/16, 10.0.0.0/8, 172.16.0.0/12, 100.64.0.0/10, localhost, *.local, www.baidu.com
```

### Format

```ini
skip-proxy = {ip}, {ip/mask}, {domain}, {wildcard domain}, ...
```

:::note
Due to system restriction, traffic match `skip-proxy` still be handled by VpnService, but treated like [DIRECT](/docs/profile-format/proxy/built-in-proxy/direct) rule
:::