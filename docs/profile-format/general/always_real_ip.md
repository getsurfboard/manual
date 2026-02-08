---
sidebar_position: 5
---

# `always-real-ip`

Forces Surfboard to resolve specific domains to their actual IP addresses, bypassing the default fake IP behavior used for efficiency.

## Example

```ini
# Ensures specific gaming and console services always resolve to their real IP addresses
always-real-ip = *.srv.nintendo.net, *.stun.playstation.net, xbox.*.microsoft.com, *.xboxlive.com
```

## Format

```ini
always-real-ip = {domain}, {wildcard domain}, ...
```

:::tip
We have observed that Google Voice dialing issues can be resolved by using `always-real-ip`. Please try the example below:

```ini
always-real-ip = stun.l.google.com
```
:::