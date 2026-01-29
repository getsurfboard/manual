---
sidebar_position: 2
---

# `#!MANAGED-CONFIG`

```
#!MANAGED-CONFIG http://test.com/surfboard.conf interval=60 strict=true
```

Managed config is used to define an update URL for the current profile. 
Profiles with a managed config can be updated automatically in the background.

:::caution
Managed config must be defined on the very first line of the profile.
:::

## Parameters

- `interval`: Profile update interval.
    - Format: number
    - Unit: seconds
    - Minimum value: 900 (15 minutes)
- `strict`: Determines if profiles that have not been updated within the specified time should be disabled.
    - Format: boolean

:::caution
Currently, Surfboard ignores the `strict` parameter and treats it as `false`.
:::