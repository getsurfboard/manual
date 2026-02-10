---
sidebar_position: 8
---

# UDP 不支持时的行为

定义当所选代理策略不支持 UDP 转发时，Surfboard 如何处理 UDP 流量。

### 示例

```ini
# 当所选代理不支持 UDP 时，直接转发 UDP 流量
udp-policy-not-supported-behaviour = DIRECT
```

### 格式

```ini
udp-policy-not-supported-behaviour = {DIRECT|REJECT}
```

:::note 注意
仅支持 DIRECT (直连) 或 REJECT (拒绝)。
:::