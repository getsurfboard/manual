---
sidebar_position: 3
---

# 规则集

规则集是托管在远程 URL 上的规则集合。它允许模块化和可重用的规则配置，从而简化你的配置文件。

使用规则集可以大大简化包含许多规则的配置文件内容，并允许重用其他贡献者创建的规则。

:::tip 提示
在规则集中定义大量规则会显著降低规则匹配的效率。
在这种情况下，我们强烈建议切换到 [域名列表 (Domain Set)](./domainset) 标准。
:::

## 示例

### 规则集定义

```ini
# 获取远程规则列表并将匹配的流量路由到 ProxyVMess
RULE-SET,https://example.com/china_rules.conf,ProxyVMess
```

### 远程规则集内容示例

```ini
DOMAIN,www.apple.com
DOMAIN,www.google.com
DOMAIN-SUFFIX,apple.com
DOMAIN-KEYWORD,google
IP-CIDR,192.168.0.0/16
GEOIP,US
```

请 note，其中不包含目标 (target) 定义。所有匹配的流量将使用代理 'ProxyVMess' 作为目标。

## 格式

```ini
RULE-SET, {rule set url}, {target}
```

## 参数

| 名称         | 值 | 是否必填 | 备注                                                   |
|--------------|-------|-----------|--------------------------------------------------------|
| rule set url | -     | 是      |                                                        |
| target       | -     | 是      | 指定的代理或策略组必须存在于配置文件中。 |