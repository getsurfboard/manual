---
sidebar_position: 0
---

# Domain Rules

Domain-based rules allow you to route traffic based on the domain name of the destination. Surfboard supports exact matches, suffix matches, and keyword matches.

## Example

```ini
# Matches the exact domain www.apple.com and forces remote DNS resolution
DOMAIN, www.apple.com, ProxyHTTP, force-remote-dns

# Matches apple.com and all its subdomains, returning a fake IP locally
DOMAIN-SUFFIX, apple.com, Proxy, enhanced-mode

# Matches any domain containing the keyword 'google'
DOMAIN-KEYWORD, google, Proxy
```

## Format

```ini
{type}, {domain rule}, {target proxy}[, force-remote-dns][, enhanced-mode]
```

## Parameters

| Name             | Value                                            | Mandatory | Note                                                                                                                  |
|------------------|--------------------------------------------------|-----------|-----------------------------------------------------------------------------------------------------------------------|
| type             | DOMAIN<br/>DOMAIN-SUFFIX<br/>DOMAIN-KEYWORD<br/> | true      | DOMAIN: Exact matching.<br/>DOMAIN-SUFFIX: Suffix matching.<br/>DOMAIN-KEYWORD: Keyword matching.         |
| domain rule      | -                                                | true      |                                                                                                                       |
| target proxy     | -                                                | true      | The specified proxy or proxy group must exist in the profile.                                                                |
| force-remote-dns | true<br/>false                                   | false     | Default value: false.<br/>If set to true, the DNS query will be triggered on the remote proxy.                                 |
| enhanced-mode    | true<br/>false                                   | false     | Default value: false.<br/>If set to true, a fake IP will be returned in the DNS query.                                      |