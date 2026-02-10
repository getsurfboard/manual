---
sidebar_position: 3
---

# 代理测试 URL

定义 [url-test](/docs/profile-format/proxygroup/auto) 策略组和手动节点测速使用的测试 URL，用于确定代理的延迟和可用性。

非直连代理将使用此 URL。对于 [直连 (DIRECT) 代理](/docs/profile-format/proxy/built-in-proxy/direct)，请参考 [`internet-test-url`](./internet_test_url)。

系统会向此 URL 发送一个 `HTTP HEAD` 请求。预期响应为 `HTTP/1.1 204 No Content`。

## 示例

```ini
# 指定一个可靠的 URL 用于测试代理连通性和延迟
proxy-test-url = http://www.gstatic.com/generate_204
```

## 格式

```ini
proxy-test-url = {http_url}
```

:::tip 提示
URL 必须以 `http://` 开头。不支持 `https://` 或其它协议。
:::

:::tip 提示
你可以使用以下命令模拟代理测试：
```shell
curl -I http://www.gstatic.com/generate_204
```
:::