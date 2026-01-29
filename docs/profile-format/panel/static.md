---
sidebar_position: 0
---

# Static Panel

Displays panel information as profile menu entries. Multiple panels can be defined in a panel section. Panel content refreshes when the profile is refreshed.

## Example 

```ini
PanelA = title="Panel Title", content="Panel Content\nSecondLine", style=info
```

## Format

```ini
{panel name} = title="{panel title}", content="{panel content}", style={panel style}
```

## Parameters

| Name          | Value                                  | Mandatory | Note                                                                          |
|---------------|----------------------------------------|-----------|-------------------------------------------------------------------------------|
| panel name    | -                                      | true      | Panel name must be unique under the `[Panel]` section.                        |
| panel title   | -                                      | true      | Panel title will be displayed as the menu entry title and dialog title.       |
| panel content | -                                      | true      | Panel content will be displayed as the dialog message. Multi-line is supported. |
| panel style   | good<br/>info<br/>alert<br/>error<br/> | false     | Panel style determines the menu entry icon and dialog icon.                   |

