## Google Sign In Setup

Google Sign In library is configured on this react native project. But you still need to do some stuffs to finish the setup.

Follow the next steps:
1. Go to firebase console https://console.firebase.google.com/ and create a project.
2. Add an app for ios and other for android.
3. Download the google services files (android and ios)
4. Add the google services files into the `android/app/GoogleServices` and `ios/{projectName}/GoogleServices` folder following the placeholder names depending of the environment.
5. Copy the `REVERSED_CLIENT_ID` of the google service file and put it on the `.env` file.

Extra config (If you didnt do it yet):
- Twitter Sign In needs the Twitter keys on info plist file. It is automatically configured with `react native config` but you still need to do the next:
Open project with xcode and add a the root of ios folder a xcode config file called `Config`. After that, select your project (no target) and on `info` tab add the Config file to each configuration. Thats all, now all your env variables will be readable from info.plist.

More info on library page: https://github.com/react-native-google-signin/google-signin

Thats all. Now you can use Twitter sign in on your project.

## Google Component

Google Button is a component that use the Google API. You can use the native button provided by the library or pass a custom component. Custom Component will be internally wrapped on a toucahble component that will use the API.
The component interface will receive `onSuccess` and `onError` callbacks to receive the sign in token. If you want to change the data passed to the callback, just modify the `GoogleLoginManager` function inside `GoogleButton/index.tsx` file.
