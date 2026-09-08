---
sidebar_position: 6
---

# Miscellaneous Rules

Surfboard supports several other rule types for granular traffic control based on destination ports, source IPs, and network protocols.

## Example

```ini
# Routes traffic to destination port 80 directly
DEST-PORT,80,DIRECT

# Port expressions: closed range and comparison operators
DEST-PORT,8000-9000,DIRECT
SRC-PORT,>=50000,DIRECT

# Routes traffic originating from a specific local client IP directly
SRC-IP,192.168.20.100,DIRECT

# SRC-IP also accepts a CIDR range
SRC-IP,192.168.20.0/24,DIRECT

# Routes traffic received on a specific local listen port directly
IN-PORT,6152,DIRECT

# Routes all HTTP (TCP port 80) traffic directly
PROTOCOL,HTTP,DIRECT
```

## Format

```ini
{type},{value},{target_proxy}
```

## Port Expressions

`DEST-PORT`, `SRC-PORT`, and `IN-PORT` share the same value grammar:

- A plain port number: `IN-PORT,6153`
- A closed range: `DEST-PORT,10000-20000`
- The operators `>`, `<`, `>=`, `<=`: `SRC-PORT,>=50000`

## Parameters

| Name         | Value                                                                                                                                            | Mandatory | Note                                                                                                                                                                                                  |
|--------------|--------------------------------------------------------------------------------------------------------------------------------------------------|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| type         | DEST-PORT<br/>SRC-IP<br/>SRC-PORT<br/>IN-PORT<br/>PROTOCOL                                                                                                    | true      | `SRC-IP`/`SRC-PORT`: Used to differentiate client traffic received by the LAN proxy based on the client IP / source port.<br/>`IN-PORT`: Used to differentiate client traffic received by the LAN proxy based on the proxy port. |
| value        | DEST-PORT: Destination port expression.<br/>SRC-IP: Client IP address or CIDR range.<br/>SRC-PORT: Client source port expression.<br/>IN-PORT: LAN proxy listen port expression.<br/>PROTOCOL: HTTP/HTTPS/TCP/UDP/QUIC. | true      | PROTOCOL: DoH, DoH3, and DoQ are not supported yet.                                                                                                                                                         |
| target proxy | -                                                                                                                                                | true      | The specified proxy or proxy group must exist in the profile.                                                                                                                                                |