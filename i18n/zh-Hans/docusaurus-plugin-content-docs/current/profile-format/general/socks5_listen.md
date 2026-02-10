---
sidebar_position: 7
---

# SOCKS5 代理监听

在你的设备上建立一个本地 SOCKS5 代理服务器，为兼容的应用程序提供标准化的代理接口。

### 参考资料

- https://datatracker.ietf.org/doc/html/rfc1928
- https://datatracker.ietf.org/doc/html/rfc1929

### 示例

```ini
# 仅在本地回环接口 (127.0.0.1) 的 1235 端口监听
socks5-listen = 127.0.0.1:1235
```

### 格式

```ini
socks5-listen = {ip}:{port}
```

:::tip 提示
要为局域网提供代理服务，请使用 `0.0.0.0` 作为 `ip` 参数。使用 `127.0.0.1` 则仅限本地设备访问。
:::