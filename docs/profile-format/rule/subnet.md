---
sidebar_position: 5
---

# Subnet Rules

Subnet rules allow you to route traffic based on the current network environment, such as the Wi-Fi SSID, BSSID, or network type (Wi-Fi, Cellular, etc.).

## Example

```ini
# Rejects traffic when connected to a specific Wi-Fi SSID
SUBNET,SSID:CMCC,REJECT

# Routes traffic directly when connected to a specific Wi-Fi BSSID (MAC address)
SUBNET,BSSID:F4-98-A0-73-3A-5B,DIRECT

# Routes traffic directly when connected to a specific router gateway IP
SUBNET,ROUTER:192.168.1.1,DIRECT

# Routes traffic directly when using any Wi-Fi connection
SUBNET,TYPE:WIFI,DIRECT
```

## Format

```ini
SUBNET,{type}:{value},{target proxy}
```

## Parameters

| Name         | Value                                                                                                                              | Mandatory | Note                                                                |
|--------------|------------------------------------------------------------------------------------------------------------------------------------|-----------|---------------------------------------------------------------------|
| type         | SSID<br/>BSSID<br/>ROUTER<br/>TYPE<br/>MCCMNC                                                                                      | true      | SSID and BSSID require location permissions on most newer Android devices. |
| value        | SSID: ssid name<br/>BSSID: bssid value (MAC address)<br/>ROUTER: Gateway IP<br/>TYPE: WIFI/WIRED/CELLULAR<br/>MCCMNC: \{mcc}-\{mnc} | true      | ROUTER rule will only take effect under WiFi or wired networks.       |
| target proxy | -                                                                                                                                  | true      | The specified proxy or proxy group must exist in the profile.              |

:::tip
MCC and MNC values can be found at [https://mcc-mnc-list.com/list](https://mcc-mnc-list.com/list).
:::