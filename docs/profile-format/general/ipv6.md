---
sidebar_position: 9
---

# `ipv6`

Controls whether Surfboard processes IPv6 traffic.

:::tip
Only enable IPv6 when you have confirmed that **both your local network and your proxy server** support IPv6. Enabling it in an environment where either side lacks proper IPv6 support may cause connection delays or degraded network performance.
:::

When set to `false`, Surfboard actively suppresses IPv6 traffic — for example, by returning only IPv4 addresses in DNS responses and not establishing IPv6 connections — even if the underlying physical network and proxy server are IPv6-capable.

### Example

```ini
# Disable IPv6 support
ipv6 = false
```

### Format

```ini
ipv6 = {true|false}
```

:::note
Defaults to `false` if not specified.
:::
