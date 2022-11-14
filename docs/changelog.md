---
sidebar_position: 5
---

# ChangeLog

### 2.18.6

- Bug fixed

### 2.18.5

- Fix TCP KeepAlive toggle not working
- Add session id in logcat
- Update translation
- Improve profile import

### 2.18.4

- `include-all-proxies` now will include all proxies in `[Proxy]` and `[Proxy Group]`, including external proxies
- Add TCP keep alive toggle for proxy in settings
- Display last exit reason in developer options ui
- Catch profile decode exception instead of returning success
- Reduce APK size
- Bug fixed

### 2.18.3

- Improve embedded profile editor performance on huge profile
- Fix crash
- Update translation

### 2.18.2

- Support share profile via qrcode
- Dashboard ui support dynamic column size, add back NavigationRailView
- Try to fix 'too many open files' issue
- Add fd count display in developer options ui
- Reduce APK size
- Support unofficial allowInsecure param in trojan uri
- Bug fixed

### 2.18.1

- Fix STUN NAT
- Update translation
- Bug fixed

### 2.18.0

- Support UTLS
- Support bypass config import/export

### 2.17.6

- Modify some setting entrance
- Bug fixed

### 2.17.5

- Bug fixed

### 2.17.4

- Fix no network sometime switch from mobile to wifi
- Fix ProxyGroup tabs scrolling issue introduced in 2.17.3
- Rerun url-test/fallback group speedometer when network changed
- Improve save profile error message display
- Fix speedometer direct test failed
- Bug fixed
- Update translation

### 2.17.3

- Rewrite speedometer module
  - Support synchronize test result between different tabs
  - Support sort by default/delay/name
  - Support auto sort after test finished

### 2.17.2

- Support `fallback` group type
- Improve Android TV experience
- Update translation
- Bug fixed

### 2.17.1

- Support `include-all-proxies` standard in proxy group
- Improve UI compatibility with Samsung tablet sidebar
- Improve UI compatibility with Android 13 foldable phone bottom bar
- Add bottomBar support in profile editor
- Bug fixed

### 2.17.0

- Dashboard: now you can long press to hide card, or toggle card visibility in the top right menu
- Add public ip visibility toggle animation
- Update some displayed text
- Remove some profile url format checking for better compatibility

### 2.16.5

- Fix OOM issue cause by doh function
- Adapt to Android 13 per-app language settings
- Fix empty local proxy card issue
- Add OOM monitor debug function
- Make panel dialog content url and email clickable
- Reduce apk size
- Disable hide vpn notification setting on MIUI
- Support click sshdump bar in dashboard to open vpn settings

### 2.16.4

- Fix some oom issue
- Fix speed curve frozen when speed is zero
- Update translation
- Update embedded geoip library
- Display LAN ip in local ip card ui
- Respect ruleSet/domainSet sequence

### 2.16.3

- Bug fixed
- Add vmess username format validate
- Update switch preference ui

### 2.16.2

- Add profile sub menu support
- Bug fixed
- Adapt to Android 13 excludeRoute method
- Add so library missing detect
- Reduce suffix domain rule memory usage
- Fix miui gesture bar color
- Support long press ip card to copy ip
- Update translation

### 2.16.1

