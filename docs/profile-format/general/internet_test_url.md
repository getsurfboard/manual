---
sidebar_position: 4
---

# `internet-test-url`

Test URL used by the [DIRECT](/docs/profile-format/proxy/built-in-proxy/direct) proxy.

For non-direct proxies, please refer to [`proxy-test-url`](./proxy_test_url).

An `HTTP HEAD` request is sent to this URL.

A response of `HTTP/1.1 204 No Content` is expected.

## Example

```ini
internet-test-url = http://www.gstatic.cn/generate_204
```

## Format

```ini
internet-test-url = {http_url}
```

:::tip
The URL must start with `http://`. `https://` or other schemes are not supported.
:::

:::tip
You can emulate the proxy test using the command below:
```shell
curl -I http://www.gstatic.cn/generate_204
```
:::