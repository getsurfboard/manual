---
sidebar_position: 3
---

# Assign DNS Server

You can specify a custom DNS server for specific domains, allowing for granular control over resolution sources.

## Example

```ini title="DNS query will be sent to 8.8.8.8"
# Forces all DNS queries for bar.com to be resolved via Google Public DNS (8.8.8.8)
bar.com = server:8.8.8.8
```

```ini title="DNS query will be sent to system DNS server"
# Ensures bar.com is always resolved using the device's system DNS
bar.com = server:system
```

```ini title="DNS query will be sent to custom port"
# Forces all DNS queries for example.com to be resolved via custom DNS server on port 5353
example.com = server:192.168.1.100:5353
```

```ini title="Wildcard domain with custom DNS port"
# All subdomains of cloud-nodes.com will use DNS server on port 1053
*.cloud-nodes.com = server:140.205.1.13:1053
```

## Syntax

- `server:<ip>` - Use default DNS port 53
- `server:<ip>:<port>` - Use specified custom port
- `server:system` - Use system DNS
- `server:syslib` - Use system DNS library