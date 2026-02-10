---
sidebar_position: 2
---

# 托管配置

```
#!MANAGED-CONFIG http://test.com/surfboard.conf interval=60 strict=true
```

托管配置 (Managed config) 用于为当前配置文件定义更新 URL。
包含托管配置的配置文件可以在后台自动更新。

:::caution 注意
托管配置必须定义在配置文件的第一行。
:::

## 参数

- `interval`: 配置文件更新间隔。
    - 格式: 数字 (number)
    - 单位: 秒 (seconds)
    - 最小值: 900 (15 分钟)
- `strict`: 决定是否应禁用在规定时间内未更新的配置文件。
    - 格式: 布尔值 (boolean)

:::caution 注意
目前，Surfboard 会忽略 `strict` 参数，并将其视为 `false`。
:::