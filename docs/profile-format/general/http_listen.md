---
sidebar_position: 6
---

# `http-listen`

Establishes a local HTTP proxy server on your device, allowing other applications or devices to route their traffic through Surfboard.

## References

- https://en.wikipedia.org/wiki/HTTP_tunnel
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/CONNECT
- https://en.wikipedia.org/wiki/Proxy_server#Web_proxy_servers

## Example

```ini
# Listens on all interfaces (0.0.0.0) at port 1234, making the proxy accessible to the LAN
http-listen = 0.0.0.0:1234
```

## Format

```ini
http-listen = {ip}:{port}
```

:::tip
To provide proxy service to your LAN, use `0.0.0.0` as the `ip` parameter. Using `127.0.0.1` restricts the service to the local device only.
:::