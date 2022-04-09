---
sidebar_position: 4
---

# `http-listen`

Establish a http proxy server on your device and provide proxy service in specified ip

## References

- https://en.wikipedia.org/wiki/HTTP_tunnel
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/CONNECT
- https://en.wikipedia.org/wiki/Proxy_server#Web_proxy_servers

## Sample

```ini
http-listen = 0.0.0.0:1234
```

## Format

```ini
http-listen = {ip}:{port}
```

:::tip
If you want to provide proxy service in your LAN, you should use `0.0.0.0` as `ip` param, use `127.0.0.1` will provide proxy service on your device only.
:::