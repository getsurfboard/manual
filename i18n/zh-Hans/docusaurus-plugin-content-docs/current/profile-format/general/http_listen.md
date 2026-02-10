---
sidebar_position: 6
---

# HTTP 代理监听

在你的设备上建立一个本地 HTTP 代理服务器，允许其他应用程序或设备通过 Surfboard 路由其流量。

## 参考资料

- https://en.wikipedia.org/wiki/HTTP_tunnel
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/CONNECT
- https://en.wikipedia.org/wiki/Proxy_server#Web_proxy_servers

## 示例

```ini
# 在所有接口 (0.0.0.0) 的 1234 端口监听，使局域网可以访问该代理
http-listen = 0.0.0.0:1234
```

## 格式

```ini
http-listen = {ip}:{port}
```

:::tip 提示
要为局域网提供代理服务，请使用 `0.0.0.0` 作为 `ip` 参数。使用 `127.0.0.1` 则仅限本地设备访问。
:::