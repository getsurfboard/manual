---
sidebar_position: 4
---

# Domain Set

A Domain Set is a remote URL configuration containing a collection of domain rules, but without a target definition.

Using a Domain Set can greatly simplify the content of profiles containing many domain rules and allows for reusing rules created by other contributors.

Compared to [RULE-SET](/docs/profile-format/rule/ruleset), a Domain Set only supports domain-type rules, but it offers significant performance improvements.

## Example

### Domain Set Definition

```ini
DOMAIN-SET,https://domainset.com/ad,REJECT
```

### Remote Domain Set Content Example

```ini
www.apple.com
google.com
.google.com
```

Note that `.google.com` will match `www.google.com` as well as `google.com`.

## Format

```ini
DOMAIN-SET, {domain set url}, {target}
```

## Parameters

| Name           | Value | Mandatory | Note                                                   |
|----------------|-------|-----------|--------------------------------------------------------|
| domain set url | -     | true      |                                                        |
| target         | -     | true      | The specified proxy or proxy group must exist in the profile. |

## Comparison with Rule Set

| Rule Type  | Rule Count | Complete Match Time (lower is better) | Rule Type Support Level    | Memory Consumption |
|------------|------------|--------------------------------------|----------------------------|--------------------|
| Domain Set | 134430     | 51667 ns                             | Complete                   | High               |
| Rule Set   | 134430     | 24339083 ns                          | Only domain type supported | Low                |