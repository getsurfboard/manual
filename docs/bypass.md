---
sidebar_position: 8
---

# Bypass Configuration

## Import/Export Format

The configuration for per-app proxy bypass uses the following JSON format:

```json
{
    "mode": "allowed" | "disallowed",
    "package_name": [
        "com.android.vending",
        ...
    ]
}
```

- **mode**: Determines the behavior for the listed packages.
  - `allowed`: Only the listed packages will be proxied (Allowlist).
  - `disallowed`: The listed packages will bypass the proxy (Blocklist).
- **package_name**: An array of Android package names to apply the rule to.
