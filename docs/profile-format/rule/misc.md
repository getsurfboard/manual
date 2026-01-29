---
sidebar_position: 6
---

# Misc

## Example

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

## Parameters

| Name         | Value                                                                                                                                            | Mandatory | Note                                                                                                                                                                                                  |
|--------------|--------------------------------------------------------------------------------------------------------------------------------------------------|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| type         | DEST-PORT<br/>SRC-IP<br/>IN-PORT<br/>PROTOCOL                                                                                                    | true      | `SRC-IP`: Used to differentiate client traffic received by the LAN proxy based on the client IP.<br/>`IN-PORT`: Used to differentiate client traffic received by the LAN proxy based on the proxy port. |
| value        | DEST-PORT: Destination port number.<br/>SRC-IP: Client IP address.<br/>IN-PORT: LAN proxy listen port number.<br/>PROTOCOL: HTTP/HTTPS/TCP/UDP/QUIC. | true      | PROTOCOL: DoH, DoH3, and DoQ are not supported yet.                                                                                                                                                         |
| target proxy | -                                                                                                                                                | true      | The specified proxy or proxy group must exist in the profile.                                                                                                                                                |