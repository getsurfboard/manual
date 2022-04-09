---
sidebar_position: 1
---

# IP

## CIDR

Reference: https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing

### Sample

```ini
IP-CIDR,192.168.0.0/16,DIRECT
IP-CIDR6,2001:db8:abcd:8000::/50,DIRECT
```

### Format

```ini
{type}, {route}, {target proxy}
```

### Param

| Name         | Value                | Mandatory | Note                                                             |
|--------------|----------------------|-----------|------------------------------------------------------------------|
| type         | IP-CIDR<br/>IP-CIDR6 | true      | IP-CIDR works on IPv4 traffic<br/>IP-CIDR6 works on IPv6 traffic |
| route        | -                    | true      | Format: {IP}/{mask}, mask is in prefix format                    |
| target proxy | -                    | true      | Specified proxy or proxy group must existed in profile           |

:::caution
IPv6 is not supported by Surfboard currently, `IP-CIDR6` rules will be ignored.
:::

## GEOIP

Reference: 
- https://en.wikipedia.org/wiki/Internet_geolocation
- https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2

### Sample

```ini
GEOIP,US,REJECT
```

### Format

```ini
GEOIP,{country},REJECT
```

### Param

| Name         | Value | Mandatory | Note                                                             |
|--------------|-------|-----------|------------------------------------------------------------------|
| country      | -     | true      | Format: 2 Bit ISO country code                                   |
| target proxy | -     | true      | Specified proxy or proxy group must existed in profile           |