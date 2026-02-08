---
sidebar_position: 0
---

# Direct

The `DIRECT` proxy is a built-in policy that instructs Surfboard to send traffic directly through the device's default network interface without any redirection.

```ini title="Rule example combined with Direct proxy"
# Traffic to apple.com will be sent directly through the default network
DOMAIN,www.apple.com,DIRECT
```

Traffic matching the Direct proxy will be sent directly, without any redirection or modification.