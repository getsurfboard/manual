---
sidebar_position: 5
---

# ChangeLog

### mobile-2.27.0

- **New Features**
  - Added support for new proxy protocol anytls.
  - Updated LAN profile editor UI: enlarged the editor and added line number display support.
  - In-app profile editor now supports profile keyboard highlight.
  - In-app profile editor now supports IME scroll animation on Android 11+ devices.
  - Logcat & recent request UI now support displaying decoded IDN domains.

### mobile-2.26.2

- **Fixes**
  - Fixed Hysteria2 port-hopping
  - Fixed Hysteria2 type not displayed in proxy list

### mobile-2.26.1

- **Fixes**
    - Fixed profile editor text selection not aligned in LAN profile manager website

### mobile-2.26.0

- **New Features**
    - Added support for shadowsocks 2022(`2022-blake3-aes-128-gcm` & `2022-blake3-aes-256-gcm`) and hysteria2 proxy support
    - Support Upload/Edit/Copy/Rename/Delete profile in new added web server in LAN, try it at the top right corner in profile list menu

### mobile-2.25.5

- **New Features**
  - Added support for multiple DoH servers in a profile. Surfboard queries domains in parallel and uses the fastest response.
- **Fixes**
  - Fixed version checker time display error.

### mobile-2.25.4

- **New Features**
  - Added built-in app updater.
  - Added support for proxy names enclosed in single/double quotes.
- **Changes**
  - Minimum OS: Android 7.0+ (Dropped 5.x & 6.0).
  - Updated built-in GeoIP database.
- **Fixes**
  - Fixed LoadingIndicator UI issues.

### mobile-2.25.3

- Added support for long-pressing to view proxy info in the proxy list.
- Implemented Material You style loading indicator instead of a progress bar.
- Fixed pure dark theme not working.
- Added dashboard empty state UI.
- Prompt to add quick tile after VPN starts.

### mobile-2.25.2

- Added support for the `keepalive` parameter in WireGuard proxies.
- Added support for a transparent three-dots navigation bar.
- Fixed crashing on lower Android versions.
- Added support for keeping app data when uninstalling.

### mobile-2.25.1

- Fixed statusBar/navigationBar color issues on versions prior to Android 15.
- Fixed launch screen size and cropping.
- Adapted homepage to display cutouts.

### mobile-2.25.0

- Added support for Android 16.
- Updated public IP fetching API.
- Enabled FTP server on lower Android versions.
- Fixed logcat viewer open animation.
- Fixed splash screen and app theme.
- Updated embedded GeoIP library.
- Added support for 16KB page size.
- Unified toolbar divider/elevation/color.
- Fixed launch screen theme.
- Updated translations.

### mobile-2.24.10

- Fixed a crash.

### mobile-2.24.9

- Integrated Conscrypt to enable TLS 1.3 support on lower Android versions.
- Added notification chronometer toggle setting.
- Added QUIC protocol support for MISC rules.
- Fixed logcat viewer UI issues on Android 15+.
- Updated integrated GeoIP library file.

### mobile-2.24.8

- Bug fixes.

### mobile-2.24.7

- Added support for displaying panel entrance in profile list actions.
- Updated proxy group selection UI.

### mobile-2.24.6

- Fixed Wireshark sshdump crash.

### mobile-2.24.5

- Fixed Android 15 crash in some subpages.
- Updated GeoIP library file.
- Updated translations.

### tv-1.0.3 

- Added support for profile fetch timeout configuration.

### tv-1.0.2

- Fixed settings crash on Android 8.0.
- Updated translations.

### tv-1.0.1

- Added launcher entrance for non-Leanback devices.
- Added support for public IP display.
- Fixed crash when deleting the last profile.

### mobile-2.24.4

- Added location permission explanation to meet Google Play policy requirements.
- Adapted to Android 15.
- Updated translations.
- Bug fixes.

### tv-1.0.0

- First version.

### 2.24.3

- Display proxy group name in logs.
- Added support for modifying profile fetch timeout in settings.
- Added support for temporarily disabling bypass mode and remembering the configuration.
- Bypass list sort mode configuration is now remembered.
- Improved profile compatibility.
- Reduced APK size.
- Removed GMS QRCode scanner.
- Bug fixes.

### 2.24.2

- Display proxy group name in logs.
- Added support for modifying profile fetch timeout in settings.
- Added support for temporarily disabling bypass mode and remembering the configuration.
- Bypass list sort mode configuration is now remembered.
- Improved profile compatibility.
- Reduced APK size.
- Removed GMS QRCode scanner.
- Bug fixes.

