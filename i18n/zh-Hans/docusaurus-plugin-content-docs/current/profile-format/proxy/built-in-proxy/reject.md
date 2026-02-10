---
sidebar_position: 1
---

# Reject (拒绝)

`REJECT` 代理是一个内置策略，用于拦截特定的流量。它通常用于广告过滤或限制对某些域名的访问。

```ini title="结合 Reject 代理的规则示例"
# 发往 google.com 的流量将被拦截并重置
DOMAIN,www.google.com,REJECT
```

匹配 Reject 代理的流量将不会被发送：

- 对于 UDP 和 ICMP 流量，数据包将被丢弃。
- 对于 TCP 流量，将触发 TCP Reset (重置)。

:::tip 提示
Surfboard 也兼容 `REJECT-TINYGIF` 作为内置代理，但由于 Android 平台不支持 MITM，它会将其视为 `REJECT` 处理。

更多信息请参考 [常见问题 FAQ](/docs/faq#mitm)
:::