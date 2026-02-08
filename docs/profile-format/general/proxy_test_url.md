---
sidebar_position: 3
---

# `proxy-test-url`

Defines the test URL used by [url-test](/docs/profile-format/proxygroup/auto) groups and manual node speed tests to determine proxy latency and availability.

Non-direct proxies will use this URL. For [direct proxy](/docs/profile-format/proxy/built-in-proxy/direct), please refer to [`internet-test-url`](./internet_test_url).

An `HTTP HEAD` request is sent to this URL. A response of `HTTP/1.1 204 No Content` is expected.

## Example

```ini
# Specifies a reliable URL for testing proxy connectivity and latency
proxy-test-url = http://www.gstatic.com/generate_204
```

## Format

```ini
proxy-test-url = {http_url}
```

:::tip
The URL must start with `http://`. `https://` or other schemes are not supported.
:::

:::tip
You can emulate the proxy test using the command below:
```shell
curl -I http://www.gstatic.com/generate_204
```
:::