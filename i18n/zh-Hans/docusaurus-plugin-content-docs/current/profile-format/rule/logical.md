---
sidebar_position: 8
---

# 逻辑规则

逻辑规则允许你使用 `AND`、`OR` 和 `NOT` 等逻辑运算符组合多个子规则。这提供了强大且灵活的流量路由能力。

## AND

如果**所有**指定的子规则都匹配流量，则 `AND` 运算符匹配。

### 格式

```ini
AND, ({sub-rule 1}, {sub-rule 2}, ...), {target proxy}
```

## OR

如果指定的子规则中有**任何一个**匹配流量，则 `OR` 运算符匹配。

### 格式

```ini
OR, ({sub-rule 1}, {sub-rule 2}, ...), {target proxy}
```

## NOT

如果指定的子规则**不**匹配流量，则 `NOT` 运算符匹配。

### 格式

```ini
NOT, ({sub-rule}), {target proxy}
```

## 参数

| 名称         | 取值           | 是否必选 | 备注                                                                 |
|--------------|----------------|----------|----------------------------------------------------------------------|
| type         | AND, OR, NOT   | 是       | 逻辑运算符类型。                                                     |
| sub-rules    | -              | 是       | 要评估的规则列表（括在括号内）。                                     |
| target proxy | -              | 是       | 配置文件中必须存在指定的代理或代理组。                               |

## 示例

```ini
# 如果域名后缀是 'google.com' 且目标端口是 443，则匹配
AND, ((DOMAIN-SUFFIX, google.com), (DEST-PORT, 443)), Proxy

# 如果域名后缀是 'example.com' 或者是局域网 IP，则匹配
OR, ((DOMAIN-SUFFIX, example.com), (IP-CIDR, 192.168.0.0/16)), DIRECT

# 如果不是域名后缀 'apple.com'，则匹配
NOT, ((DOMAIN-SUFFIX, apple.com)), Proxy

# 如果所有子规则都不匹配（例如：既不是 apple.com 也不是 google.com），则匹配
NOT, ((OR, ((DOMAIN-SUFFIX, apple.com), (DOMAIN-SUFFIX, google.com)))), Proxy

# 复杂嵌套：如果（来自特定子网）且（不是 apple.com），则匹配
AND, ((SRC-IP-CIDR, 192.168.1.0/24), (NOT, ((DOMAIN-SUFFIX, apple.com)))), Proxy
```

## 外部参考

更多详情，请参考 [Surge 逻辑规则文档](https://manual.nssurge.com/rule/logical.html)。
