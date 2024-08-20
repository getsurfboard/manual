---
sidebar_position: 9
---

# Location Permission

Our application requests background location permission(BACKGROUND_LOCATION) to support specific advanced network rule functionalities, as detailed below:

1. **SUBNET-SSID Rule Support:**
   When you choose to use rules based on WiFi network names (SSID), we need this permission to identify the WiFi network you're connected to.

2. **SUBNET-BSSID Rule Support:**
   If you configure rules based on WiFi router MAC addresses (BSSID), we need this permission to identify specific WiFi access points.

## Important Notes:
- This permission is only used when you actively choose to use SUBNET-SSID or SUBNET-BSSID rules.
- We do not use this permission for continuous location tracking or to collect your precise location information.
- The collected SSID or BSSID information is only used to execute the network rules you set and not for any other purposes.
- All data is processed locally and is not uploaded to our servers or shared with third parties.

## Privacy Protection:
- You can control or revoke this permission at any time in the app settings.
- If you choose not to grant this permission, SUBNET-SSID and SUBNET-BSSID rules will not function properly, but it won't affect other features of the app.

We are fully aware of the sensitivity of location permissions and commit to using them only when necessary. We will continue to make efforts to protect your privacy. For more information about SUBNET rules, please visit our documentation: [https://getsurfboard.com/docs/profile-format/rule/subnet](https://getsurfboard.com/docs/profile-format/rule/subnet)