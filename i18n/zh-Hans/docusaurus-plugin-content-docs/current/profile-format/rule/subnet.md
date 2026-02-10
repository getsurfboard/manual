---
sidebar_position: 5
---

# 子网规则

子网规则允许你根据当前网络环境路由流量，例如 Wi-Fi SSID、BSSID 或网络类型（Wi-Fi、蜂窝网络等）。

## 示例

```ini
# 当连接到特定 Wi-Fi SSID 时拒绝流量
SUBNET,SSID:CMCC,REJECT

# 当连接到特定 Wi-Fi BSSID (MAC 地址) 时直接转发流量
SUBNET,BSSID:F4-98-A0-73-3A-5B,DIRECT

# 当连接到特定路由器网关 IP 时直接转发流量
SUBNET,ROUTER:192.168.1.1,DIRECT

# 当使用任何 Wi-Fi 连接时直接转发流量
SUBNET,TYPE:WIFI,DIRECT
```

## 格式

```ini
SUBNET,{type}:{value},{target proxy}
```

## 参数

| 名称         | 值                                                                                                                              | 是否必填 | 备注                                                                |
|--------------|------------------------------------------------------------------------------------------------------------------------------------|-----------|---------------------------------------------------------------------|
| type         | SSID<br/>BSSID<br/>ROUTER<br/>TYPE<br/>MCCMNC                                                                                      | 是      | 在大多数较新的 Android 设备上，SSID 和 BSSID 需要位置权限。 |
| value        | SSID: ssid 名称<br/>BSSID: bssid 值 (MAC 地址)<br/>ROUTER: 网关 IP<br/>TYPE: WIFI/WIRED/CELLULAR<br/>MCCMNC: \{mcc\}-\{mnc\} | 是      | ROUTER 规则仅在 WiFi 或有线网络下生效。       |
| target proxy | -                                                                                                                                  | 是      | 指定的代理或策略组必须存在于配置文件中。              |

:::tip 提示
MCC 和 MNC 值可以在 [https://mcc-mnc-list.com/list](https://mcc-mnc-list.com/list) 找到。
:::