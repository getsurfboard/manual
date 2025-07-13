---
sidebar_position: 5
---

# Subnet

## Sample

```ini
SUBNET,SSID:CMCC,REJECT
SUBNET,BSSID:F4-98-A0-73-3A-5B,DIRECT
SUBNET,ROUTER:192.168.1.1,DIRECT
SUBNET,TYPE:WIFI,DIRECT
SUBNET,TYPE:WIRED,DIRECT
SUBNET,TYPE:CELLULAR,SelectGroup
SUBNET,MCCMNC:100-200,DIRECT
```

## Format

```ini
SUBNET,{type}:{value},{target proxy}
```

## Param

| Name         | Value                                                                                                                              | Mandatory | Note                                                                |
|--------------|------------------------------------------------------------------------------------------------------------------------------------|-----------|---------------------------------------------------------------------|
| type         | SSID<br/>BSSID<br/>ROUTER<br/>TYPE<br/>MCCMNC                                                                                      | true      | SSID and BSSID require GPS permission on most newer android devices |
| value        | SSID: ssid name<br/>BSSID: bssid value(MAC address)<br/>ROUTER: gateway ip<br/>TYPE: WIFI/WIRED/CELLULAR<br/>MCCMNC: \{mcc}-\{mnc} | true      | ROUTER rule will only take effect under wifi or wired network       |
| target proxy | -                                                                                                                                  | true      | Specified proxy or proxy group must existed in profile              |

:::tip
MCC and MNC value can be query in [https://mcc-mnc-list.com/list](https://mcc-mnc-list.com/list)