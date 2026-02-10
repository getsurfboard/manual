---
sidebar_position: 0
---

# 域名规则

基于域名的规则允许你根据目标域名来路由流量。Surfboard 支持精确匹配、后缀匹配和关键词匹配。

## 示例

```ini
# 精确匹配域名 www.apple.com 并强制远程 DNS 解析
DOMAIN, www.apple.com, ProxyHTTP, force-remote-dns

# 匹配 apple.com 及其所有子域名，并在本地返回 Fake IP
DOMAIN-SUFFIX, apple.com, Proxy, enhanced-mode

# 匹配任何包含关键词 'google' 的域名
DOMAIN-KEYWORD, google, Proxy
```

## 格式

```ini
{type}, {domain rule}, {target proxy}[, force-remote-dns][, enhanced-mode]
```

## 参数

| 名称             | 值                                               | 是否必填 | 备注                                                                                                                  |
|------------------|--------------------------------------------------|-----------|-----------------------------------------------------------------------------------------------------------------------|
| type             | DOMAIN<br/>DOMAIN-SUFFIX<br/>DOMAIN-KEYWORD<br/> | 是      | DOMAIN: 精确匹配。<br/>DOMAIN-SUFFIX: 后缀匹配。<br/>DOMAIN-KEYWORD: 关键词匹配。         |
| domain rule      | -                                                | 是      |                                                                                                                       |
| target proxy     | -                                                | 是      | 指定的代理或策略组必须存在于配置文件中。                                                                |
| force-remote-dns | true<br/>false                                   | 否     | 默认值: false。<br/>如果设置为 true，DNS 查询将在远程代理上触发。                                 |
| enhanced-mode    | true<br/>false                                   | 否     | 默认值: false。<br/>如果设置为 true，DNS 查询将返回 Fake IP。                                      |