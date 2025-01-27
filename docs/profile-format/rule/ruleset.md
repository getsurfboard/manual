---
sidebar_position: 3
---

# Rule Set

Rule Set is a remote url configuration, whose content is a collection of Rule, but without target definition in it.

Use Rule Set can greatly simplify the content complexity of profile which has a lot of rules in it, 
and also can reuse rules encapsulated by other contributors.

:::tip
Define a large number of rules in a rule set will significantly reduce the efficiency of rule matching.
In this scenario, we strongly recommend you switch to the [Domain Set](./domainset) standard.
:::

## Sample

### Rule Set definition

```ini
RULE-SET,https://ruleset.com/cn,ProxyVMess
```

### Remote Rule Set content sample

```ini
# NAME: ASTRO
    - DOMAIN:githubusercontent.com,
    - DOMAIN-SUFFIX,unifi.com.my,
    - DOMAIN-SUFFIX,hypp.tv,
    - DOMAIN-SUFFIX,secureswiftcontent.com,
    - DOMAIN-SUFFIX,nocookie.net,
    - DOMAIN-SUFFIX,verspective.net,
    - DOMAIN-SUFFIX,cloudfront.net,
    - DOMAIN-SUFFIX,astro.com.my,
    - DOMAIN-SUFFIX,adaptive.stream,
    - DOMAIN-SUFFIX,sooka.my,
    - DOMAIN-SUFFIX,wanicelife.com,
    - DOMAIN-SUFFIX,wikimedia.org,
    - DOMAIN-SUFFIX,iili.io,
    - DOMAIN-SUFFIX,telegra.ph,
    - DOMAIN-SUFFIX,didik.tv,
    - DOMAIN-SUFFIX,fastly.net,
    - DOMAIN-SUFFIX,tonton.com.my,
    - DOMAIN-SUFFIX,astradamy.com,
    - DOMAIN-SUFFIX,postimg.cc,
    - DOMAIN-SUFFIX,mncnow.id,
    - DOMAIN-SUFFIX,mooncang.my.id,
    - DOMAIN-SUFFIX,rctiplus.com,
    - DOMAIN-SUFFIX,ibb.co,
    - DOMAIN-SUFFIX,nucdn.net,
    - DOMAIN-SUFFIX,iptvcat.net,
    - DOMAIN-SUFFIX,rcti.id,
    - DOMAIN-SUFFIX,trans7.co.id,
    - DOMAIN-SUFFIX,pinimg.com,
    - DOMAIN-SUFFIX,wurl.tv,
    - DOMAIN-SUFFIX,globenewswire.com,
    - DOMAIN-SUFFIX,amagi.tv,
    - DOMAIN-SUFFIX,amagi.tv,
    - 'DOMAIN-SUFFIX,fightsports.tv,
    - 'DOMAIN-SUFFIX,starhubgo.com,
    - 'DOMAIN-SUFFIX,imgur.com,
    - 'DOMAIN-SUFFIX,toffeelive.com,
    - 'DOMAIN-SUFFIX,speedtrademarket.com,
    - 'DOMAIN-SUFFIX,glueapi.io,
    - 'DOMAIN-SUFFIX,akamaihd.net,
    - 'DOMAIN-SUFFIX,lfctv.uk,
    - 'DOMAIN-SUFFIX,vidiocdn.com,
    - 'DOMAIN-SUFFIX,dazn.com,
    - 'DOMAIN-SUFFIX,streamstak.com,
    - 'DOMAIN-SUFFIX,cdn77.org,
    - 'DOMAIN-SUFFIX,googleusercontent.com,
    - 'DOMAIN-SUFFIX,livesoccertv.com,
    - 'DOMAIN-SUFFIX,barcatv.es,
    - 'DOMAIN-SUFFIX,footprint.net,
    - 'DOMAIN-SUFFIX,lionsgatechannels.com,
    - 'DOMAIN-SUFFIX,sysln.id,
    - 'DOMAIN-SUFFIX,indihometv.com,
    - 'DOMAIN-SUFFIX,amazonaws.com,
    - 'DOMAIN-SUFFIX,perfecttv.net,
    - 'DOMAIN-SUFFIX,kaltura.com,
    - 'DOMAIN-SUFFIX,transvision.co.id,
    - 'DOMAIN-SUFFIX,aqfadtv.xyz,
    - 'DOMAIN-SUFFIX,danng.me,
    - 'DOMAIN-SUFFIX,gstatic.com,
    - 'DOMAIN-SUFFIX,tmdb.org,
    - 'DOMAIN-SUFFIX,is.gd,
    - 'DOMAIN-SUFFIX,workers.dev,
    - 'DOMAIN-SUFFIX,nflxso.net,
    - 'DOMAIN-SUFFIX,tinyurl.com,
    - 'DOMAIN-SUFFIX,visionplus.id,
    - 'DOMAIN-SUFFIX,wakutv.site,

You can see that there is no target definition in it, all matching traffic will use proxy 'ProxyVMess' as target

## Format

```ini
RULE-SET, {rule set url}, {target}
```

## Param

| Name         | Value | Mandatory | Note                                                   |
|--------------|-------|-----------|--------------------------------------------------------|
| rule set url | -     | true      |                                                        |
| target       | -     | true      | Specified proxy or proxy group must existed in profile |
