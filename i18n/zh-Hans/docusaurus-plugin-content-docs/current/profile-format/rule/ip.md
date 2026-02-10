---
sidebar_position: 1
---

# IP 规则

基于 IP 的规则允许根据目标 IP 地址或其地理位置 (GeoIP) 进行流量路由。

## CIDR (无类别域间路由)

CIDR 规则将流量与特定的 IP 地址范围进行匹配。

参考资料：https://zh.wikipedia.org/wiki/无类别域间路由

### 示例

```ini
# 将发往 192.168.0.0/16 私有网络的流量直接转发
IP-CIDR,192.168.0.0/16,DIRECT

# 将 IPv6 流量路由到指定的 CIDR 范围（目前 Surfboard 会忽略此规则）
IP-CIDR6,2001:db8:abcd:8000::/50,DIRECT
```

### 格式

```ini
{type}, {route}, {target proxy}
```

### 参数

| 名称         | 值                | 是否必填 | 备注                                                             |
|--------------|----------------------|-----------|------------------------------------------------------------------|
| type         | IP-CIDR<br/>IP-CIDR6 | 是      | IP-CIDR 适用于 IPv4 流量。<br/>IP-CIDR6 适用于 IPv6 流量。 |
| route        | -                    | 是      | 格式：\{IP\}/\{mask\}，其中掩码采用 CIDR 前缀格式。                  |
| target proxy | -                    | 是      | 指定的代理或策略组必须存在于配置文件中。           |

:::caution 注意
Surfboard 目前不支持 IPv6；`IP-CIDR6` 规则将被忽略。
:::

## GEOIP (地理位置)

参考资料：
- https://zh.wikipedia.org/wiki/地理位置
- https://zh.wikipedia.org/wiki/ISO_3166-1二位字母代码

### 示例

```ini
GEOIP,US,REJECT
```

### 格式

```ini
GEOIP,{country},REJECT
```

### 参数

| 名称         | 值 | 是否必填 | 备注                                                             |
|--------------|-------|-----------|------------------------------------------------------------------|
| country      | -     | 是      | 格式：2 位 ISO 国家代码。                                   |
| target proxy | -     | 是      | 指定的代理或策略组必须存在于配置文件中。           |