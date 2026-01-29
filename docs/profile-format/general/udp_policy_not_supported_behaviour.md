---
sidebar_position: 8
---

# `udp-policy-not-supported-behaviour`

If a proxy does not support UDP relay, use [DIRECT](/docs/profile-format/proxy/built-in-proxy/direct) or [REJECT](/docs/profile-format/proxy/built-in-proxy/reject) instead. The default value is `REJECT`.

### Example

```ini
udp-policy-not-supported-behaviour = DIRECT
```

### Format

```ini
udp-policy-not-supported-behaviour = {DIRECT|REJECT}
```

:::note
Only DIRECT or REJECT is supported.
:::