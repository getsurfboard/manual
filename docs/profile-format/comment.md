---
sidebar_position: 1
---

# `// Comment`

Currently, only the following comment formats are supported:

### Lines beginning with `;`

```ini
;this is a comment
```

### Lines beginning with `//`

```ini
// this is also a comment
```

### Lines beginning with `#`

```ini
# comment again
```

### Inline Comments

You can also add comments at the end of a line.

```ini
http-listen = 0.0.0.0:1234 // don't use port number less than 1024
```