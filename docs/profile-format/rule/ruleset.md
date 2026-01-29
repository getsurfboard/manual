---
sidebar_position: 3
---

# Rule Set

A Rule Set is a remote URL configuration containing a collection of rules, but without a target definition.

Using a Rule Set can greatly simplify the content of profiles containing many rules and allows for reusing rules created by other contributors.

:::tip
Defining a large number of rules in a Rule Set will significantly reduce the efficiency of rule matching.
In this scenario, we strongly recommend switching to the [Domain Set](./domainset) standard.
:::

## Example

### Rule Set Definition

```ini
RULE-SET,https://ruleset.com/cn,ProxyVMess
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