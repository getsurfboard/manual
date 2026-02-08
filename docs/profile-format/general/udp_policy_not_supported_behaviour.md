---
sidebar_position: 8
---

# `udp-policy-not-supported-behaviour`

Defines how Surfboard handles UDP traffic when the selected proxy policy does not support UDP relay.

### Example

```ini
# Routes UDP traffic directly when the selected proxy does not support it
udp-policy-not-supported-behaviour = DIRECT
```

### Format

```ini
udp-policy-not-supported-behaviour = {DIRECT|REJECT}
```

:::note
Only DIRECT or REJECT is supported.
:::