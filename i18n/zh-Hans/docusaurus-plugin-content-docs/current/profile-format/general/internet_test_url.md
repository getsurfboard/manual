---
sidebar_position: 4
---

# 外部网络测试 URL

定义用于验证 [DIRECT (直连)](/docs/profile-format/proxy/built-in-proxy/direct) 代理连通性的测试 URL。

对于非直连代理，请参考 [`proxy-test-url`](./proxy_test_url)。

系统会向此 URL 发送一个 `HTTP HEAD` 请求。预期响应为 `HTTP/1.1 204 No Content`。

## 示例

```ini
# 指定一个可靠的 URL 用于测试直接互联网连接
internet-test-url = http://www.gstatic.cn/generate_204
```

## 格式

```ini
internet-test-url = {http_url}
```

:::tip 提示
URL 必须以 `http://` 开头。不支持 `https://` 或其它协议。
:::

:::tip 提示
你可以使用以下命令模拟代理测试：
```shell
curl -I http://www.gstatic.cn/generate_204
```
:::