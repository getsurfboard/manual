---
sidebar_position: 5
---

# `always-real-ip`

In some scenarios, domain DNS queries will respond with a fake IP matching `198.18.0.0/16`. Generally, this will not cause any issues.

If you encounter network issues due to this feature, you can specify `always-real-ip` to bypass this behavior.

## Example

```ini
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