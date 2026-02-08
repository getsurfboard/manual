# `[Rule]`

The `[Rule]` section is the core of Surfboard's traffic management system. It defines how network traffic is routed based on various criteria such as domain names, IP addresses, and application package names.

Traffic matching rules defined in the `[Rule]` section will be redirected to the specified proxy or proxy group.

Traffic is matched against rules sequentially, from top to bottom, as defined in the profile. The first rule that matches the traffic will determine its destination.