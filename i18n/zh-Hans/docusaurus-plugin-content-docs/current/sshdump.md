---
sidebar_position: 4
---

# SSHDump 抓包

SSHDump 允许你通过 Wireshark 的 SSH remote capture 接口，将 Surfboard 的实时 VPN 流量直接导入 Wireshark 进行分析。这适用于深度包检测和网络调试。

:::caution
开启 SSHDump 会显著降低 VPN 性能，因为每个数据包都需要通过 SSH 套接字同步传输。请仅在调试时使用。
:::

## 前置条件

- Android 8.0 或更高版本（Android 7 及以下不支持 SSHDump）
- Surfboard VPN 已启动
- 电脑与 Android 设备处于同一局域网
- 电脑上已安装支持 SSH remote capture 的 Wireshark

## 开启 SSHDump

1. 打开 **Surfboard** 并启动 VPN。
2. 进入 **设置** → **VPN 设置**。
3. 打开 **SSH remote capture** 开关。

开启后，Dashboard 将出现提示卡片：

```
SSHDump is running on <private_ip>:15000
```

默认端口为 `15000`，如果该端口被占用，系统会自动分配其他端口。

## 在 Wireshark 中抓包

1. 打开 **Wireshark**。
2. 在捕获接口列表中选择 **SSH remote capture**。
3. 填写以下信息：
   - **Remote host**: Surfboard Dashboard 中显示的私有 IP 地址（例如 `192.168.1.100`）
   - **Remote port**: Dashboard 中显示的端口（默认 `15000`）
   - **Remote capture command**: 可留空或填写任意命令
4. 认证时输入任意用户名和任意密码（或使用任意密钥）即可，SSHDump 为了方便调试会接受所有凭据。
5. 点击 **Start**，Wireshark 就会开始实时显示 VPN 隧道中的数据包。

## 注意事项

- SSHDump 在 Surfboard 内部绑定到 `0.0.0.0`，因此同一局域网内的任何设备都可以连接。
- 捕获的接口类型为 **RAW IP**（Link-type 101），因此协议解析从 IP 层开始。
- 抓包中显示的系统 DNS IP（`198.18.0.4`、`198.18.0.5`）以及本地 TUN 地址（`198.18.0.1`）是 VPN 引擎内部使用的占位地址。
- 调试完成后请关闭 SSHDump，以恢复正常的 VPN 性能。

## 相关链接

- [Wireshark sshdump 官方文档](https://www.wireshark.org/docs/man-pages/sshdump.html)
