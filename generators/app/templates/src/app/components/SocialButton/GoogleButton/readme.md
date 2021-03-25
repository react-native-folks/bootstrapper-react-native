## Google Sign In Setup

Google Sign In library is configured on this React Native project. But you still need to do some stuffs to finish the setup.

Follow the next steps:
1. Go to Firebase Console https://console.firebase.google.com/ and create a project.
2. Add an app for iOS and other for Android.
3. Download the Google Services files (Android and iOS)
4. Add the Google Services files into the `android/app/GoogleServices` and `ios/{projectName}/GoogleServices` folder following the placeholder names depending of the environment.
5. Copy the `REVERSED_CLIENT_ID` of the Google Service file and put it on the `.env` file.

Extra config (If you didn't do it yet):
- Google Sign In needs the Google reverse key on info plist file. It is automatically configured with `react native config` but you still need to do the next:
Open project with Xcode and add a the root of ios folder a Xcode config file called `Config`. After that, select your project (no target) and on `info` tab add the Config file to each configuration. Thats all, now all your env variables will be readable from info.plist.

More info on library page: https://github.com/react-native-google-signin/google-signin

That's all. Now you can use Google Sign In on your project.

## Google Component

Google Button is a component that use the Google API. You can use the native button provided by the library or pass a custom component. Custom Component will be internally wrapped on a touchable component that will use the API.
The component interface will receive `onSuccess` and `onError` callbacks to receive the sign in token. If you want to change the data passed to the callback, just modify the `GoogleLoginManager` function inside `GoogleButton/index.tsx` file.
