---
sidebar_position: 8
---

# `udp-policy-not-supported-behaviour`

If proxy not support udp relay, use [DIRECT](/docs/profile-format/proxy/built-in-proxy/direct) or [REJECT](/docs/profile-format/proxy/built-in-proxy/reject) instead

### Sample

```ini
udp-policy-not-supported-behaviour = DIRECT
```

### Format

```ini
udp-policy-not-supported-behaviour = {DIRECT|REJECT}
```

:::note
Only DIRECT or REJECT is supported
:::