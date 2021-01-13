// BASE FOLDERS
module.exports.MOCKS = '__mocks__';
module.exports.TESTS = '__tests__';
module.exports.FONTS = 'assets/fonts';
module.exports.APP_PATH = 'src/app';
module.exports.CONFIG_PATH = 'src/config';
module.exports.CONSTANTS_PATH = 'src/constants';
module.exports.NAVIGATION_PATH = 'src/app/navigation';
module.exports.HOOKS_PATH = 'src/hooks';
module.exports.INTERFACES_PATH = 'src/interfaces';
module.exports.REDUX_PATH = 'src/redux';
module.exports.SERVICES_PATH = 'src/services';
module.exports.UTILS_PATH = 'src/utils';
module.exports.ANDROID_APP_PATH = 'android/app';
module.exports.FASTLANE_ANDROID_PATH = 'android/fastlane';
module.exports.FASTLANE_IOS_PATH = 'ios/fastlane';

// BASE FILES'
module.exports.ESLINT_IGNORE_FILE = '.eslintignore';
module.exports.ESLINTRC_FILE = '.eslintrc.js';
module.exports.MAIN = 'App.js';
module.exports.INDEX_D_FILE = 'index.d.ts';
module.exports.INDEX = 'index.js';
module.exports.JEST_CONFIG_FILE = 'jest.config.js';
module.exports.REACT_NATIVE_CONFIG = 'react-native.config.js';
module.exports.README = 'README.md';
module.exports.TSCONFIG_FILE = 'tsconfig.json';
module.exports.ANDROID_GEMFILE = 'android/Gemfile';
module.exports.IOS_GEMFILE = 'ios/Gemfile';
module.exports.ANDROID_VERSION_GRADLE = `${module.exports.ANDROID_APP_PATH}/version.gradle`;

// TESTS
module.exports.TESTS_REDUX_PATH = `${module.exports.TESTS}/redux`;
module.exports.TESTS_RESPONSES_PATH = `${module.exports.TESTS}/responses`;
module.exports.TESTS_SCREENS_PATH = `${module.exports.TESTS}/screens`;
module.exports.GOOGLE_SIGNIN_MOCK = `${module.exports.MOCKS}/@react-native-community/google-signin.js`;
// TESTS - REDUX
module.exports.TESTS_STORE = `${module.exports.TESTS_REDUX_PATH}/store.js`;
module.exports.TESTS_UTILS = `${module.exports.TESTS_REDUX_PATH}/utils.js`;
module.exports.TESTS_AUTH_ACTIONS_PATH = `${module.exports.TESTS_REDUX_PATH}/auth/actions.js`;
module.exports.TESTS_AUTH_SLICE_PATH = `${module.exports.TESTS_REDUX_PATH}/auth/slice.js`;

// APP
module.exports.COMPONENTS_PATH = `${module.exports.APP_PATH}/components`;
module.exports.SCREENS_PATH = `${module.exports.APP_PATH}/screens`;
module.exports.APP_I18N = `${module.exports.APP_PATH}/i18n.ts`;
module.exports.APP = `${module.exports.APP_PATH}/index.tsx`;
module.exports.COMPONENTS = `${module.exports.COMPONENTS_PATH}/index.ts`;

// APP COMPONENTS - APP NAVIGATION
module.exports.NAVIGATION_UTILS = `${module.exports.NAVIGATION_PATH}/utils.tsx`;
module.exports.STATUS_BAR_CONSTANTS = `${module.exports.NAVIGATION_PATH}/config/statusBar.ts`;
module.exports.NAVIGATION_AUTH_STACK = `${module.exports.NAVIGATION_PATH}/stacks/AuthStack.tsx`;
module.exports.NAVIGATION_ONBOARDING_STACK = `${module.exports.NAVIGATION_PATH}/stacks/OnboardingStack.tsx`;
module.exports.APP_NAVIGATOR_PATH = `${module.exports.NAVIGATION_PATH}/navigator.tsx`;
module.exports.APP_NAVIGATION_INDEX = `${module.exports.NAVIGATION_PATH}/index.tsx`;
module.exports.NAVIGATION_ROUTES = `${module.exports.NAVIGATION_PATH}/routes.ts`;
module.exports.NAVIGATION_CONFIG = `${module.exports.NAVIGATION_PATH}/config/screensOptions.tsx`;
module.exports.NAVIGATION_APP_STACK = `${module.exports.NAVIGATION_PATH}/stacks/AppStack.tsx`;
module.exports.NAVIGATION_STACK_INDEX = `${module.exports.NAVIGATION_PATH}/stacks/index.ts`;

// APP COMPONENTS - CUSTOM BUTTON
module.exports.CUSTOM_BUTTON_PATH = `${module.exports.COMPONENTS_PATH}/CustomButton`;
// APP COMPONENTS - CUSTOM SHADOW VIEW
module.exports.CUSTOM_SHADOW_VIEW_PATH = `${module.exports.COMPONENTS_PATH}/CustomShadowView`;
// APP COMPONENTS - LOADABLE IMAGE
module.exports.LOADABLE_IMAGE_PATH = `${module.exports.COMPONENTS_PATH}/LoadableImage`;
// APP COMPONENTS - CUSTOM STATUS BAR
module.exports.CUSTOM_STATUS_BAR = `${module.exports.COMPONENTS_PATH}/CustomStatusBar`;
// APP COMPONENTS - CUSTOM TEXT
module.exports.CUSTOM_TEXT_PATH = `${module.exports.COMPONENTS_PATH}/CustomText`;
// APP COMPONENTS - CUSTOM TEXT
module.exports.CUSTOM_TEXT_INPUT_PATH = `${module.exports.COMPONENTS_PATH}/CustomTextInput`;
// APP COMPONENTS - SOCIAL BUTTONS
module.exports.SOCIAL_APPLE_BUTTON = `${module.exports.COMPONENTS_PATH}/SocialButtons/AppleButton`;
module.exports.SOCIAL_FACEBOOK_BUTTON = `${module.exports.COMPONENTS_PATH}/SocialButtons/FacebookButton`;
module.exports.SOCIAL_GOOGLE_BUTTON = `${module.exports.COMPONENTS_PATH}/SocialButtons/GoogleButton`;
module.exports.SOCIAL_TWITTER_BUTTON = `${module.exports.COMPONENTS_PATH}/SocialButtons/TwitterButton`;
// APP COMPONENTS - GOOGLE MAPS
module.exports.MAPS_COMPONENT_PATH = `${module.exports.COMPONENTS_PATH}/Maps`;
// APP COMPONENTS - LOADABLE
module.exports.LOADABLE_PATH = `${module.exports.COMPONENTS_PATH}/LoadableView`;

