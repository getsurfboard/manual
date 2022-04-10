---
sidebar_position: 3 
---

# ADBlock

```ini
[Rule]
# google
DOMAIN-SUFFIX,googlesyndication.com,REJECT
DOMAIN-SUFFIX,googletagmanager.com,REJECT
DOMAIN-SUFFIX,googletagservices.com,REJECT
DOMAIN,mtalk.google.com,REJECT
DOMAIN,suggestqueries.google.com,REJECT

# facebook
DOMAIN-SUFFIX,staticxx.facebook.com,REJECT

# spotify
DOMAIN,log.spotify.com,REJECT
DOMAIN,adeventtracker.spotify.com,REJECT

# twitter
DOMAIN-SUFFIX,ads.twitter.com,REJECT
DOMAIN-SUFFIX,ads-twitter.com,REJECT
DOMAIN-SUFFIX,p.twitter.com,REJECT
DOMAIN-SUFFIX,scribe.twitter.com,REJECT
DOMAIN-SUFFIX,syndication.twitter.com,REJECT
DOMAIN-SUFFIX,syndication-o.twitter.com,REJECT
DOMAIN-SUFFIX,urls.api.twitter.com,REJECT
```