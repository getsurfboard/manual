---
sidebar_position: 4
---

# Domain Set

Domain Set is a remote url configuration, whose content is a collection of Domain rules, but without target definition in it.

Use Domain Set can greatly simplify the content complexity of profile which has a lot of domain rules in it,
and also can reuse rules encapsulated by other contributors.

Compare to [RULE-SET](/docs/profile-format/rule/ruleset), Domain set only support domain type rules, but it will bring significant performance improvement

## Sample

### Domain Set definition

```ini
DOMAIN-SET,https://domainset.com/ad,REJECT
```

### Remote Domain Set content sample

```ini
www.apple.com
google.com
.google.com
```

It should be noted that, `.google.com` will not only match `www.google.com` but also `google.com`

## Format

```ini
DOMAIN-SET, {domain set url}, {target}
```

## Param

| Name           | Value | Mandatory | Note                                                   |
|----------------|-------|-----------|--------------------------------------------------------|
| domain set url | -     | true      |                                                        |
| target         | -     | true      | Specified proxy or proxy group must existed in profile |

## Comparison with Rule Set

| Rule Type  | Rule count | Complete match time(lower is better) | Rule Type Support Level    | Memory consumption |
|------------|------------|--------------------------------------|----------------------------|--------------------|
| Domain Set | 134430     | 17500 ns                             | Complete                   | Low                |
| Rule Set   | 134430     | 11840167 ns                          | Only domain type supported | High               |