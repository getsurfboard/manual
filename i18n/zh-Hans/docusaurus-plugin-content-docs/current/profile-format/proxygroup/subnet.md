---
sidebar_position: 3
---

# 子网 / SSID

`subnet` 组类型会根据当前网络环境自动选择策略。你可以使用[子网表达式](/docs/profile-format/rule/subnet)作为条件。

:::note 注意
用户无法手动更改子网组的选择。
:::

从 Surge iOS 4.12.0 和 Surge Mac 4.5.0 开始，SSID 组已重命名为子网组。旧的 `ssid` 关键字仍然受支持，行为与 `subnet` 完全一致。

## 示例

### 配置文件示例

```ini
[Proxy Group]
# 连接到家庭 WiFi 时切换到 DIRECT，否则使用自动选择的代理
SubnetGroup = subnet, default = Auto, SSID:MyHome = DIRECT, TYPE:WIFI = DIRECT

[Rule]
# 匹配 'www.google.com' 的流量将通过 SubnetGroup 的当前策略路由
DOMAIN, www.google.com, SubnetGroup
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
{group name} = subnet, default = {proxy}, {expressions...}, hidden = {hidden}, include-all-proxies = {include-all-proxies}, include-other-group = "{include-other-group}"
```

旧关键字 `ssid` 可以替代 `subnet` 使用。

## 参数

| 名称                | 值           | 是否必填 | 备注                                                                                                                                                                                                               |
|---------------------|---------------|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| group name          | -             | 是        | 策略组的名称；用作键。                                                                                                                                                                                              |
| default             | 代理名称      | 是        | 当没有子网表达式匹配时使用的策略。                                                                                                                                                                                  |
| TYPE:WIFI           | 代理名称      | 否        | 连接到 WiFi 网络时使用的策略。                                                                                                                                                                                     |
| TYPE:WIRED          | 代理名称      | 否        | 连接到有线（以太网）网络时使用的策略。                                                                                                                                                                              |
| TYPE:CELLULAR       | 代理名称      | 否        | 连接到蜂窝（移动数据）网络时使用的策略。                                                                                                                                                                            |
| SSID:{ssid}         | 代理名称      | 否        | 连接到指定 SSID 的 WiFi 网络时使用的策略。支持通配符匹配。需要位置权限。                                                                                                                                            |
| BSSID:{bssid}       | 代理名称      | 否        | 连接到指定 BSSID 的 WiFi 网络时使用的策略。支持通配符匹配。需要位置权限。                                                                                                                                           |
| ROUTER:{ip}         | 代理名称      | 否        | 默认网关匹配指定 IP 地址时使用的策略。                                                                                                                                                                              |
| MCCMNC:{mcc}-{mnc}  | 代理名称      | 否        | 连接到指定 MCC 和 MNC 代码的蜂窝网络时使用的策略。                                                                                                                                                                 |
| hidden              | true<br/>false| 否        | 是否在用户界面中显示此策略组。即使设置为 false，该组仍然生效。                                                                                                                                                       |
| include-all-proxies | true<br/>false| 否        | 包含配置文件中定义的所有代理。可以与 `policy-regex-filter` 配合使用来过滤特定代理。                                                                                                                                 |
| include-other-group | -             | 否        | 包含由名称指定的其它策略组中的代理。可以与 `policy-regex-filter` 配合使用。多个组名可以用逗号分隔。                                                                                                                 |

:::tip 提示
条件按声明顺序依次评估。第一个匹配条件的策略会被选中。如果没有条件匹配，则使用 `default` 策略。
:::

:::tip 提示
`proxies`、`policy-path`、`include-all-proxies` 和 `include-other-group` 可以在同一个策略组中一起使用。
:::

:::note 注意
SSID 和 BSSID 条件需要位置权限。如果未授予权限，这些条件将永远不匹配，策略组将回退到 `default` 策略。
:::
