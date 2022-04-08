---
sidebar_position: 3
---

# `[General]`

## `dns-server`

Specify dns server used by application

### Sample

```ini
dns-server = system, 8.8.8.8, 8.8.4.4, 9.9.9.9:9953
```

### Format

```ini
dns-server = system, {dns server}[:port], ...
```

- Port definition is optional, by default it is `53`
- `system` means use system DNS
  
:::tip
- If `dns-server` is not assigned, `system` will be used
- Currently [DoH](https://en.wikipedia.org/wiki/DNS_over_HTTPS) and [DoT](https://en.wikipedia.org/wiki/DNS_over_TLS) is not supported yet
:::


## `skip-proxy`

Specify route rule and domain rule, matching traffic will not be redirected or rejected.

### Sample

```ini
skip-proxy = 127.0.0.1, 192.168.0.0/16, 10.0.0.0/8, 172.16.0.0/12, 100.64.0.0/10, localhost, *.local, www.baidu.com
```

### Format

```ini
skip-proxy = {ip}, {ip/mask}, {domain}, {wildcard domain}, ...
```

:::note
Due to system restriction, traffic match `skip-proxy` still be handled by VpnService, but treated like [DIRECT](/docs/profile-format/proxy/built_in_proxy#direct) rule
:::

## `proxy-test-url`

Test url used by [url-test](/) and manually node speed test.

An `HTTP HEAD` request will be sent towards this url

An `HTTP/1.1 204 No Content` response is expected.

### Sample

```ini
proxy-test-url = http://www.gstatic.com/generate_204
```

### Format

```ini
proxy-test-url = {http_url}
```

:::tip
`url` should start with `http://`, `https://` or other scheme uri is not supported
:::

:::tip
You can emulate proxy test by using command below:
```shell
curl -I http://www.gstatic.com/generate_204
```
:::

## `always-real-ip`

In some scenarios, domain DNS query will response with a fake ip which match `198.18.0.0/16`. Generally it will not cause any issues.

If you encounter some network issue due to this feature, you can specify `always-real-ip` to bypass this hack.

### Sample

```ini
always-real-ip = *.srv.nintendo.net, *.stun.playstation.net, xbox.*.microsoft.com, *.xboxlive.com
```

### Format

```ini
always-real-ip = {domain}, {wildcard domain}, ...
```

:::tip
Currently we observe that the Google Voice dialing problem can be resolved by using `always-real-ip`, please try sample below:

```ini
always-real-ip = stun.l.google.com
```
:::

## `http-listen`

Establish a http proxy server on your device and provide proxy service in specified ip

### References

- https://en.wikipedia.org/wiki/HTTP_tunnel
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/CONNECT
- https://en.wikipedia.org/wiki/Proxy_server#Web_proxy_servers

### Sample

```ini
http-listen = 0.0.0.0:1234
```

### Format

```ini
http-listen = {ip}:{port}
```

:::tip
If you want to provide proxy service in your LAN, you should use `0.0.0.0` as `ip` param, use `127.0.0.1` will provide proxy service on your device only. 
:::

## `socks5-listen`

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