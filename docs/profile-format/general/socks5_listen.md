---
sidebar_position: 7
---

# `socks5-listen`

Establishes a local SOCKS5 proxy server on your device, providing a standardized proxy interface for compatible applications.

### References

- https://datatracker.ietf.org/doc/html/rfc1928
- https://datatracker.ietf.org/doc/html/rfc1929

### Example

```ini
# Listens only on the local loopback interface (127.0.0.1) at port 1235
socks5-listen = 127.0.0.1:1235
```

### Format

```ini
socks5-listen = {ip}:{port}
```

:::tip
To provide proxy service to your LAN, use `0.0.0.0` as the `ip` parameter. Using `127.0.0.1` restricts the service to the local device only.
:::