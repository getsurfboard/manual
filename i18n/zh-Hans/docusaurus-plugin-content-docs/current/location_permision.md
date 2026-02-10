---
sidebar_position: 9
---

# 位置权限说明

我们的应用程序请求后台位置权限 (BACKGROUND_LOCATION) 以支持特定的高级网络规则功能，详见下文：

1. **SUBNET-SSID 规则支持：**
   当你选择使用基于 WiFi 网络名称 (SSID) 的规则时，我们需要此权限来识别你连接的 WiFi 网络。

2. **SUBNET-BSSID 规则支持：**
   如果你配置了基于 WiFi 路由器 MAC 地址 (BSSID) 的规则，我们需要此权限来识别特定的 WiFi 接入点。

## 重要提示：
- 此权限仅在你主动选择使用 SUBNET-SSID 或 SUBNET-BSSID 规则时使用。
- 我们不会将此权限用于持续的位置追踪或收集你的精确位置信息。
- 收集的 SSID 或 BSSID 信息仅用于执行你设置的网络规则，不用于任何其他目的。
- 所有数据均在本地处理，不会上传到我们的服务器或与第三方共享。

## 隐私保护：
- 你可以随时在应用设置中控制或撤销此权限。
- 如果你选择不授予此权限，SUBNET-SSID 和 SUBNET-BSSID 规则将无法正常工作，但这不会影响应用的其它功能。

我们充分意识到位置权限的敏感性，并承诺仅在必要时使用。我们将继续努力保护你的隐私。有关 SUBNET 规则的更多信息，请访问我们的文档：[https://getsurfboard.com/docs/profile-format/rule/subnet](https://getsurfboard.com/docs/profile-format/rule/subnet)