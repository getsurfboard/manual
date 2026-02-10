---
sidebar_position: 0
---

# 手动选择

`select` 组类型允许用户在 Surfboard 界面内的选项列表中手动选择其首选代理。

- 参考资料：https://zh.wikipedia.org/wiki/正则表达式

## 示例

### 配置文件示例

```ini
[Proxy Group]
# 一个允许在多个代理和直连/拒绝策略之间进行手动选择的组
SelectGroup = select, ProxyHTTP, ProxyHTTPS, DIRECT, REJECT, hidden = false

[Rule]
# 匹配 'www.google.com' 的流量将通过 SelectGroup 当前选择的代理重定向
DOMAIN, www.google.com, SelectGroup
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
{group name} = select, {proxies, ...}, {policy-path}, {policy-regex-filter}, hidden = {hidden}, include-all-proxies = {include-all-proxies}, include-other-group = "{include-other-group}"
```

## 参数

| 名称                | 值          | 是否必填 | 备注                                                                                                                                                                                                                                            |
|---------------------|----------------|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| group name          | -              | 是      | 策略组的名称；用作键。                                                                                                                                                                                             |
| proxies             | -              | 是      | 在 `[Proxy]` 部分中定义的代理名称列表，以逗号分隔。                                                                                                                                                                             |
| policy-path         | -              | 否     | 指向代理列表的 URL。内容格式如下所示：<br/><br/><code>ProxyHTTP1 = http, 1.2.3.4, 443, username, password<br/>ProxyHTTP2 = http, 1.2.3.4, 443, username, password</code>                               |
| policy-regex-filter | -              | 否     | 当定义了 policy-path/include-all-proxies/include-other-group 时适用。<br/>应用于代理名称的正则表达式；仅包含匹配该表达式的代理。注意：这是一个全匹配正则表达式。 |
| hidden              | true<br/>false | 否     | 是否在用户界面中显示此策略组. 即使设置为 false，该组仍然生效。                                                                                                                                    |
| include-all-proxies | true<br/>false | 否     | 包含配置文件中定义的所有代理。可以与 `policy-regex-filter` 配合使用来过滤特定代理。                                                                                                                              |
| include-other-group | -              | 否     | 包含由名称指定的其它策略组中的代理。可以与 `policy-regex-filter` 配合使用。多个组名可以用逗号分隔。                                                                    |

:::tip 提示
`proxies`、`policy-path`、`include-all-proxies` 和 `include-other-group` 可以在同一个策略组中一起使用。
:::

:::tip 提示
你可以使用配置文件 URL 作为策略路径 URL；仅会使用 `[Proxy]` 部分中定义的代理。
:::