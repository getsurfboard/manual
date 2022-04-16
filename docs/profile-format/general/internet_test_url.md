---
sidebar_position: 3
---

# `internet-test-url`

Test url used by [url-test](/docs/profile-format/proxygroup/auto) and manually node speed test.

[Direct proxy](/docs/profile-format/proxy/built-in-proxy/direct) will use this url. For non-direct proxy, please refer to [`proxy-test-url`](./proxy_test_url)

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