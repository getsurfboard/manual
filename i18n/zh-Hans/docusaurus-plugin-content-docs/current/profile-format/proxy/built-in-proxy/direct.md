---
sidebar_position: 0
---

# Direct (直连)

`DIRECT` 代理是一个内置策略，它指示 Surfboard 通过设备的默认网络接口直接发送流量，而不进行任何重定向。

```ini title="结合 Direct 代理的规则示例"
# 发往 apple.com 的流量将通过默认网络直接发送
DOMAIN,www.apple.com,DIRECT
```

匹配 Direct 代理的流量将直接发送，不进行任何重定向或修改。