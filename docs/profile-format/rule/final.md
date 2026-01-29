---
sidebar_position: 7
---

# Final

Traffic that does not match any other rules will match the FINAL rule, if defined.

In general, a profile should only include one final rule, placed as the last entry in the rule section.

## Example

```ini
FINAL, DIRECT
```

## Format

```ini
FINAL, {target}
```

## Parameters

| Name         | Value | Mandatory | Note                                                   |
|--------------|-------|-----------|--------------------------------------------------------|
| target       | -     | true      | The specified proxy or proxy group must exist in the profile. |