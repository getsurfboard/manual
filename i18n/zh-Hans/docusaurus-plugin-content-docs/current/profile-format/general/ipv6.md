---
sidebar_position: 9
---

# IPv6

控制 Surfboard 是否处理 IPv6 流量。

:::tip 提示
仅在确认**本地网络和代理服务器均支持 IPv6** 时再启用此选项。若任意一方不具备完整的 IPv6 支持，启用后可能导致连接延迟或网络性能下降。
:::

当设置为 `false` 时，Surfboard 会主动抑制 IPv6 流量的产生——例如在 DNS 响应中仅返回 IPv4 地址、不建立 IPv6 连接等——即使底层物理网络和代理服务器本身支持 IPv6 亦然。

### 示例

```ini
# 禁用 IPv6 支持
ipv6 = false
```

### 格式

```ini
ipv6 = {true|false}
```

:::note 注意
未指定时默认为 `false`。
:::
