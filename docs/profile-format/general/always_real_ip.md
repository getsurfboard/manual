---
sidebar_position: 4
---

# `always-real-ip`

In some scenarios, domain DNS query will response with a fake ip which match `198.18.0.0/16`. Generally it will not cause any issues.

If you encounter some network issue due to this feature, you can specify `always-real-ip` to bypass this hack.

## Sample

```ini
always-real-ip = *.srv.nintendo.net, *.stun.playstation.net, xbox.*.microsoft.com, *.xboxlive.com
```

## Format

```ini
always-real-ip = {domain}, {wildcard domain}, ...
```

:::tip
Currently we observe that the Google Voice dialing problem can be resolved by using `always-real-ip`, please try sample below:

```ini
always-real-ip = stun.l.google.com
```
:::