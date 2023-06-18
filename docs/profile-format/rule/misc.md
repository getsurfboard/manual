---
sidebar_position: 6
---

# Misc

## Sample

```ini
DEST-PORT,80,DIRECT
SRC-IP,192.168.20.100,DIRECT
IN-PORT,6152,DIRECT
PROTOCOL,HTTP,DIRECT
```

## Format

```ini
{type},{value},{target_proxy}
```

## Param

| Name         | Value                                                                                                                                       | Mandatory | Note                                                                                                                                                                                                  |
|--------------|---------------------------------------------------------------------------------------------------------------------------------------------|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| type         | DEST-PORT<br/>SRC-IP<br/>IN-PORT<br/>PROTOCOL                                                                                               | true      | `SRC-IP` is used to differentiate the client traffic received by the LAN proxy by the client IP<br/>`IN-PORT` is used to differentiate the client traffic received by the LAN proxy by the proxy port |
| value        | DEST-PORT: destination port number<br/>SRC-IP: client ip address<br/>IN-PORT: lan proxy listen port number<br/>PROTOCOL: HTTP/HTTPS/TCP/UDP | true      | PROTOCOL: DOH, DOH3, DOQ is not supported yet                                                                                                                                                         |
| target proxy | -                                                                                                                                           | true      | Specified proxy or proxy group must existed in profile                                                                                                                                                |

