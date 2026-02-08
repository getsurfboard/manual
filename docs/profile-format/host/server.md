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