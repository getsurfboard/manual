---
sidebar_position: 2
---

# 进程规则

进程规则（或应用规则）允许你根据发起请求的 Android 应用程序包名来路由流量。

## 示例

```ini
# 路由来自 Google Play 商店的流量（精确包名匹配）
PROCESS-NAME,com.android.vending,Proxy

# 路由来自任何包名中包含 'google' 的应用程序的流量
PROCESS-NAME,*google*,Proxy

# 路由 Instagram 流量并强制远程 DNS 解析
PROCESS-NAME,com.instagram.android,Proxy,force-remote-dns
```

## 格式

```ini
PROCESS-NAME, {package name}, {target proxy}[, force-remote-dns][, enhanced-mode]
```

## 参数

| 名称             | 值          | 是否必填 | 备注                                                                                  |
|------------------|----------------|-----------|---------------------------------------------------------------------------------------|
| package name     | -              | 是      | 格式：Android 应用程序包名。支持全匹配或通配符匹配。    |
| target proxy     | -              | 是      | 指定的代理或策略组必须存在于配置文件中。                                |
| force-remote-dns | true<br/>false | 否     | 默认值: false。<br/>如果设置为 true，DNS 查询将在远程代理上触发。 |
| enhanced-mode    | true<br/>false | 否     | 默认值: false。<br/>如果设置为 true，DNS 查询将返回 Fake IP。      |

:::caution 注意
由于系统限制，`force-remote-dns` 和 `enhanced-mode` 仅在 **Android 11 及以上版本**有效。
:::

:::tip 提示
可以通过以下方法找到 Android 应用程序的包名：
- 使用 [Apk Info](https://play.google.com/store/apps/details?id=com.wt.apkinfo) 等软件查询设备上的包名。
- 在网页版 [Google Play](https://play.google.com) 上搜索应用名称。进入应用详情页面，包名将位于 URL 的末尾。
- 在手机上打开应用并保持在前台。使用 [ADB](https://developer.android.com/studio/command-line/adb) 命令获取包名：

```shell
adb shell dumpsys activity recents | grep 'Recent #0' | cut -d= -f2 | sed 's| .*||' | cut -d '/' -f1
```
:::