---
sidebar_position: 5
---

# Final

Traffic doesn't match any other rules will match final rule if defined.

In general, a profile should only include one final rule, and place it as the last one in rule section.

## Sample

```ini
FINAL, DIRECT
```

## Format

```ini
FINAL, {target}
```

## Param

| Name         | Value | Mandatory | Note                                                   |
|--------------|-------|-----------|--------------------------------------------------------|
| target       | -     | true      | Specified proxy or proxy group must existed in profile |