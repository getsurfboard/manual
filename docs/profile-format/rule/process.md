---
sidebar_position: 2
---

# Process

## Sample

```ini
PROCESS-NAME,com.android.vending,Proxy
PROCESS-NAME,*google*,Proxy
```

## Format

```ini
PROCESS-NAME, {package name}, {target proxy}
```

## Param

| Name         | Value | Mandatory | Note                                                                               |
|--------------|-------|-----------|------------------------------------------------------------------------------------|
| package name | -     | true      | Format: Android application package name, support complete match or wildcard match |
| target proxy | -     | true      | Specified proxy or proxy group must existed in profile                             |

:::tip
Android application package name can be queried by methods below:
- Use software like [Apk Info](https://play.google.com/store/apps/details?id=com.wt.apkinfo) to query package name on your device
- Search the application name on pc website version of [Google Play](https://play.google.com), enter the application details page, package name will be at the end of the url
- Open the application on your phone, keep it in foreground. Use [ADB](https://developer.android.com/studio/command-line/adb) command to fetch package name:

```shell
adb shell dumpsys activity recents | grep 'Recent #0' | cut -d= -f2 | sed 's| .*||' | cut -d '/' -f1
```
:::