---
sidebar_position: 0
---

# `dns-server`

Specify dns server used by application

## Sample

```ini
dns-server = system, 8.8.8.8, 8.8.4.4, 9.9.9.9:9953
```

## Format

```ini
dns-server = system, {dns server}[:port], ...
```

- Port definition is optional, by default it is `53`
- `system` means use system DNS

:::tip
- If `dns-server` is not assigned, `system` will be used
- Currently [DoT](https://en.wikipedia.org/wiki/DNS_over_TLS) is not supported yet
:::