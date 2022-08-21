---
sidebar_position: 0
---

# Static panel

## Sample 

```ini
PanelA = title="Panel Title", content="Panel Content\nSecondLine", style=info
```

## Format

```ini
{panel name} = title="{panel title}", content="{panel content}", style={panel style}
```

## Params

| Name          | Value                                  | Mandatory | Note                                                                          |
|---------------|----------------------------------------|-----------|-------------------------------------------------------------------------------|
| panel name    | -                                      | true      | panel name is non-repeatable under `[Panel]` section                          |
| panel title   | -                                      | true      | panel title will be displayed as menu entry title and dialog title            |
| panel content | -                                      | true      | panel content will be displayed as dialog message, multiple-line is supported |
| panel style   | good<br/>info<br/>alert<br/>error<br/> | false     | panel style will be displayed as menu entry icon and dialog icon              |