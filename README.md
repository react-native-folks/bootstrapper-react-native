# Kamino: React Native

## Prerequisites

- CocoaPods: https://guides.cocoapods.org/using/getting-started.html#installation
- Node: https://github.com/nvm-sh/nvm#install-script
- React Native Environment: https://reactnative.dev/docs/getting-started
- Ruby (for Fastlane): https://rvm.io/rvm/install
- Yarn: https://classic.yarnpkg.com/en/docs/install/#alternatives-tab
- Detox-cli: https://github.com/wix/Detox/blob/master/docs/Introduction.GettingStarted.md#install-detox-command-line-tools-detox-cli

## TL;DR

You don't need to clone this repository. Just run the following in your terminal:

```bash
bash <(curl -s git@bitbucket.org:mahisoft/kamino-react-native.git/run.sh)
```

## Description

This codebase is meant to be used to kickoff react native projects.
The following optional features can be added out of the box to the new projects:

- Login and SignUp
- Onboarding
- Tabs
- Drawer
- Social Login Buttons
- Google Maps
- Firebase Crashlytics, Analytics and Performance
- Firebase Push Notification


You can exclude Android or iOS platform setup and dependencies instalation. Keep in mind that the project will be created for both platforms anyway, but the excluded will not compile. After prject generation, you can remove the excluded platform project folder if you want.

### Boilerplate

The boilerplate includes

- [Analytics Tracking](/generators/app/templates/src/redux/middlewares/analyticsMiddleware.js)
- [Basic constants](/generators/app/templates/src/constants)
- [Basic utils](/generators/app/templates/src/utils)
- [Font customization](/generators/app/templates/src/config/fonts.js)
- [Http client configuration](/generators/app/templates/src/config/api.js)
- [i18next configuration](/generators/app/templates/src/config/i18n.js)
- [Push Notifications configuration](/generators/app/templates/src/config/pushNotifications.js)
- [React Navigation: Routes configuration](generators/app/templates/src/app/navigation/navigator.ejs)
- [Reactotron configuration](/generators/app/templates/src/config/reactotronConfig.ejs)
- [Redux store intialization](/generators/app/templates/src/redux/store.ejs)
- [Recoil intialization](/generators/app/templates/src/recoilState/atoms.ejs)
- [Splash Screen](/generators/app/tasks/appSetup/coreFiles/splashScreenSetup.js)
- [TypeScript basic interfaces](/generators/app/templates/src/interfaces)
- [TypeScript configuration](/generators/app/templates/tsconfig.json)
- [Detox configuration](generators/app/templates/.detoxrc.ejs)

### Tech Stack

- [Apisauce](https://github.com/skellock/apisauce)
- [Cerealizr](https://github.com/damfinkel/cerealizr)
- [i18next](https://www.i18next.com/)
- [React](https://reactjs.org/)
- [React Hook Form](https://react-hook-form.com/)
- [React Native](https://reactnative.dev/)
- [React Native Config](https://github.com/luggit/react-native-config)
- [React Native Firebase](https://invertase.io/oss/react-native-firebase)
- [React Native Push Notifications](https://github.com/zo0r/react-native-push-notification)
- [React Native Swiper](https://github.com/leecade/react-native-swiper)
- [React Navigation](https://reactnavigation.org/)
- [Google Maps](https://github.com/react-native-maps/react-native-maps)
- [Facebook Signin](https://github.com/facebook/react-native-fbsdk)
- [Twitter Signin](https://www.npmjs.com/package/react-native-login-twitter)
- [Google Signin](https://github.com/react-native-google-signin/google-signin)
- [Apple Signin](https://github.com/invertase/react-native-apple-authentication)
- [Redux](http://redux.js.org/)
- [React Redux](https://react-redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Recoil](https://recoiljs.org/)

### Tooling

- [Babel](https://babeljs.io/)
- [Eslint](http://eslint.org/)
- [Prettier](https://github.com/prettier/prettier)
- [TypeScript](https://www.typescriptlang.org/)
- [Flipper](https://fbflipper.com/)
- [Jest](https://jestjs.io/)
- [Detox](https://github.com/wix/Detox)
- [React Native Testing Library](https://github.com/callstack/react-native-testing-library)

### Kick off manually

For kick off your own project using the template generator script you'll need to follow these steps:

1. Run `yarn install`.
2. run `yo rootPath/generators/app/index.js` you'll need [Yeoman](https://yeoman.io/learning/index.html) installed for this. Also, the argument `-v` can be used for logging.
3. Some prompts will pop up on your terminal. Pick whatever configuration works best for your current proyect.
4. After the script is finished, your project folder will be successfully generated with all the necessary yarn dependencies installed. Do `cd you/project/path`.
5. Start bundler using `yarn start`.
6. Run `npx react-native run-ios --scheme develop` or `yarn ios` for iOS and `npx react-native run-android --variant=developDebug` or `yarn android` for Android. Also check the provided scripts on package.json
7. Start working on your project!

### Testing
Kamino React Native include test using jest tools.

To run the test just call `yarn jest` on root folder.

Test includes:
- A selection of feature combination cases
- App creation check for each case
- App build check (after create) for each case
- App jest execution inside each created project for each case
- App Detox (e2e) execution inside each created project

## Notes About testing
Testing generator is really expensive so run all tests maybe can take a long time and consume CPU resources.

For Detox execution, an existing simulator device is needed. By default, the name is "Pixel_2_API_30". If you want to run Detox test you maybe need to edit your android emulator name, create one with the pointed name or modify the avdName param on "generators/app/templates/.detoxrc.ejs".
