---
sidebar_position: 7
---

# User-Agent 规则

User-Agent 规则允许你根据请求的 User-Agent 请求头来路由 HTTP 流量。此规则类型仅适用于由系统 HTTP 代理处理的 HTTP/HTTPS 流量。

## 示例

```ini
# 将 Instagram 应用流量路由到 DIRECT
USER-AGENT,Instagram*,DIRECT

# 阻止 curl 请求
USER-AGENT,*curl*,REJECT

# 将 Apple TV 流量路由到指定代理并使用远程 DNS
USER-AGENT,Apple*TV,Proxy,force-remote-dns
```

## 格式

```ini
USER-AGENT, {pattern}, {target proxy}[, force-remote-dns][, enhanced-mode]
```

## 参数

| 名称              | 值             | 必填      | 说明                                                                                  |
|-------------------|----------------|-----------|---------------------------------------------------------------------------------------|
| pattern（模式）   | -              | 是        | 要匹配的 User-Agent 模式。支持通配符 `*`（匹配任意序列）和 `?`（匹配任意单个字符）。 |
| target proxy（目标代理） | -     | 是        | 指定的代理或代理组必须存在于配置文件中。                                              |
| force-remote-dns  | true<br/>false | 否        | 默认值：false。<br/>如果设置为 true，DNS 查询将在远程代理上触发。                     |
| enhanced-mode     | true<br/>false | 否        | 默认值：false。<br/>如果设置为 true，DNS 查询将返回假 IP。                            |

:::caution
**使用要求：**

1. **安卓版本**：User-Agent 规则需要 **Android 10+**（因为依赖系统 HTTP 代理功能）。
2. **设置开关**：必须先在 VPN 设置中开启**"启用 VPN HTTP 代理"**，User-Agent 规则才能生效。
3. **流量类型**：User-Agent 规则**仅适用于由系统 HTTP 代理处理的 HTTP/HTTPS 流量**。不适用于：
   - 直接通过 VPN 隧道的 TCP 流量
   - UDP 流量
   - DNS 查询

`force-remote-dns` 和 `enhanced-mode` 属性仅在 **Android 11 及以上版本**有效。
:::

:::tip
常见 User-Agent 模式：
- `Instagram*` - 匹配 Instagram 应用请求
- `*curl*` - 匹配 curl 工具请求
- `Mozilla*` - 匹配 Mozilla 浏览器请求
- `?ozilla*` - 匹配任何包含 "ozilla" 的浏览器名称（Mozilla、Lozilla 等）
:::

## 参见

- [DOMAIN](./domain.md) - 基于域名的路由规则
- [PROCESS-NAME](./process.md) - 基于应用的路由规则
- [FINAL](./final.md) - 最终兜底规则
