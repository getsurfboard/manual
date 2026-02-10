---
sidebar_position: 2
---

# 绕过代理

指定应绕过代理规则并直接连接的 IP 地址、CIDR 范围和域名列表。

### 示例

```ini
# 绕过本地地址、私有网络范围和特定域名
skip-proxy = 127.0.0.1, 192.168.0.0/16, 10.0.0.0/8, 172.16.0.0/12, 100.64.0.0/10, localhost, *.local, www.example.com
```

### 格式

```ini
skip-proxy = {ip}, {ip/mask}, {domain}, {wildcard domain}, ...
```

:::note 注意
由于系统限制，匹配 `skip-proxy` 的流量仍由 VpnService 处理，但会被视为 [DIRECT (直连)](/docs/profile-format/proxy/built-in-proxy/direct) 规则。
:::