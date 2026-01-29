---
sidebar_position: 7
---

# `socks5-listen`

Establishes a SOCKS5 proxy server on your device and provides proxy service at the specified IP.

### References

- https://datatracker.ietf.org/doc/html/rfc1928
- https://datatracker.ietf.org/doc/html/rfc1929

### Example

```ini
socks5-listen = 127.0.0.1:1235
```

### Format

```ini
socks5-listen = {ip}:{port}
```

:::tip
To provide proxy service to your LAN, use `0.0.0.0` as the `ip` parameter. Using `127.0.0.1` restricts the service to the local device only.
:::