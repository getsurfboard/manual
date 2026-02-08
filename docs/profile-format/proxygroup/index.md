# `[Proxy Group]`

Proxy Groups are essential components of the Surfboard profile format, allowing for the organization and management of multiple proxy policies. They enable complex behaviors like manual selection, automatic latency-based switching, and load balancing.

A Proxy Group is a collection of proxies, with one proxy currently selected as the active policy for that group.

The selection within a proxy group can be changed manually by the user or automatically by the application based on pre-defined criteria.

A [[Rule]](/docs/profile-format/rule)'s destination can be set to either a proxy group or a single proxy. When set to a proxy group, traffic is routed through the group's currently selected proxy.