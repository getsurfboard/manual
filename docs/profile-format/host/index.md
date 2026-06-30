# `[Host]`

The `[Host]` section is used to define static DNS mappings, allowing users to override default DNS resolution for specific domains or wildcard patterns.

This feature is particularly useful for local development, testing servers with custom domains, or forcing specific IP resolutions without modifying the system's global hosts file.

You can map a domain to a single IP address, or to multiple IP addresses (comma-separated, including mixed IPv4 and IPv6). When multiple IPs are configured, the DNS response will include all matching addresses, filtered by the query type (A records return IPv4 only, AAAA records return IPv6 only).

Reference: https://en.wikipedia.org/wiki/Domain_Name_System