- Support [panel](https://getsurfboard.com/docs/profile-format/panel/static)
- Fix shadowsocks protocol crash issue

### 2.16.0

- Fix connection count issue
- Adapt to Android 13 notification permission request
- Update start when boot logic

### 2.15.3

- Fix some memory leak issues
- Fix bugs

### 2.15.2

- Try fix connection count issue by not using protect api
- Add unsupported YAML format profile detection
- Compatible with number value with unit suffix in profile content
- Bug fixed
- Update translation

### 2.15.1

- Display native process memory consumption in developer ui
- Add Nintendo Switch media import support(Android 10+)
- Update shortcut icon shape
- Move sshdump into vpn setting
- Update translation
- Bugfix

### 2.15.0

- Add new traffic list ui
- Support websocket in trojan protocol
- Revert to previous dark icon

### 2.14.0

- Reduce VPN CPU usage
- Add more notification settings
- Add recommend doh server list
- Add export log in tool list
- Update embedded geoip library
- Add document entry in external resources ui
- Update translation

### 2.13.4

- Fix tile not working on color os
- Hide VPN notification badge icon
- Fix timeout when applying 'force-remote-dns' on direct rule domain
- Support decode 'persistent' param in load balanced group

### 2.13.3

- Add custom geoip database support

### 2.13.2

- Optimize DOMAIN-SET memory usage 

### 2.13.1

- Improve DOMAIN-SET performance
- Improve proxy group ui performance

### 2.13.0

- Support DOMAIN-SET rule
- Fix force-remote-dns setting not working for domain rules in RULE-SET
- Add korean language support

### 2.12.6

- update public ip batch fetch
- support display flag emoji on public ip card
- try to fix traffic loop is proxy host is ip format
- better handle horizontal orientation

### 2.12.5

- Fix setting crash issue

### 2.12.4

- Improve tablet ui
- Bug fixed

### 2.12.3

- Support load-balance proxy group
- Process rule support wildcard match
- Bug fixed

### 2.12.2

- Move google api checking to tools list
- Update tools list ui

### 2.12.1

- Fix google api availability checking crash

### 2.12.0

- Add google api availability checking
- Add invalid managed config url faq entrance
- Disable sshdump on android 7 and lower
- Support dynamic change ui translation on the fly

### 2.11.4

- Add GMS QRCode scanner support
- Improve dns ip display outside mainland China
- Fix public ip display issue
- Update profile menu item sequence
- Fix DoH server verify exception
- Add Android TV App entrance(still using mobile ui)
- Add private ip card in dashboard
- Update GEOIP library
- Add more theme support

### 2.11.3

- Support drag and drop feature in profile list ui
- Add wireshark sshdump support in tools list
- Add DnsPod DoH server in embedded profile template
- Bug fixed

### 2.11.2

- Bring better wildcard match for skip-proxy, always-real-ip and host rule
- Add vpn toggle toast
- Improve public ip api usability
- Change editor newline symbol for better compatibility
- Fix theme setting crash on lower version devies
- Fix change theme not working on lower version devices
- Fix self traffic handle error

### 2.11.1

- Add allowing bypass VPN setting
- Disable text highlight in embedded profile editor to improve performance
- New theme setting ui, support devices lower than Android 12
- Bug fixed
- Update translation

### 2.11.0

- Support change theme palette(If you have better color recommended, please contact me)
- Support override [doh-server](https://getsurfboard.com/docs/profile-format/general/doh_server) config in setting
- Improve VPN start speed when using huge profile
- Support toggle offline/disabled app display in bypass app list
- Fix fetch profile timeout if contains self url as policy path url
- Improve recent requests list performance, support fast scroll
- Update translation

### 2.10.2

- Change default vmess-aead value to true

### 2.10.1

- Support profile url as policy path url
- Fix profile editor save failed still show as success
- Fix network unavailable if use global outbound with zero proxies profile
- Remove override vmess aead setting, please use [vmess-aead](/docs/profile-format/proxy/external-proxy/vmess) in profile instead 
- Change profile list sort to natural order
- Add more protocol recognize in logcat and recent requests
- Update translation

### 2.10.0

- Add `doh-server` support
- Add fcm diagnostics entrance in developer options
- Update translation

### 2.9.12

- Fix public ip card random crash issue
- Fix devices without camera can not install issue

### 2.9.11

- Use mlkit qrcode scanning instead of zxing
- Add Developer Options UI
  - Support viewing memory usage, trigger garbage collect and export memory snapshot
  - Support exporting log file
- Unify browser open method
- Add translate contributor list
- Update translation
- Fix some vmess uri import failed
- Support HTTP 301 in external resource management
- Support Android 13 themed app icon

### 2.9.10

- Support override `http-listen` and `socks5-listen` in profiles
- Support HTTP 30X redirection when fetching external resource

### 2.9.9

- Fix SS url base64 decode error
- Add Google Play AAB support
- Use online sponsor page
- Update translation
- Bug fixed

### 2.9.8

- Bug fixed

### 2.9.7

- Add `udp-policy-not-supported-behaviour` support
- Rewrite external resource manager

### 2.9.6

- Profile editor: performance improve, add more highlight support
- add `internet-test-url` support
- Compatible with vmess proxy whose ws header value wrapped with quotes
- Update translation

### 2.9.5

- Add traffic statistics card in dashboard(only count a single session)
- Add traffic statistics mode in setting, affect notifications, traffic card 
- Toggle notification tile without closing panel
- Support Google Play In App Update
- Update libuv to 1.44.1
- Update translation

### 2.9.4

- Add AppCenter & breakpad
- Revert outbound UI
- Add new manual entrance
- Change public ip fetching api
- Update translation

### 2.9.3

- Fix local proxy address in use crash
- Update outbound mode card UI
- Fix crash when upgrade from v1.2.4

### 2.9.2

- Add local proxy support: http and socks5
- Update dashboard UI
- Enable lan traffic filter setting

### 2.9.1

- Refetch public ip info when changing outbound mode
- Fix change global proxy not update public ip info
- Fix crash cause by vpn quick start twice
- Fix crash when viewing huge ruleSet/policyPath list
- Add ChangeLog dialog when click version code
- Fix random GEOIP crash on Android 5/6
- Add sponsors list

### 2.9.0

- Add DNS poisoning auto fix support
- Fix tile not working on some devices
- Small UI change
- Bug fixed

### 2.8.9

- Fix profile serializable crash
- Remove flurry
- Use Crashlytics instead of Sentry

### 2.8.8

- Update translation
- Fix splash screen top left corner frame
- Optimize memory usage cause by huge profile/ruleSet/policyPath
- Add quick change proxygroup selection ui
- Improve editor launch performance
- Add update profiles after vpn established toggle in settings
- Bug fixed

### 2.8.7

- Avoid open vpn cause adb wifi reconnect
- Update all profiles after vpn started
- Fix crash
- Update translation

### 2.8.6

- Update translation
- Bug fixed

### 2.8.5

- Add app shortcut support
- Add deeplink support:
- surfboard:///toggle
- surfboard:///start
- surfboard:///stop
- surfboard:///install-config?url=[encoded_profile_url]
- Bypass config support batch operation
- Support setting to use external editor
- Fix manually update profile no refresh last modified time
- Add change language animation

### 2.8.4

- add more transition animation
- make language change take effect without restart
- update editor font
- fix navigationbar overlay issue in some ui
- update translation
- bug fixed

### 2.8.3

- editor support some emacs key map: Ctrl + [Shift] + N/P/F/B/A/E
- proxy list support scroll to selected proxy
- update translation
- fix menu item repeat issue

### 2.8.2

- Profile Editor

    - Add highlight support
    - Add redo/undo support
    - Add new empty profile support

### 2.8.1

- Support embeded editor
- Small UI change

### 2.8.0

- Material Design 3
- This version may be buggy and won't be release on Google Play until stable. Use on your own risk.

### 2.7.9

- Bug fixed

### 2.7.8

- Multiple proxy import now only support dividing with newline, space and vertical bar no longer supported
- Update vietnamese translation
- Fix crash

### 2.7.7

- Rewrite webdav synchronize module
- Show profile update option even managed config url is invalid
- Change vmess/trojan proxy default udp-relay value to false
- Fix crash when updating invalid profile
- Fix vmess uri compatibility
- Bug fixed

### 2.7.6

- Remove direct/reject proxy in global proxy group
- Clone profile as editable profile with managed config removed
- Exclude unsupported proxy uri (like vless://xxx) when importing
- Change default proxy column size to middle

### 2.7.5

- Fix SAF editing not trigger profile list refresh
- Bug fixed.

### 2.7.4

- Support vmess-aead param in vmess proxy config.
- Add DoH detect.
- Bug fixed.
- Use vmess-aead param to define per-proxy AEAD setting, if param not defined in the profile, default value in the settings will be used.
- For profile format detail, please check the sample profile in the top right corner of profile list.

### 2.7.3

- Support Always-ON-VPN setting
- Generate new profile name when reimporting existed profile
- Improve ICMP/UDP traffic handle efficiency when using profile with tons of rules
- Support hiding system apps in bypass config
- Prompt restart VPN after bypass config changed
- Add disable notification checking in settings
- Fix active count flicking issue
- Enable force-remote-dns by default
- New profile update strategy

### 2.7.2

- Support always-real-ip
- Support decoding sni param and proxy name from trojan uri
- Enable udp-relay in vmess/trojan proxy by default
- Block DoT traffic by default
- Update all profile when app launch
- Support decoding internal.example.com = server:syslib in [Host] section
- Support domain suffix in skip-proxy config
- Improve import profile error prompt
- Add always-real-ip = stun.l.google.com in [General] section to fix Google Voice Dialing issue, proxy must support relaying UDP traffic.

### 2.7.1

- Keep proxy order from proxygroup which contains policy path and normal proxies
- Update translation
- Bug fixed

### 2.7.0

- Improve profile name guessing when import from url
- Fix rule count error when include multiple ruleset with same source
- Remove disk cache when removing external resource
- Fix ip type trojan proxy import issue

### 2.6.9

- Improve huge profile compatibility
- Improve TLS proxy compatibility
- Improve profile decode speed
- Treat REJECT-TINYGIF as REJECT rule (due to android not support MITM)
- Add Surge manual entrance in tools tab

### 2.6.8

- Fix global group sequence not follow the profile content
- Fix network speed display issue on 32bit devices
- Reset all tcp connection when changing outbounds mode
- Fix proxy count error in some policy path profiles
- Fix some crashing when upgrade from GP version
- Bug fixed

### 2.6.7

- Fix ruleSet/policyPath too huge cause crashing
- Fix network error cause crashing
- Fix custom uri scheme not working

### 2.6.6

- Allow display invalid profiles, now you are free to delete or modify them
- Change external resource manager entrance to lower location
- Use force-remote-dns in global outbound mode by default
- Cache dns cache when toggle vpn, change outbound mode and change proxy group selection
- Support batch delete unused external resources
- Bug fixed

### 2.6.5

- Add external resources manage ui
- Speed up notification bar tile toggle initial time
- Use https://github.com/Loyalsoldier/geoip as embedded geoip library
- Update url format validator
- Bug fixed

### 2.6.4

- Add Force remote dns toggle in settings
- Scroll to new position when clone/rename profile
- Check invalid vmess url format
- Bug fixed

### 2.6.3

- Add 'NEW' badge for new profile
- Use FINAL rule to fetch public IP info if FINAL rule defined
- ICMP: return fake ICMP reply if match FORWARD policy, return dest unreachable if match REJECT policy
- Print debug info in logcat if click connection count card when VPN is opened
- Little UI update

### 2.6.1

- Traffic with not supported proto will be reject by default
- UDP reject will be handled by return ICMP port unreachable by default
- Warning invalid profile url when importing profile
- Fix some connection count issue
- Add more restart vpn prompt
- Hide network speed statusbar icon toggle on MIUI devices
- Bug fixed

### 2.6.0

- fix crash
- Support disable logcat output in settings

### 2.5.9

- Fix some memory/connection leak issue

### 2.5.8

- Fix vmess/netflix compatibility issue cause by ipv6
- Fix crashes
- Print warning log when reject traffic
- Support scan ss/vmess/trojan/http/https/surfboard/surge/surge3 format qrcode

### 2.5.7

- Fix crashes
- Improve vmess websocket compatibility
- Update persian language

### 2.5.6

- Fix speedtest issue
- Bug fixed

### 2.5.5

- update persian language
- fix telegram using direct rule issue

### 2.5.4

- Fix auto group speed test not working
- Reset all existed tcp connection when change proxy group selection
- Avoid forward proxy traffic dead lock
- Fix crash cause by long file name

### 2.5.3

- Fix speed test issue
- Support basic auth in profile url

### 2.5.2

- Fix speedtest issue

### 2.5.1

- Fix speed test not stable issue
- Fix fetching public IP error when use with other VPN
- Add VMESS AEAD hint when first use
- Add warning when new profile subscribe url is from localhost

### 2.5.0

- Fix WebDAV synchronize issue with box.com
- Update dashboard UI
- Update maxmind geoip2lite library
- Bug fixed

### 2.4.9

- Add WebDAV synchronize support
- Fix crash when restart VPN after rename profile
- Fix fetch ip info failed after VPN established
- Improve save profile speed
- Fix update profile last modify time no changing

### 2.4.8

- Improve ui compatibility with tablet devices
- Add network speed display on status bar icon
- Add Public IP visibility toggle
- Prompt to restart VPN when selecting profile
- Bug fixed

### 2.4.7

- Fix profile import issue cause by policy-regex-filter
- Improve profile name guess imported by url
- Fix UI tab double click issue
- Fix profile name contains slash cause crash
- Update sample.conf
- Bug fixed

### 2.4.6

- Bug fixed

### 2.4.5

- Support policy-regex-filter and hidden in proxy group
- Fix global outbound make network unavailable
- Hide notification in lockscreen
- Make VMESS AEAD disable by default
- Update UI
- Bug fixed

### 2.4.4

- Support udp-relay in socks5/shadowsocks/vmess/trojan proxy
- Fix import vmess url failed if contains slash
- Fix some crash issue

### 2.4.3

- Improve traffic throughput
- Update bypass apps ui, add search support
- Fix ss proxy with domain cause stop VPN failed
- Update UI

### 2.4.2

- Fix policy path issue
- Add Indonesian support
- Improve profile decode performance
- Fix huge profile cause crash
- Only use English app entrance name

### 2.4.1

- Fix gradle 7.0.1 cause R8 error
- Update libuv/v2fly library

### 2.4.0
Fix socks5 proxy not working without authorization
Add policy-path support
Support surge3:///install-config?url=xxx
Support enhanced mode domain rules
Support decode http/socks5 proxy as TLS-based proxy
Update GEOIP library

### 2.3.5

- Fix some profile import issue, support more import format
- Fix column size not synchronize between proxy group tabs
- Fix notification click not working
- Don't count speedometer into active tcp connection count
- Change UI back to 4 tabs in main ui

### 2.3.4

- Add fuzzy search in recent requests ui
- Update item ui in recent requests
- Sort bypass app by toggle state
- Support trojan:// proxy url
- Support import multiple proxy url divided by space, vertical line and enter
- Support switch app launcher title to english
- Support proxy column size switch

### 2.3.3

- Add active connection count display in dashboard
- Support vmess:// and ss:// url
- Add Profile FileProvider support
- Add VMESS AEAD support settings

### 2.3.2

- Support vmess AEAD
- Support long press to copy traffic info in recent request list
- Fix update profile last modify time not changing
- Fix profile modify not working
- Update translation

### 2.3.1

- Fix open vpn failed with rule-set profile

### 2.3.0

- Add skip-proxy config support
- Fix change global proxy not working when VPN is on
- Add direct proxy in global outbound mode
- Add tools tab
- Support custom dns server port in dns-server config
- Support decode 1/0 as Boolean in profile
- Fix long profile list selection duplicate issue
- Bug fixed

### 2.2.1

- Add skip TLS verify setting
- Fix whitelist mode not working issue

### 2.2.0

- Add bypass config support
- Reduce APK size
- Add proxy_test_url support
- Add profile sample in profile list menu

### 2.1.0

- Add recent request support
- Add profile viewer(not support editing yet)
- Integrate QRCode scanner, not need to download zxing scanner

### 2.0.2

- Update all locale app name to [Surfboard]
- Fix crash issue on Android 7.0 and lower version
- Update light theme UI, support switch theme in settings
- Fix global outbound speed test not working
- Fix crash when vmess proxy name boxed with double quote
- Fix UI issue

### 0.9.19

- Fix network metered issue on Android 10
- Fix speed test issue
- Allow fetching profile using current profile
- Add test-timeout/internet-test-url/proxy-test-url support
- Remember proxygroup toggle state
- Avoid displaying toast when fetch toast failed

### 0.9.18

- Rewrite tcp handler for better memory usage
- Add proxygroup toggle function
- Add Notification Channel Setting entrance
- Bug fix

### 0.9.16

- Fix ss tcp speedtest issue
- Add Tile and app shortcut support
- Fix email feedback crash
- Update speedtest ui
- Bugs fixed

### 0.9.14

- Improve throughput performance(Up to 300Mbps+)
- Bugs fixed

### 0.9.13

- Fix second launch crash issue
- Update proxy group grid ui