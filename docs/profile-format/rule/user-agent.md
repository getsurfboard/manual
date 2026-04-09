---
sidebar_position: 7
---

# User-Agent Rules

User-Agent rules allow you to route HTTP traffic based on the User-Agent header of the request. This rule type only works for HTTP/HTTPS traffic handled by the System HTTP Proxy.

## Example

```ini
# Routes Instagram app traffic through DIRECT
USER-AGENT,Instagram*,DIRECT

# Blocks curl requests
USER-AGENT,*curl*,REJECT

# Routes Apple TV traffic through a specific proxy with remote DNS
USER-AGENT,Apple*TV,Proxy,force-remote-dns
```

## Format

```ini
USER-AGENT, {pattern}, {target proxy}[, force-remote-dns][, enhanced-mode]
```

## Parameters

| Name             | Value          | Mandatory | Note                                                                                  |
|------------------|----------------|-----------|---------------------------------------------------------------------------------------|
| pattern          | -              | true      | User-Agent pattern to match. Supports wildcard characters `*` (matches any sequence) and `?` (matches any single character). |
| target proxy     | -              | true      | The specified proxy or proxy group must exist in the profile.                         |
| force-remote-dns | true<br/>false | false     | Default value: false.<br/>If set to true, the DNS query will be triggered on the remote proxy. |
| enhanced-mode    | true<br/>false | false     | Default value: false.<br/>If set to true, a fake IP will be returned in the DNS query.      |

:::caution
**Requirements:**

1. **Android Version**: User-Agent rules require **Android 10+** (because they depend on System HTTP Proxy).
2. **Settings**: You must enable **"Enable VPN HTTP Proxy"** in VPN Settings for User-Agent rules to work.
3. **Traffic Type**: User-Agent rules **only work for HTTP/HTTPS traffic** handled by System HTTP Proxy. They do not apply to:
   - TCP traffic routed directly through the VPN tunnel
   - UDP traffic
   - DNS queries

`force-remote-dns` and `enhanced-mode` attributes only work on **Android 11 and above**.
:::

:::tip
Common User-Agent patterns:
- `Instagram*` - Matches Instagram app requests
- `*curl*` - Matches curl tool requests
- `Mozilla*` - Matches Mozilla browser requests
- `?ozilla*` - Matches any browser with "ozilla" in the name (Mozilla, Lozilla, etc.)
:::

## See Also

- [DOMAIN](./domain.md) - Domain-based routing rules
- [PROCESS-NAME](./process.md) - Application-based routing rules
- [FINAL](./final.md) - Final catch-all rule
