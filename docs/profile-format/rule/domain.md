---
sidebar_position: 0
---

# Domain

## Sample

```ini
DOMAIN, www.apple.com, ProxyHTTP, force-remote-dns
DOMAIN-SUFFIX, apple.com, Proxy, enhanced-mode
DOMAIN-KEYWORD, google, Proxy
```

## Format

```ini
{type}, {domain rule}, {target proxy}[, force-remote-dns][, enhanced-mode]
```

## Param

| Name             | Value                                            | Mandatory | Note                                                                                                                  |
|------------------|--------------------------------------------------|-----------|-----------------------------------------------------------------------------------------------------------------------|
| type             | DOMAIN<br/>DOMAIN-SUFFIX<br/>DOMAIN-KEYWORD<br/> | true      | DOMAIN means exact matching<br/>DOMAIN-SUFFIX means suffix matching<br/>DOMAIN-KEYWORK means keyword matching         |
| domain rule      | -                                                | true      |                                                                                                                       |
| target proxy     | -                                                | true      | Specified proxy or proxy group must existed in profile                                                                |
| force-remote-dns | true<br/>false                                   | false     | Default value: false<br/>If set to true, DNS query will triggered in the remote proxy                                 |
| enhanced-mode    | true<br/>false                                   | false     | Default value: false<br/>If set to true, a fake ip will be returned in DNS query                                      |
