---
sidebar_position: 1
---

# 故障转移

`fallback` 组类型通过在当前代理失败时自动切换到列表中的下一个可用代理，从而确保高可用性。

与自动选择组不同，只要任何代理测试成功，选择更改就会立即生效。

因此，代理顺序在故障转移组中至关重要；你应该将更可靠或更快的代理放在前面。

:::note 注意
用户无法手动更改故障转移组的选择。
:::

## 示例

### 配置文件示例

```ini
[Proxy Group]
# 如果 ProxySOCKS5 连通性测试失败，则切换到 ProxySOCKS5TLS
FallbackGroup = fallback, ProxySOCKS5, ProxySOCKS5TLS, url=http://www.gstatic.com/generate_204, interval=600, timeout=5

[Rule]
# 匹配 'www.google.com' 的流量将通过 FallbackGroup 当前活动的代理重定向
DOMAIN, www.google.com, FallbackGroup
```

### 策略路径 (Policy Path) 示例

```ini
ProxyHTTP = http, 1.2.3.4, 443, username, password
ProxyHTTPS = https, 1.2.3.4, 443, username, password, skip-cert-verify=true, sni=www.google.com
ProxySOCKS5 = socks5, 1.2.3.4, 443, username, password, udp-relay=false
```

这与 [[代理 (Proxy)]](/docs/profile-format/proxy) 部分的定义类似，但没有部分标题。

使用策略路径可以将代理和规则定义分离，从而降低配置文件的复杂度。

## 格式

```ini
{group name} = fallback, {proxies, ...}, {policy-path}, {policy-regex-filter}, {url}, {interval}, {timeout}, hidden = {hidden}, include-all-proxies = {include-all-proxies}, include-other-group = "{include-other-group}"
```

## 参数

| 名称                | 值           | 是否必填 | 备注                                                                                                                                                                                                                                                                                               |
|---------------------|-----------------|-----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| group name          | -               | 是      | 策略组的名称；用作键。                                                                                                                                                                                                                                                |
| proxies             | -               | 是      | 在 `[Proxy]` 部分中定义的代理名称列表，以逗号分隔。                                                                                                                                                                                                                                |
| policy-path         | -               | 否     | 指向代理列表的 URL。<br/>内容格式如上所述。                                                                                                                                                                                                                  |
| policy-regex-filter | -               | 否     | 当定义了 policy-path/include-all-proxies/include-other-group 时适用。<br/>应用于代理名称的正则表达式；仅包含匹配该表达式的代理。注意：这是一个全匹配正则表达式。                                                     |
| url                 | http 协议 URL | 否     | 用于 HTTP HEAD 请求的测试 URL。<br/>如果未定义该 URL，将使用 `[General]` 部分中的 '<a href="/docs/profile-format/general/proxy_test_url">proxy-test-url</a>'。<br/>如果 'proxy-test-url' 也没有定义，则使用 'http://www.gstatic.com/generate_204'。 |
| interval            | -               | 否     | 单位：秒。定义测试间隔。默认值：600。                                                                                                                                                                                                                                   |
| timeout             | -               | 否     | 单位：秒。<br/>超过此持续时间的测试将被视为失败。<br/>默认值：5。                                                                                                                                                                                       |
| hidden              | true<br/>false  | 否     | 是否在用户界面中显示此策略组。即使设置为 false，该组仍然生效。                                                                                                                                                                                       |
| include-all-proxies | true<br/>false  | 否     | 包含配置文件中定义的所有代理。可以与 `policy-regex-filter` 配合使用来过滤特定代理。                                                                                                                                                                                 |
| include-other-group | -               | 否     | 包含由名称指定的其它策略组中的代理。可以与 `policy-regex-filter` 配合使用。多个组名可以用逗号分隔。                                                                                                                       |

:::caution 注意
仅允许使用 **HTTP** 协议的 URL 作为测试 URL。不支持 **HTTPS** 及其它协议。
:::

:::tip 提示
`proxies`、`policy-path`、`include-all-proxies` 和 `include-other-group` 可以在同一个策略组中一起使用。
:::

:::tip 提示
你可以使用配置文件 URL 作为策略路径 URL；仅会使用 `[Proxy]` 部分中定义的代理。
:::