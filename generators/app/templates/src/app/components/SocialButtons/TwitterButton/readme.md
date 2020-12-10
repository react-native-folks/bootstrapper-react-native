## Twitter Sign In Setup

Twitter Sign In library is configured on this react native project. But you still need to do some stuffs to finish the setup.

Follow the next steps:
1. Go to Twitter Developer page https://developer.twitter.com/en/portal/dashboard and create a project for your app.
2. Copy the `TWITTER_KEY` and `TWITTER_SECRET_KEY` and put them on the corresponding `.env` file on the root of the project.

Extra config (If you didn't do it yet):
- Twitter SDK has some Swift dependencies. So as a React Native project, you need to create a Swift bridge header. To do that you just need to create a simple Swift file from Xcode on the iOS root folder. Xcode will ask you if you wnat to leave Xcode create a bridge automatically. Accept and thats all for Swift.

- Twitter Sign In needs the Twitter keys on info plist file. It is automatically configured with `react native config` but you still need to do the next:
Open project with Xcode and add a the root of iOS folder a Xcode config file called `Config`. After that, select your project (no target) and on `info` tab add the Config file to each configuration. That's all, now all your env variables will be readable from info.plist.

More info on library page: https://github.com/GoldenOwlAsia/react-native-twitter-signin

That's all. Now you can use Twitter Sign In on your project.

## Twitter Component

Twitter Button is a component that use the Twitter API. You can use the native button provided by the library or pass a custom component. Custom Component will be internally wrapped on a touchable component that will use the API.
The component interface will receive `onSuccess` and `onError` callbacks to receive the sign in token. If you want to change the data passed to the callback, just modify the `TwitterLoginManager` function inside `TwitterButton/index.tsx` file.
