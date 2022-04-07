---
sidebar_position: 1
---

# `// Comment`

Currently only following comment format is supported:

### Line begin with `;`

```ini
;this is a comment
```

### Line begin with `//`

```ini
// this is also a comment
```

### Line begin with `#`

```ini
# comment again
```

### Comment at the end of the line

You can also add comment to the end of the line

```ini
http-listen = 0.0.0.0:1234 // don't use port number less than 1024
```