### 2.24.1

- Fixed VPN start failure if a WireGuard proxy is included.
- Added compatible mode in bypass config list; fixed list item click issues.
- Added more profile content checks.
- Replaced some toasts with snackbars.
- Included hidden proxy group proxies in global mode by default.
- Bug fixes.

### 2.24.0

- Fixed DoH not working issue.
- Fixed tablet issue where profile content was not displayed in landscape.
- Bug fixes.

### 2.23.4

- Made recursive `include-other-group` independent of definition sequence.
- Fixed dialog transition.
- Fixed LAN multicast sometimes not working if `udp-policy-not-supported-behaviour` was set to `REJECT`.
- Fixed crash caused by manual external resource fetch failure.

### 2.23.3

- Added UI for manually editing hosts.
- Improved DNS response printing.
- Changed accessibility mode back to manual.

### 2.23.2

- Added support for `preshared-key` parameter in WireGuard.
- Improved profile compatibility.
- Improved accessibility compatibility.

### 2.23.1

- Improved profile compatibility.
- Bug fixes.

### 2.23.0

- Added ARMv8 crypto extension support to improve SS throughput performance.
- Added UDP label in proxy list to indicate UDP relay support.
- Added support for Android 12L+ activity embedding.
- Updated Japanese/Korean translations.
- Improved profile compatibility; `include-all-proxies` now only includes proxies under the `[Proxy]` section.
- Improved profile import error prompts.
- Fixed slight memory leak in simple-obfs.
- Bug fixes.

### 2.22.9

- Improved accessibility compatibility.
- Improved profile compatibility.
- Bug fixes.

### 2.22.8

- Fixed public IP value issue.
- Fixed theme display issue.

### 2.22.7

- Used DNS over HTTPS in profile fetcher to handle DNS pollution issues.
- Added "Masked from recent tasks" option.
- Added "Hide from recent tasks" option.
- Bug fixes.

### 2.22.6

- Added NAT detection tool.
- Bug fixes.

### 2.22.5

- Added support for sort mode in bypass config.
- Fixed tile issue.
- Added MTU option in settings.
- Fixed SSID/BSSID issue when Surfboard is in the background.
- Made `policy-regex-filter` support partial matching with `include-all-proxies` and `include-other-group`.

### 2.22.4

- Fixed DNS query issue on Android 14.
- Fixed proxy group speed test not working.
- Fixed issues with some VMess proxies.

Issues above were introduced in 2.22.1 and 2.22.3.

### 2.22.3

- Enabled support for pure dark in dynamic color themes.
- Improved profile compatibility.
- Synchronized proxy test results across different proxy groups.
- Bug fixes.

### 2.22.2

- Bug fixes.

### 2.22.1

 - Added pure dark theme support.
 - Bug fixes.

### 2.22.0

- Added WireGuard proxy support.
- Added `include-other-group` support.
- Ignored Ponte proxy.
- Updated embedded GeoIP library.
- Bug fixes.

### 2.21.5

- Fixed theme change not working on some devices.
- Fixed public IP card displaying IPv6 address format.
- Updated translations.
- Fixed window background color error.
- Bug fixes.

### 2.21.4

- Fixed Switch media import crash introduced in the previous version.
- Improved VPN opening speed.
- Bug fixes.
- Updated translations.

### 2.21.3

- Added support for using FTP to modify profiles list.
- Bug fixes.

### 2.21.2

- Added support for auto-zoom in GMS QRCode scanner.
- Bug fixes.

### 2.21.1

- Supported `force-remote-dns` and `enhanced-mode` in `PROCESS-NAME` rules.
- Fixed tile click not working on Android 14.
- Bug fixes.

### 2.21.0

