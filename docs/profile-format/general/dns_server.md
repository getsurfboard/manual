---
sidebar_position: 0
---

# `dns-server`

Specifies the DNS servers used by the application for domain name resolution.

## Example

```ini
# Specifies multiple DNS servers, including a system default, a custom port, and IPv6
dns-server = system, 8.8.8.8, 8.8.4.4, 9.9.9.9:9953, 2400:3200::1, [2606:4700:4700::1001]:53
```

## Format

```ini
dns-server = system, {dns server}[:port], ...
```

- Port definition is optional; the default is `53`.
- `system` means use system DNS.
- IPv4 with port: `223.5.5.5:5353`
- Bare IPv6: `2400:3200::1`
- IPv6 with port: `[2606:4700:4700::1001]:53`

:::tip
- If `dns-server` is not specified, `system` will be used.
- Currently, [DoT](https://en.wikipedia.org/wiki/DNS_over_TLS) is not supported.
:::