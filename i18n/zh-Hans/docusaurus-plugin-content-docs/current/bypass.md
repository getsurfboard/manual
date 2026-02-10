---
sidebar_position: 8
---

# Bypass 配置

## 导入/导出格式

分应用代理绕过配置使用以下 JSON 格式：

```json
{
    "mode": "allowed" | "disallowed",
    "package_name": [
        "com.android.vending",
        ...
    ]
}
```

- **mode**: 决定列表中包的行为。
  - `allowed`: 仅代理列表中的包（白名单模式）。
  - `disallowed`: 列表中的包将绕过代理（黑名单模式）。
- **package_name**: 要应用规则的 Android 应用包名数组。