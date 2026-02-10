---
sidebar_position: 0
---

# 静态面板

将面板信息显示为配置文件菜单项。在一个面板部分中可以定义多个面板。面板内容在配置文件刷新时刷新。

## 示例 

```ini
PanelA = title="面板标题", content="面板内容
第二行", style=info
```

## 格式

```ini
{panel name} = title="{panel title}", content="{panel content}", style={panel style}
```

## 参数

| 名称          | 值                                     | 是否必填 | 备注                                                                          |
|---------------|----------------------------------------|-----------|-------------------------------------------------------------------------------|
| panel name    | -                                      | 是      | 面板名称在 `[Panel]` 部分下必须是唯一的。                        |
| panel title   | -                                      | 是      | 面板标题将显示为菜单项标题和对话框标题。       |
| panel content | -                                      | 是      | 面板内容将显示为对话框消息。支持多行。 |
| panel style   | good<br/>info<br/>alert<br/>error<br/> | 否     | 面板样式决定菜单项图标和对话框图标。                   |