// AUTH SCREENS - LOGIN AND SIGNUP
module.exports.AUTH_PATH = `${module.exports.SCREENS_PATH}/Auth`;
module.exports.AUTH_CONSTANTS = `${module.exports.AUTH_PATH}/constants.ts`;

// APP SCREENS - LOGIN
module.exports.LOGIN_PATH = `${module.exports.AUTH_PATH}/screens/Login`;
module.exports.LOGIN = `${module.exports.LOGIN_PATH}/index.tsx`;
module.exports.LOGIN_STYLE = `${module.exports.LOGIN_PATH}/styles.ts`;
module.exports.LOGIN_I18N = `${module.exports.LOGIN_PATH}/i18n.ts`;
module.exports.LOGIN_TEST = `${module.exports.LOGIN_PATH}/index.test.js`;

// APP SCREENS - SIGN UP
module.exports.AUTH_PATH_SIGNUP = `${module.exports.AUTH_PATH}/screens/SignUp`;

// APP SCREENS - HOME
module.exports.HOME_PATH = `${module.exports.SCREENS_PATH}/Home`;
module.exports.HOME = `${module.exports.HOME_PATH}/index.tsx`;
module.exports.HOME_STYLES = `${module.exports.HOME_PATH}/styles.ts`;
module.exports.HOME_TRANSLATIIONS = `${module.exports.HOME_PATH}/i18n.ts`;

// APP SCREENS - ONBOARDING
module.exports.ONBOARDING_PATH = `${module.exports.SCREENS_PATH}/Onboarding`;

// APP SCREENS - GOOGLE MAPS
module.exports.GOOGLE_MAPS_PATH = `${module.exports.SCREENS_PATH}/MapView`;

// CONFIG
module.exports.PUSH_NOTIFICATIONS_CONFIG = `${module.exports.CONFIG_PATH}/pushNotifications.ts`;
module.exports.API_CONFIG = `${module.exports.CONFIG_PATH}/api.ts`;
module.exports.CONFIG = `${module.exports.CONFIG_PATH}/index.ts`;
module.exports.REACTOTRON_CONFIG = `${module.exports.CONFIG_PATH}/reactotron.ts`;
module.exports.I18N_CONFIG = `${module.exports.CONFIG_PATH}/i18n.ts`;
module.exports.FONTS_CONFIG = `${module.exports.CONFIG_PATH}/fonts.ts`;

// CONSTANTS
module.exports.PLATFORM_CONSTANTS = `${module.exports.CONSTANTS_PATH}/platform.ts`;
module.exports.COLORS_CONSTANTS = `${module.exports.CONSTANTS_PATH}/colors.ts`;
module.exports.FONTS_CONSTANTS = `${module.exports.CONSTANTS_PATH}/fonts.ts`;

// HOOKS
module.exports.REDUX_HOOKS = `${module.exports.HOOKS_PATH}/redux.ts`;

// INTERFACES
module.exports.AUTH_INTERFACES = `${module.exports.INTERFACES_PATH}/auth.ts`;
module.exports.GLOBAL_INTERFACES = `${module.exports.INTERFACES_PATH}/global.ts`;
module.exports.NAVIGATION_INTERFACES = `${module.exports.INTERFACES_PATH}/navigation.ts`;
module.exports.REACTOTRON_INTERFACES = `${module.exports.INTERFACES_PATH}/reactotron.ts`;
module.exports.REDUX_INTERFACES = `${module.exports.INTERFACES_PATH}/redux.ts`;

// REDUX
module.exports.REDUX_STORE = `${module.exports.REDUX_PATH}/store.ts`;
module.exports.REDUX_UTILS = `${module.exports.REDUX_PATH}/utils.ts`;
// REDUX - AUTH
module.exports.AUTH_REDUX_PATH = `${module.exports.REDUX_PATH}/auth`;
module.exports.AUTH_REDUX_ACTIONS = `${module.exports.AUTH_REDUX_PATH}/actions.ts`;
module.exports.AUTH_REDUX_INDEX = `${module.exports.AUTH_REDUX_PATH}/index.ts`;
module.exports.AUTH_REDUX_SLICE = `${module.exports.AUTH_REDUX_PATH}/slice.ts`;
// REDUX - MIDDLEWARES
module.exports.ANALYTICS_MIDDLEWARE = `${module.exports.REDUX_PATH}/middlewares/analytics.ts`;

// SERVICES
module.exports.AUTH_SERVICE = `${module.exports.SERVICES_PATH}/auth.ts`;
module.exports.ONBOARDING_SERVICE = `${module.exports.SERVICES_PATH}/onboarding.ts`;
