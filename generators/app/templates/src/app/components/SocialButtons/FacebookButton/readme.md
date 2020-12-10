## Facebook Sign In Setup

Facebook Sign In library is configured on this React Native project. But you still need to do some stuffs to finish the setup.

Follow the next steps:
1. Go to Facebook developer page https://developers.facebook.com/ and create a project for your app.
2. Add your app bundle identifier (iOS) and the hash of the keystore (Android) file used to sign your app (release or debug)
3. Copy the app identifier from Facebook developer page and paste on the `FACEBOOK_APP_ID=XXXXX`
You can follow more specific instructions on https://developers.facebook.com/docs/react-native/getting-started/ configuration section

Extra config (If you didn't do it yet):
- Facebook SDK has some Swift dependencies. So as a React Native project, you need to create a Swift Bridge Header. To do that you just need to create a simple Swift file from Xcode on the iOS root folder. Xcode will ask you if you want to leave Xcode create a bridge automatically. Accept and that's all for swift.

- Facebook Sign In needs the Facebook app identifier on info plist file. It is automatically configured with `react native config` but you still need to do the next:
Open project with Xcode and add a the root of iOS folder a Xcode config file called `Config`. After that, select your project (no target) and add the Config file to each configuration on `info` tab. That's all, now all your env variables will be readable from info.plist.

More info on library page: https://github.com/facebook/react-native-fbsdk

That's all. Now you can use Facebook sign in on your project.

## Facebook Component

Facebook Button is a component that use the Native Facebook SDK. You can use the native button provided by the library or pass a custom component. Custom Component will be internally wrapped on a touchable component that will use the API.
The component interface will receive `onSuccess` and `onError` callbacks to receive the sign in token. If you want to change the data passed to the callback, just modify the `FacebookLoginManager` function inside `FacebookButton/index.tsx` file.
