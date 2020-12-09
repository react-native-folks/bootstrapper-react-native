## Apple Sign In Setup

Apple sign in library is configured on this react native project. But you still need to do some stuffs to finish the setup.

Follow the next steps:
1. Open xcode, select your project target and add the `Apple Sign In` capability.
2. Go to your apple developer account page https://developer.apple.com/account and enter on `Certificates, Identifiers and Profiles`. Found your provisioning profile and add the `Apple Sign In` capability If you have'nt a provisioning profile, create one with the capability.
3. Go back to xcode an selecte your provisioning profile.

More info on library page: https://github.com/invertase/react-native-apple-authentication

Thats all. Now you can use apple sign in on your project.

## AppleButton Component

Apple Button is a component that use the apple sign in API. You can use the native button provided by the library or pass a custom component. Custom Component will be internally wrapped on a toucahble component that will use the API.
The component interface will receive `onSuccess` and `onError` callbacks to receive the sign in token. If you want to change the data passed to the callback, just modify the `onAppleButtonPress` function inside `AppleButton/index.tsx` file.
