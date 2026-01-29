---
sidebar_position: 6
---

# `http-listen`

Establishes an HTTP proxy server on your device and provides proxy service at the specified IP.

## References

- https://en.wikipedia.org/wiki/HTTP_tunnel
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/CONNECT
- https://en.wikipedia.org/wiki/Proxy_server#Web_proxy_servers

## Example

```ini
http-listen = 0.0.0.0:1234
```

## Format

```ini
http-listen = {ip}:{port}
```

:::tip
To provide proxy service to your LAN, use `0.0.0.0` as the `ip` parameter. Using `127.0.0.1` restricts the service to the local device only.
:::