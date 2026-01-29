---
sidebar_position: 1
---

# IP

## CIDR

Reference: https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing

### Example

```ini
IP-CIDR,192.168.0.0/16,DIRECT
IP-CIDR6,2001:db8:abcd:8000::/50,DIRECT
```

### Format

```ini
{type}, {route}, {target proxy}
```

### Parameters

| Name         | Value                | Mandatory | Note                                                             |
|--------------|----------------------|-----------|------------------------------------------------------------------|
| type         | IP-CIDR<br/>IP-CIDR6 | true      | IP-CIDR works on IPv4 traffic.<br/>IP-CIDR6 works on IPv6 traffic. |
| route        | -                    | true      | Format: \{IP}/\{mask}, where the mask is in CIDR prefix format.                  |
| target proxy | -                    | true      | The specified proxy or proxy group must exist in the profile.           |

:::caution
IPv6 is currently not supported by Surfboard; `IP-CIDR6` rules will be ignored.
:::

## GEOIP

Reference: 
- https://en.wikipedia.org/wiki/Internet_geolocation
- https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2

### Example

```ini
GEOIP,US,REJECT
```

### Format

```ini
GEOIP,{country},REJECT
```

### Parameters

| Name         | Value | Mandatory | Note                                                             |
|--------------|-------|-----------|------------------------------------------------------------------|
| country      | -     | true      | Format: 2-letter ISO country code.                                   |
| target proxy | -     | true      | The specified proxy or proxy group must exist in the profile.           |