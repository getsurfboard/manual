---
sidebar_position: 6
---

# 常见问题

## Surfboard 是否支持自动配置文件更新？

是的，Surfboard 支持自动配置文件更新，即使应用在后台运行也是如此。

这是通过在配置文件的开头定义 [managed-config](/docs/profile-format/managed_config) 行来实现的：

```
#!MANAGED-CONFIG http://test.com/surge.conf interval=60 strict=true
```

## 耗电量高吗？

默认情况下，Surfboard 处理系统的所有网络流量。

在某些系统上，归因于其他应用的网络传输电量消耗可能会被计入 Surfboard。

请根据你的实际使用时间和设备性能来判断实际的电池影响，而不是仅仅依赖于系统设置中显示的电池消耗百分比。

## 为什么系统设置中显示的流量消耗很高？

由于 Surfboard 接管了系统的所有网络流量，设备传输的所有数据（无论是通过代理路由还是直接发送）都由 Surfboard 处理。因此，系统会将所有系统级流量归因于 Surfboard，导致其流量消耗看起来比实际高得多。

## 如何降低耗电量？

你可以使用“工具”选项卡中的 **Bypass**（分应用代理）配置。将特定的应用程序排除在 VPN 之外（或仅包含必要的应用程序）可以降低耗电量。

:::caution 注意
只有在你了解其影响的情况下才修改 Bypass 配置。错误的设置可能会导致某些应用程序运行异常。
:::

## 如何分析网络问题？

请检查以下内容：

### 1. 协议是否支持？

检查 [支持的协议列表](/docs/profile-format/proxy)。

### 2. 重置 Bypass 配置

取消选中 Bypass 配置中的所有条目，以确保没有应用被无意中阻止或允许。

### 3. 尝试全局出站模式

在仪表盘中切换到 **Global**（全局）出站模式。

如果全局模式有效，问题可能是由以下原因引起的：
- DNS 污染
- 配置文件规则错误

## 为什么不支持某些 Surge 标准？

### MITM (中间人攻击) {#mitm}

自 Android 7.0 起，[Google 已移除对默认信任用户安装 CA 的支持](https://android-developers.googleblog.com/2016/07/changes-to-trusted-certificate.html)。因此，MITM 功能仅在 root 过的设备上可行。

### `USER-AGENT`

User-Agent 信息仅在明文 HTTP 流量中或通过 MITM 解密可用。

由于 MITM 在 Android 上不是标准的，且大多数互联网流量现在都是 HTTPS，因此在 Android 平台上支持 `USER-AGENT` 规则在很大程度上是不可能且不必要的。

### `URL-REGEX`

与 `USER-AGENT` 规则类似，`URL-REGEX` 匹配需要 MITM 来检查 HTTPS 请求的 URL，这在没有 root 权限 and 安装 CA 的情况下是不可行的。

## 为什么不支持 SSR、Trojan gRPC、VLESS 或 Xray 等协议？

Surfboard 严格遵循 Surge 配置格式标准。

Surfboard 旨在支持 Surge 中标准的协议，以严格避免碎片化。

我们相信盲目地支持每一种可用的协议不一定能带来额外的收益，反而会增加维护应用的难度。

如果你需要 Surfboard 不支持的协议，请考虑使用其他优秀的应用，如 [Clash for Android](https://github.com/Kr328/ClashForAndroid) 或 [v2rayNG](https://github.com/2dust/v2rayNG)。

## 为什么延迟测试的结果比预期高？

Surfboard 使用 `HTTP HEAD` 请求来测试节点速度，类似于 Surge。

- **首次测试：** 延迟通常较高，因为没有该节点的 DNS 缓存。
- **后续测试：** 延迟应该较低，因为 DNS 查询时间由于缓存而被消除。

请注意，CPU 性能较弱的设备也可能会经历略高的处理延迟。

## 为什么我会看到“导入的配置文件包含无效的更新 URL”？

如果配置文件的顶部定义了 [managed-config](/docs/profile-format/managed_config) 行，Surge 格式支持自动更新。

如果配置文件在此配置中包含无效的 URL，Surfboard 将提示此警告。

:::tip 提示
这通常发生在 URL 的主机是本地地址（例如 `127.0.0.1`）时。

如果你使用的是第三方配置文件转换器，这可能是其转换过程中的一个 bug。请考虑使用不同的转换器或联系提供商。
:::