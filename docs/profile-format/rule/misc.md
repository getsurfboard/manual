---
sidebar_position: 6
---

# Miscellaneous Rules

Surfboard supports several other rule types for granular traffic control based on destination ports, source IPs, and network protocols.

## Example

```ini
# Routes traffic to destination port 80 directly
DEST-PORT,80,DIRECT

# Routes traffic originating from a specific local client IP directly
SRC-IP,192.168.20.100,DIRECT

# Routes traffic received on a specific local listen port directly
IN-PORT,6152,DIRECT

# Routes all HTTP (TCP port 80) traffic directly
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