---
sidebar_position: 2
---

# Process

## Sample

```ini
PROCESS-NAME,com.android.vending,Proxy
PROCESS-NAME,*google*,Proxy
PROCESS-NAME,com.instagram.android,Proxy,force-remote-dns
```

## Format

```ini
PROCESS-NAME, {package name}, {target proxy}[, force-remote-dns][, enhanced-mode]
```

## Param

| Name             | Value          | Mandatory | Note                                                                                  |
|------------------|----------------|-----------|---------------------------------------------------------------------------------------|
| package name     | -              | true      | Format: Android application package name, support complete match or wildcard match    |
| target proxy     | -              | true      | Specified proxy or proxy group must existed in profile                                |
| force-remote-dns | true<br/>false | false     | Default value: false<br/>If set to true, DNS query will triggered in the remote proxy |
| enhanced-mode    | true<br/>false | false     | Default value: false<br/>If set to true, a fake ip will be returned in DNS query      |

:::caution
Due to system restriction, `force-remote-dns` and `enhanced-mode` only works on **Android 11 and above**.

:::tip
Android application package name can be queried by methods below:
- Use software like [Apk Info](https://play.google.com/store/apps/details?id=com.wt.apkinfo) to query package name on your device
- Search the application name on pc website version of [Google Play](https://play.google.com), enter the application details page, package name will be at the end of the url
- Open the application on your phone, keep it in foreground. Use [ADB](https://developer.android.com/studio/command-line/adb) command to fetch package name:

```shell
adb shell dumpsys activity recents | grep 'Recent #0' | cut -d= -f2 | sed 's| .*||' | cut -d '/' -f1
```
:::