- Added support for some MISC rules. 
  - With `IN-PORT` and `SRC-IP`, you can now control traffic from LAN proxies more easily.
  - For more info, please check the [manual](https://getsurfboard.com/docs/profile-format/rule/misc).
- Added support for compact profile list.
- Unified menu icon UI.
- Updated bottom sheet peek height.
- Displayed remote client info from LAN proxy in logcat.
- Adapted to Android 14.

### 2.20.10

- Bug fixes.
- Ignored invalid proxies when importing multiple URIs.
- Removed sponsor entrance.

### 2.20.9

- Bug fixes.
- Displayed private IP in sshdump card.
- Improved VMess URI compatibility.

### 2.20.8

- Fixed import profile compatibility issues.
- Avoided closing UI when toggling tile.
- Fixed update profile notification issue.
- Fixed private IP and DNS not displaying when starting VPN from tile.
- Improved GeoIP compatibility.
- Bug fixes.

### 2.20.7

- Bug fixes.
- Updated translations.

### 2.20.6

- Supported bypassing TLS verification when fetching profiles and external resources.
- Printed package name in DNS log.
- Avoided toasting when starting VPN.
- Fixed subnet rule bugs.
- Bug fixes.

### 2.20.5

- Bug fixes.

### 2.20.4

- Fixed in-app update crashing.

### 2.20.3

- Added changelog entrance in-app.
- Allowed installation on SD card.
- Bug fixes.

### 2.20.2

- Profile content: Added support for [subnet type rules](https://getsurfboard.com/docs/profile-format/rule/subnet).
- About settings: Added new version checking for non-Google Play installations.
- Bug fixes.

### 2.20.1

- Profile content: Added support for subnet type rules.
- About settings: Added new version checking for non-Google Play installations.
- Bug fixes.

### 2.20.0

- Updated profile list UI:
  - Added suggestion chip.
  - Added sponsors entrance in footer.
  - Added manual entrance when empty.
- Added app widget support: Public IP, DNS, and Private IP.
- Updated app shortcut icon.
- GeoIP library now supports auto-update.
- Bug fixes.

### 2.19.4

- Supported querying IP location in tool list.
- Supported scanning QRCode from gallery.
- Caught WebView core missing exception.
- Automatically restart VPN when switching selected profile.
- Changed QRCode library to reduce APK size.
- Supported displaying external resource timeout messages when fetching profiles.
- Updated translations.
- Allowed copying URL in settings.
- Fixed UI issues.
- Bug fixes.

### 2.19.3

- Fixed profile item menu focus issue on TV devices.
- Updated profile editor library version.
- Added detection for TLS handshake failure due to Client/Server time mismatch.
- Added toolbar divider.
- Updated handler UI for bottom sheet.
- Always show labels in bottom navigation bar.
- Supported using editor to view external resource content (policy path/rule set/domain set).
- Fixed VPN time ticker running when VPN is not started.
- Updated UI details for Android TV devices.
- Fixed duplicated notification actions.
- Fixed proxy list alignment issue.
- Added Cloudflare speed test entrance in tools list.

### 2.19.2

- Improved Trojan/VMess URI compatibility.
- Fixed UI overlay issue.
- Uploaded bypass VPN setting description for better understanding.
- Fixed Android TV speed test icon focus issue.
- Bug fixes.

### 2.19.1

- Added support for batch updating profiles.
- Added support for pinning profiles.
- Re-added bypass VPN toggle setting.
- Supported displaying network error info when import profile failed due to external resource failure.
- Bug fixes.
- Fixed some translations.

### 2.19.0

- Fixed FD leak caused by IPC protect.
- Fixed OOM caused by editor.
- Enlarged proxy list item maximum width.
- Bypass list supports case-insensitive search.
- Supported detecting multiple proxies with the same name but different content.
- Bug fixes.
- Updated translations.

### 2.18.8

- Fixed Android 13+ issue introduced in 2.18.7.

### 2.18.7

- Supported `test-timeout` parameter.
- DomainSet uses binary search list instead of HashMap; search speed is slower, but memory consumption is lower.
- Applied some `skip-proxy` rules on TUN interface on Android 13+.
- Re-enabled recent request entrance.
- Fixed UI issues on 7-inch tablets.
- Bug fixes.
- Fixed SS proxy server domain not querying through DoH.
- Fixed DNS query log error.

### 2.18.6

- Bug fixes.

### 2.18.5

- Fixed TCP KeepAlive toggle not working.
- Added session ID in logcat.
- Updated translations.
- Improved profile import.

### 2.18.4

- `include-all-proxies` now includes all proxies in `[Proxy]` and `[Proxy Group]`, including external proxies.
- Added TCP keep-alive toggle for proxies in settings.
- Displayed last exit reason in developer options UI.
- Caught profile decode exception instead of returning success.
- Reduced APK size.
- Bug fixes.

### 2.18.3

- Improved embedded profile editor performance on huge profiles.
- Fixed crashes.
- Updated translations.

### 2.18.2

- Supported sharing profile via QRCode.
- Dashboard UI supports dynamic column size; added back NavigationRailView.
- Attempted to fix 'too many open files' issue.
- Added FD count display in developer options UI.
- Reduced APK size.
- Supported unofficial `allowInsecure` parameter in Trojan URI.
- Bug fixes.

### 2.18.1

- Fixed STUN NAT.
- Updated translations.
- Bug fixes.

### 2.18.0

- Supported UTLS.
- Supported bypass config import/export.

### 2.17.6

- Modified some setting entrances.
- Bug fixes.

### 2.17.5

- Bug fixes.

### 2.17.4

- Fixed issue where network sometimes did not switch from mobile to WiFi.
- Fixed ProxyGroup tabs scrolling issue introduced in 2.17.3.
- Reruns url-test/fallback group speedometer when network changes.
- Improved save profile error message display.
- Fixed speedometer direct test failure.
- Bug fixes.
- Updated translations.

### 2.17.3

- Rewrote speedometer module.
  - Supports synchronizing test results between different tabs.
  - Supports sorting by default/delay/name.
  - Supports auto-sorting after test finishes.

### 2.17.2

- Supported `fallback` group type.
- Improved Android TV experience.
- Updated translations.
- Bug fixes.

### 2.17.1

- Supported `include-all-proxies` standard in proxy group.
- Improved UI compatibility with Samsung tablet sidebar.
- Improved UI compatibility with Android 13 foldable phone bottom bar.
- Added bottomBar support in profile editor.
- Bug fixes.

### 2.17.0

- Dashboard: Long press to hide card, or toggle card visibility in the top right menu.
- Added public IP visibility toggle animation.
- Updated some displayed text.
- Removed some profile URL format checks for better compatibility.

### 2.16.5

- Fixed OOM issue caused by DoH function.
- Adapted to Android 13 per-app language settings.
- Fixed empty local proxy card issue.
- Added OOM monitor debug function.
- Made panel dialog content URL and email clickable.
- Reduced APK size.
- Disabled "Hide VPN notification" setting on MIUI.
- Supported clicking sshdump bar in dashboard to open VPN settings.

### 2.16.4

- Fixed some OOM issues.
- Fixed speed curve freezing when speed is zero.
- Updated translations.
- Updated embedded GeoIP library.
- Displayed LAN IP in local IP card UI.
- Respected ruleSet/domainSet sequence.

### 2.16.3

- Bug fixes.
- Added VMess username format validation.
- Updated switch preference UI.

### 2.16.2

- Added profile sub-menu support.
- Bug fixes.
- Adapted to Android 13 `excludeRoute` method.
- Added SO library missing detection.
- Reduced suffix domain rule memory usage.
- Fixed MIUI gesture bar color.
- Supported long-press on IP card to copy IP.
- Updated translations.

### 2.16.1

- Supported [panel](https://getsurfboard.com/docs/profile-format/panel/static).
- Fixed Shadowsocks protocol crash issue.

### 2.16.0

- Fixed connection count issue.
- Adapted to Android 13 notification permission request.
- Updated "Start on Boot" logic.

### 2.15.3

- Fixed some memory leak issues.
- Fixed bugs.

### 2.15.2

- Tried to fix connection count issue by not using protect API.
- Added unsupported YAML format profile detection.
- Compatible with number values with unit suffixes in profile content.
- Bug fixes.
- Updated translations.

### 2.15.1

- Displayed native process memory consumption in developer UI.
- Added Nintendo Switch media import support (Android 10+).
- Updated shortcut icon shape.
- Moved sshdump into VPN settings.
- Updated translations.
- Bug fixes.

### 2.15.0

- Added new traffic list UI.
- Supported websocket in Trojan protocol.
- Reverted to previous dark icon.

### 2.14.0

- Reduced VPN CPU usage.
- Added more notification settings.
- Added recommended DoH server list.
- Added export log in tool list.
- Updated embedded GeoIP library.
- Added document entry in external resources UI.
- Updated translations.

### 2.13.4

- Fixed tile not working on ColorOS.
- Hidden VPN notification badge icon.
- Fixed timeout when applying 'force-remote-dns' on direct rule domain.
- Supported decoding 'persistent' param in load-balanced group.

### 2.13.3

- Added custom GeoIP database support.

### 2.13.2

- Optimized DOMAIN-SET memory usage.

### 2.13.1

- Improved DOMAIN-SET performance.
- Improved proxy group UI performance.

### 2.13.0

- Supported DOMAIN-SET rule.
- Fixed force-remote-dns setting not working for domain rules in RULE-SET.
- Added Korean language support.

### 2.12.6

- Updated public IP batch fetch.
- Supported displaying flag emoji on public IP card.
- Tried to fix traffic loop if proxy host is IP format.
- Better handling of horizontal orientation.

### 2.12.5

- Fixed setting crash issue.

### 2.12.4

- Improved tablet UI.
- Bug fixes.

### 2.12.3

- Supported load-balance proxy group.
- Process rule supported wildcard matching.
- Bug fixes.

### 2.12.2

- Moved Google API checking to tools list.
- Updated tools list UI.

### 2.12.1

- Fixed Google API availability checking crash.

### 2.12.0

- Added Google API availability checking.
- Added invalid managed config URL FAQ entrance.
- Disabled sshdump on Android 7 and lower.
- Supported dynamic UI translation changes on the fly.

### 2.11.4

- Added GMS QRCode scanner support.
- Improved DNS IP display outside mainland China.
- Fixed public IP display issue.
- Updated profile menu item sequence.
- Fixed DoH server verification exception.
- Added Android TV App entrance (still using mobile UI).
- Added private IP card in dashboard.
- Updated GeoIP library.
- Added more theme support.

### 2.11.3

- Supported drag and drop feature in profile list UI.
- Added Wireshark sshdump support in tools list.
- Added DnsPod DoH server in embedded profile template.
- Bug fixes.

### 2.11.2

- Better wildcard match for `skip-proxy`, `always-real-ip`, and host rules.
- Added VPN toggle toast.
- Improved public IP API usability.
- Changed editor newline symbol for better compatibility.
- Fixed theme setting crash on lower version devices.
- Fixed change theme not working on lower version devices.
- Fixed self-traffic handle error.

### 2.11.1

- Added allowing bypass VPN setting.
- Disabled text highlight in embedded profile editor to improve performance.
- New theme setting UI; supports devices lower than Android 12.
- Bug fixes.
- Updated translations.

### 2.11.0

- Supported changing theme palette.
- Supported overriding [doh-server](https://getsurfboard.com/docs/profile-format/general/doh_server) config in settings.
- Improved VPN start speed when using huge profiles.
- Supported toggling offline/disabled app display in bypass app list.
- Fixed fetch profile timeout if it contains self URL as policy path URL.
- Improved recent requests list performance; supports fast scroll.
- Updated translations.

### 2.10.2

- Changed default `vmess-aead` value to true.

### 2.10.1

- Supported profile URL as policy path URL.
- Fixed profile editor save failed still showing as success.
- Fixed network unavailable if using global outbound with zero proxies profile.
- Removed override `vmess-aead` setting; please use [vmess-aead](/docs/profile-format/proxy/external-proxy/vmess) in profile instead.
- Changed profile list sort to natural order.
- Added more protocol recognition in logcat and recent requests.
- Updated translations.

### 2.10.0

- Added `doh-server` support.
- Added FCM diagnostics entrance in developer options.
- Updated translations.

### 2.9.12

- Fixed public IP card random crash issue.
- Fixed installation issue on devices without a camera.

### 2.9.11

- Used MLKit QRCode scanning instead of ZXing.
- Added Developer Options UI:
  - Support viewing memory usage, triggering garbage collection, and exporting memory snapshots.
  - Support exporting log files.
- Unified browser open method.
- Added translator contributor list.
- Updated translations.
- Fixed some VMess URI import failures.
- Supported HTTP 301 in external resource management.
- Supported Android 13 themed app icons.

### 2.9.10

- Supported overriding `http-listen` and `socks5-listen` in profiles.
- Supported HTTP 30X redirection when fetching external resources.

### 2.9.9

- Fixed SS URL Base64 decode error.
- Added Google Play AAB support.
- Used online sponsor page.
- Updated translations.
- Bug fixes.

### 2.9.8

- Bug fixes.

### 2.9.7

- Added `udp-policy-not-supported-behaviour` support.
- Rewrote external resource manager.

### 2.9.6

- Profile editor: Performance improvements, added more highlight support.
- Added `internet-test-url` support.
- Compatible with VMess proxies whose WS header value is wrapped with quotes.
- Updated translations.

### 2.9.5

- Added traffic statistics card in dashboard (counts only a single session).
- Added traffic statistics mode in settings; affects notifications and traffic card.
- Toggling notification tile without closing panel.
- Supported Google Play In-App Update.
- Updated libuv to 1.44.1.
- Updated translations.

### 2.9.4

- Added AppCenter & Breakpad.
- Reverted outbound UI.
- Added new manual entrance.
- Changed public IP fetching API.
- Updated translations.

### 2.9.3

- Fixed crash when local proxy address is in use.
- Updated outbound mode card UI.
- Fixed crash when upgrading from v1.2.4.

### 2.9.2

- Added local proxy support: HTTP and SOCKS5.
- Updated dashboard UI.
- Enabled LAN traffic filter setting.

### 2.9.1

- Refetched public IP info when changing outbound mode.
- Fixed issue where changing global proxy did not update public IP info.
- Fixed crash caused by VPN quick starting twice.
- Fixed crash when viewing huge ruleSet/policyPath lists.
- Added ChangeLog dialog when clicking version code.
- Fixed random GeoIP crash on Android 5/6.
- Added sponsors list.

### 2.9.0

- Added auto-fix for DNS poisoning.
- Fixed tile not working on some devices.
- Small UI changes.
- Bug fixes.

### 2.8.9

- Fixed profile serializable crash.
- Removed Flurry.
- Used Crashlytics instead of Sentry.

### 2.8.8

- Updated translations.
- Fixed splash screen top-left corner frame.
- Optimized memory usage caused by huge profile/ruleSet/policyPath.
- Added quick change proxy group selection UI.
- Improved editor launch performance.
- Added setting to update profiles after VPN established.
- Bug fixes.

### 2.8.7

- Avoided opening VPN causing ADB WiFi reconnect.
- Updated all profiles after VPN started.
- Fixed crash.
- Updated translations.

### 2.8.6

- Updated translations.
- Bug fixes.

### 2.8.5

- Added app shortcut support.
- Added Deeplink support:
  - `surfboard:///toggle`
  - `surfboard:///start`
  - `surfboard:///stop`
  - `surfboard:///install-config?url=[encoded_profile_url]`
- Bypass config supports batch operations.
- Supported setting to use external editor.
- Fixed manual profile update not refreshing last modified time.
- Added change language animation.

### 2.8.4

- Added more transition animations.
- Language changes take effect without restart.
- Updated editor font.
- Fixed navigation bar overlay issue in some UIs.
- Updated translations.
- Bug fixes.

### 2.8.3

- Editor supports some Emacs key maps: Ctrl + [Shift] + N/P/F/B/A/E.
- Proxy list supports scrolling to selected proxy.
- Updated translations.
- Fixed menu item repeat issue.

### 2.8.2

- Profile Editor:
    - Added highlight support.
    - Added redo/undo support.
    - Added new empty profile support.

### 2.8.1

- Supported embedded editor.
- Small UI changes.

### 2.8.0

- Material Design 3.
- This version may be buggy and won't be released on Google Play until stable. Use at your own risk.

### 2.7.9

- Bug fixes.

### 2.7.8

- Multiple proxy import now only supports dividing with newline; space and vertical bar are no longer supported.
- Updated Vietnamese translation.
- Fixed crash.

### 2.7.7

- Rewrote WebDAV synchronization module.
- Show profile update option even if managed config URL is invalid.
- Changed VMess/Trojan proxy default `udp-relay` value to false.
- Fixed crash when updating invalid profiles.
- Fixed VMess URI compatibility.
- Bug fixes.

### 2.7.6

- Removed Direct/Reject proxy in global proxy group.
- Cloned profile as editable profile with managed config removed.
- Excluded unsupported proxy URIs (like `vless://xxx`) when importing.
- Changed default proxy column size to middle.

### 2.7.5

- Fixed SAF editing not triggering profile list refresh.
- Bug fixes.

### 2.7.4

- Supported `vmess-aead` parameter in VMess proxy config.
- Added DoH detection.
- Bug fixes.
- Use `vmess-aead` parameter to define per-proxy AEAD setting; if not defined, the default value in settings will be used.
- For profile format details, please check the sample profile in the top right corner of the profile list.

### 2.7.3

- Supported Always-ON-VPN setting.
- Generated new profile name when re-importing existing profile.
- Improved ICMP/UDP traffic handling efficiency when using profiles with many rules.
- Supported hiding system apps in bypass config.
- Prompted to restart VPN after bypass config changed.
- Added disable notification checking in settings.
- Fixed active count flickering issue.
- Enabled `force-remote-dns` by default.
- New profile update strategy.

### 2.7.2

- Supported `always-real-ip`.
- Supported decoding SNI parameter and proxy name from Trojan URI.
- Enabled `udp-relay` in VMess/Trojan proxy by default.
- Blocked DoT traffic by default.
- Updates all profiles when app launches.
- Supported decoding `internal.example.com = server:syslib` in `[Host]` section.
- Supported domain suffix in `skip-proxy` config.
- Improved import profile error prompts.
- Added `always-real-ip = stun.l.google.com` in `[General]` section to fix Google Voice dialing issue; proxy must support relaying UDP traffic.

### 2.7.1

- Kept proxy order from proxy group which contains policy path and normal proxies.
- Updated translations.
- Bug fixes.

### 2.7.0

- Improved profile name guessing when imported from URL.
- Fixed rule count error when including multiple rulesets with the same source.
- Removed disk cache when removing external resource.
- Fixed IP type Trojan proxy import issue.

### 2.6.9

- Improved huge profile compatibility.
- Improved TLS proxy compatibility.
- Improved profile decode speed.
- Treated `REJECT-TINYGIF` as `REJECT` rule (due to Android not supporting MITM).
- Added Surge manual entrance in tools tab.

### 2.6.8

- Fixed global group sequence not following profile content.
- Fixed network speed display issue on 32-bit devices.
- Reset all TCP connections when changing outbound mode.
- Fixed proxy count error in some policy path profiles.
- Fixed some crashes when upgrading from GP version.
- Bug fixes.

### 2.6.7

- Fixed ruleSet/policyPath too huge causing crashes.
- Fixed network error causing crashes.
- Fixed custom URI scheme not working.

### 2.6.6

- Allowed displaying invalid profiles; you are free to delete or modify them.
- Moved external resource manager entrance to a lower location.
- Used `force-remote-dns` in global outbound mode by default.
- Cached DNS cache when toggling VPN, changing outbound mode, and changing proxy group selection.
- Supported batch deleting unused external resources.
- Bug fixes.

### 2.6.5

- Added external resources manage UI.
- Speeded up notification bar tile toggle initial time.
- Used https://github.com/Loyalsoldier/geoip as embedded GeoIP library.
- Updated URL format validator.
- Bug fixes.

### 2.6.4

- Added "Force remote dns" toggle in settings.
- Scrolls to new position when cloning/renaming profile.
- Checked invalid VMess URL format.
- Bug fixes.

### 2.6.3

- Added 'NEW' badge for new profiles.
- Uses `FINAL` rule to fetch public IP info if `FINAL` rule is defined.
- ICMP: return fake ICMP reply if matching FORWARD policy; return dest unreachable if matching REJECT policy.
- Print debug info in logcat if clicking connection count card when VPN is opened.
- Minor UI updates.

### 2.6.1

- Traffic with unsupported protocols will be rejected by default.
- UDP reject will be handled by returning ICMP port unreachable by default.
- Warned about invalid profile URLs when importing.
- Fixed some connection count issues.
- Added more restart VPN prompts.
- Hidden network speed status bar icon toggle on MIUI devices.
- Bug fixes.

### 2.6.0

- Fixed crash.
- Supported disabling logcat output in settings.

### 2.5.9

- Fixed some memory/connection leak issues.

### 2.5.8

- Fixed VMess/Netflix compatibility issue caused by IPv6.
- Fixed crashes.
- Printed warning log when rejecting traffic.
- Supported scanning ss/vmess/trojan/http/https/surfboard/surge/surge3 format QRCodes.

### 2.5.7

- Fixed crashes.
- Improved VMess websocket compatibility.
- Updated Persian language.

### 2.5.6

- Fixed speedtest issue.
- Bug fixes.

### 2.5.5

- Updated Persian language.
- Fixed Telegram using direct rule issue.

### 2.5.4

- Fixed auto group speed test not working.
- Reset all existing TCP connections when changing proxy group selection.
- Avoided forward proxy traffic deadlock.
- Fixed crash caused by long filenames.

### 2.5.3

- Fixed speed test issue.
- Supported Basic Auth in profile URL.

### 2.5.2

- Fixed speed test issue.

### 2.5.1

- Fixed speed test instability.
- Fixed fetching public IP error when used with other VPNs.
- Added VMess AEAD hint when first used.
- Added warning when new profile subscribe URL is from localhost.

### 2.5.0

- Fixed WebDAV synchronization issue with box.com.
- Updated dashboard UI.
- Updated MaxMind GeoIP2Lite library.
- Bug fixes.

### 2.4.9

- Added WebDAV synchronization support.
- Fixed crash when restarting VPN after renaming profile.
- Fixed fetching IP info failure after VPN established.
- Improved save profile speed.
- Fixed update profile last modified time not changing.

### 2.4.8

- Improved UI compatibility with tablet devices.
- Added network speed display on status bar icon.
- Added Public IP visibility toggle.
- Prompted to restart VPN when selecting profile.
- Bug fixes.

### 2.4.7

- Fixed profile import issue caused by `policy-regex-filter`.
- Improved profile name guessing from URL.
- Fixed UI tab double click issue.
- Fixed profile name containing slash causing crash.
- Updated sample.conf.
- Bug fixes.

### 2.4.6

- Bug fixes.

### 2.4.5

- Supported `policy-regex-filter` and `hidden` in proxy group.
- Fixed global outbound making network unavailable.
- Hidden notification in lockscreen.
- Made VMess AEAD disabled by default.
- Updated UI.
- Bug fixes.

### 2.4.4

- Supported `udp-relay` in socks5/shadowsocks/vmess/trojan proxy.
- Fixed import VMess URL failure if it contains a slash.
- Fixed some crash issues.

### 2.4.3

- Improved traffic throughput.
- Updated bypass apps UI, added search support.
- Fixed SS proxy with domain causing stop VPN failure.
- Updated UI.

### 2.4.2

- Fixed policy path issue.
- Added Indonesian support.
- Improved profile decode performance.
- Fixed huge profile causing crash.
- Only used English app entrance name.

### 2.4.1

- Fixed Gradle 7.0.1 causing R8 error.
- Updated libuv/v2fly library.

### 2.4.0

- Fixed SOCKS5 proxy not working without authorization.
- Added policy-path support.
- Supported `surge3:///install-config?url=xxx`.
- Supported enhanced mode domain rules.
- Supported decoding http/socks5 proxy as TLS-based proxy.
- Updated GeoIP library.

### 2.3.5

- Fixed some profile import issues; supported more import formats.
- Fixed column size not synchronizing between proxy group tabs.
- Fixed notification click not working.
- Don't count speedometer into active TCP connection count.
- Changed UI back to 4 tabs in main UI.

### 2.3.4

- Added fuzzy search in recent requests UI.
- Updated item UI in recent requests.
- Sort bypass apps by toggle state.
- Supported `trojan://` proxy URL.
- Supported importing multiple proxy URLs divided by space, vertical line, and enter.
- Supported switching app launcher title to English.
- Supported proxy column size switch.

### 2.3.3

- Added active connection count display in dashboard.
- Supported `vmess://` and `ss://` URLs.
- Added Profile FileProvider support.
- Added VMess AEAD support settings.

### 2.3.2

- Supported VMess AEAD.
- Supported long press to copy traffic info in recent request list.
- Fixed update profile last modified time not changing.
- Fixed profile modify not working.
- Updated translations.

### 2.3.1

- Fixed open VPN failure with rule-set profile.

### 2.3.0

- Added `skip-proxy` config support.
- Fixed change global proxy not working when VPN is on.
- Added direct proxy in global outbound mode.
- Added tools tab.
- Supported custom DNS server port in `dns-server` config.
- Supported decoding 1/0 as Boolean in profile.
- Fixed long profile list selection duplicate issue.
- Bug fixes.

### 2.2.1

- Added skip TLS verify setting.
- Fixed whitelist mode not working issue.

### 2.2.0

- Added bypass config support.
- Reduced APK size.
- Added `proxy_test_url` support.
- Added profile sample in profile list menu.

### 2.1.0

- Added recent request support.
- Added profile viewer (editing not supported yet).
- Integrated QRCode scanner, no need to download ZXing scanner.

### 2.0.2

- Updated all locale app names to [Surfboard].
- Fixed crash issue on Android 7.0 and lower versions.
- Updated light theme UI, supported switching theme in settings.
- Fixed global outbound speed test not working.
- Fixed crash when VMess proxy name is boxed with double quotes.
- Fixed UI issues.

### 0.9.19

- Fixed network metered issue on Android 10.
- Fixed speed test issue.
- Allowed fetching profile using current profile.
- Added `test-timeout`/`internet-test-url`/`proxy-test-url` support.
- Remembered proxy group toggle state.
- Avoided displaying toast when fetch toast failed.

### 0.9.18

- Rewrote TCP handler for better memory usage.
- Added proxy group toggle function.
- Added Notification Channel Setting entrance.
- Bug fixes.

### 0.9.16

- Fixed SS TCP speedtest issue.
- Added Tile and app shortcut support.
- Fixed email feedback crash.
- Updated speedtest UI.
- Bugs fixed.

### 0.9.14

- Improved throughput performance (Up to 300Mbps+).
- Bugs fixed.

### 0.9.13

- Fixed second launch crash issue.
- Updated proxy group grid UI.
