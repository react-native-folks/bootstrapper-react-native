# Kamino: React Native

## Prerequisites

- CocoaPods: https://guides.cocoapods.org/using/getting-started.html#installation
- Node: https://github.com/creationix/nvm#install-script
- React Native Environment: https://facebook.github.io/react-native/docs/getting-started.html
- Ruby (for Fastlane): https://rvm.io/rvm/install
- Yarn: https://yarnpkg.com/lang/en/docs/install/#alternatives-tab

## TL;DR

You don't need to clone this repository. Just run the following in your terminal:

```bash
bash <(curl -s git@bitbucket.org:mahisoft/kamino-react-native.git/run.sh)
```

## Description

This codebase is meant to be used to kickoff react native projects.
The following optional features can be added out of the box to the new projects:

- Drawer
- OnBoarding
- Tabs
- Login and SignUp
- Firebase Analytics
- Firebase Crashlytics
- Firebase Performance
- Firebase Push Notifications

### Boilerplate

The boilerplate includes

- [Analytics Tracking](/generators/app/templates/src/redux/middlewares/analyticsMiddleware.js)
- [Basic constants](/generators/app/templates/src/constants)
- [Basic utils](/generators/app/templates/src/utils)
- [Font customization](/generators/app/templates/src/config/fonts.js)
- [Formik: HOC to create Custom Fields](/generators/app/templates/src/app/components/withFormikField/index.tsx)
- [Http client configuration](/generators/app/templates/src/config/api.js)
- [i18next configuration](/generators/app/templates/src/config/i18n.js)
- [Push Notifications configuration](/generators/app/templates/src/config/pushNotifications.js)
- [React Navigation: Routes configuration](/generators/app/templates/src/app/components/AppNavigator/navigator.ejs)
- [Reactotron configuration](/generators/app/templates/src/config/reactotronConfig.ejs)
- [Redux store intialization](/generators/app/templates/src/redux/store.ejs)
- [Splash Screen](/generators/app/tasks/appSetup/coreFiles/splashScreenSetup.js)
- [TypeScript basic interfaces](/generators/app/templates/src/interfaces)
- [TypeScript configuration](/generators/app/templates/tsconfig.json)

### Tech Stack

- [Apisauce](https://github.com/skellock/apisauce)
- [Cerealizr](https://github.com/damfinkel/cerealizr)
- [i18next](https://www.i18next.com/)
- [React](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [React Native Config](https://github.com/luggit/react-native-config)
- [React Native Firebase](https://invertase.io/oss/react-native-firebase)
- [React Native Push Notifications](https://github.com/zo0r/react-native-push-notification)
- [React Native Swiper](https://github.com/leecade/react-native-swiper)
- [React Navigation](https://reactnavigation.org/)
- [React Redux](https://react-redux.js.org/)
- [Redux](http://redux.js.org/)
- [Redux Thunk](https://github.com/gaearon/redux-thunk)
- [Reselect](https://github.com/reactjs/reselect)
- [Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)

### Tooling

- [Babel](https://babeljs.io/)
- [Eslint](http://eslint.org/)
- [Flipper](https://fbflipper.com/)
- [Jest](https://jestjs.io/)
- [Prettier](https://github.com/prettier/prettier)
- [React Native Testing Library](https://github.com/callstack/react-native-testing-library)
- [Reactotron](https://github.com/infinitered/reactotron)
- [TypeScript](https://www.typescriptlang.org/)

### Kick off manually

For kick off your own project using the template generator script you'll need to follow these steps:

1. Run `yarn install`.
2. run `yo rootPath/generators/app/index.js` you'll need [Yeoman](https://yeoman.io/learning/index.html) installed for this. Also, the argument `-v` can be used for logging.
3. Some prompts will pop up on your terminal. Pick whatever configuration works best for your current proyect.
4. After the script is finished, your project folder will be successfully generated with all the necessary yarn dependencies installed. Do `cd you/project/path`.
5. Start budler using `yarn start`.
6. Run `npx react-native run-ios --scheme develop` or `yarn ios` for iOS and `npx react-native run-android --variant=developDebug` or `yarn android` for Android.
7. Start working on your project!
