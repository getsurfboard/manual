---
sidebar_position: 6
---

# `socks5-listen`

Establish a socks5 proxy server on your device and provide proxy service in specified ip

### References

- https://datatracker.ietf.org/doc/html/rfc1928
- https://datatracker.ietf.org/doc/html/rfc1929

### Sample

```ini
socks5-listen = 127.0.0.1:1235
```

### Format

```ini
socks5-listen = {ip}:{port}
```

:::tip
If you want to provide proxy service in your LAN, you should use `0.0.0.0` as `ip` param, use `127.0.0.1` will provide proxy service on your device only.
:::