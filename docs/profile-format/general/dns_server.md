---
sidebar_position: 0
---

# `dns-server`

Specifies the DNS servers used by the application.

## Example

```ini
dns-server = system, 8.8.8.8, 8.8.4.4, 9.9.9.9:9953
```

## Format

```ini
dns-server = system, {dns server}[:port], ...
```

- Port definition is optional; the default is `53`.
- `system` means use system DNS.

:::tip
- If `dns-server` is not specified, `system` will be used.
- Currently, [DoT](https://en.wikipedia.org/wiki/DNS_over_TLS) is not supported.
:::