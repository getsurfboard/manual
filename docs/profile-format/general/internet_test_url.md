---
sidebar_position: 4
---

# `internet-test-url`

Test url used by [DIRECT](/docs/profile-format/proxy/built-in-proxy/direct) proxy

For non-direct proxy, please refer to [`proxy-test-url`](./proxy_test_url)

An `HTTP HEAD` request will be sent towards this url

An `HTTP/1.1 204 No Content` response is expected.

## Sample

```ini
internet-test-url = http://www.gstatic.cn/generate_204
```

## Format

```ini
internet-test-url = {http_url}
```

:::tip
`url` should start with `http://`, `https://` or other scheme uri is not supported
:::

:::tip
You can emulate proxy test by using command below:
```shell
curl -I http://www.gstatic.cn/generate_204
```
:::