---
sidebar_position: 3
---

# Rule Set

A Rule Set is a collection of rules hosted at a remote URL. It allows for modular and reusable rule configurations, simplifying your profile.

Using a Rule Set can greatly simplify the content of profiles containing many rules and allows for reusing rules created by other contributors.

:::tip
Defining a large number of rules in a Rule Set will significantly reduce the efficiency of rule matching.
In this scenario, we strongly recommend switching to the [Domain Set](./domainset) standard.
:::

## Example

### Rule Set Definition

```ini
# Fetches a remote list of rules and routes matching traffic to ProxyVMess
RULE-SET,https://example.com/china_rules.conf,ProxyVMess
```

### Remote Rule Set Content Example

```ini
DOMAIN,www.apple.com
DOMAIN,www.google.com
DOMAIN-SUFFIX,apple.com
DOMAIN-KEYWORD,google
IP-CIDR,192.168.0.0/16
GEOIP,US
```

Note that there is no target definition included. All matching traffic will use the proxy 'ProxyVMess' as the target.

## Format

```ini
RULE-SET, {rule set url}, {target}
```

## Parameters

| Name         | Value | Mandatory | Note                                                   |
|--------------|-------|-----------|--------------------------------------------------------|
| rule set url | -     | true      |                                                        |
| target       | -     | true      | The specified proxy or proxy group must exist in the profile. |