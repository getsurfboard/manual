---
sidebar_position: 99
---

# Final Rule

The `FINAL` rule acts as a catch-all policy for any traffic that has not matched any of the preceding rules in the profile.

In general, a profile should only include one final rule, which MUST be placed as the very last entry in the rule section.

## Example

```ini
# Routes all otherwise unmatched traffic directly
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