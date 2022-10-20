---
sidebar_position: 2
---

# `#!MANAGED-CONFIG`

```
#!MANAGED-CONFIG http://test.com/surfboard.conf interval=60 strict=true
```

Managed config can be used to define an update url for current profile. 
Profile with managed config defined be can updated automatically in the background

:::caution
Managed config must be defined in the first line of the profile
:::

## Param

- `interval`: profile interval update time
    - format: number
    - unit: second
    - minimum value: 900 (15 minutes)
- `strict`: profile that have not been updated within the specified time are not allowed to be used
    - format: boolean

:::caution
Currently Surfboard will ignore `strict` param definition and treat it like `false`
:::
