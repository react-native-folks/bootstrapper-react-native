const ora = require('ora');

// CORE FILES
const androidProjectSetup = require('./coreFiles/androidProjectSetup');
const appIcons = require('./coreFiles/appIcons');
const babelConfigSetup = require('./coreFiles/babelConfigSetup');
const baseFilesTemplate = require('./coreFiles/baseFilesTemplate');
const cleanTargetsFromPods = require('./coreFiles/cleanTargetsFromPods');
const createDotEnvFilesLocally = require('./coreFiles/createDotEnvFilesLocally');
const enableFullscreen = require('./coreFiles/tabletSetup');
const iosProjectSetup = require('./coreFiles/iosProjectSetup');
const packageJsonScripts = require('./coreFiles/packageJsonScripts');
const prettierrcConfigSetup = require('./coreFiles/prettierrcConfigSetup');
const splashScreenSetup = require('./coreFiles/splashScreenSetup');
const navigationSetup = require('./coreFiles/navigationSetup');
const testingSetup = require('./coreFiles/testingFilesSetup');

// FEATURES FILES
const crashlyticsFeatureFiles = require('./featuresFiles/crashlyticsFeatureFiles');
const disableLandscapeOrientation = require('./featuresFiles/disableLandscapeOrientation');
const firebaseAnalyticsFeatureFiles = require('./featuresFiles/firebaseAnalyticsFeatureFiles');
const firebaseCoreFeatureFiles = require('./featuresFiles/firebaseCoreFeatureFiles');
const firebasePerformanceSetup = require('./featuresFiles/firebasePerformanceSetup');
const loginAndSignUpFeatureFiles = require('./featuresFiles/loginAndSignUpFeatureFiles');
const onboardingFeatureFiles = require('./featuresFiles/onboardingFeatureFiles');
const stateManagementFeatureFiles = require('./featuresFiles/stateManagementFeatureFiles');
const pushNotificationsFeatureFiles = require('./featuresFiles/pushNotificationsFeatureFiles');
const pushNotificationsSetup = require('./featuresFiles/pushNotificationsSetup');
const addSocialsToProject = require('./featuresFiles/socialButtonsFeatureSetup');
const addGoogleMapsToProject = require('./featuresFiles/googleMapsFeatureSetup');
module.exports = function index() {
  const spinner = ora({
    spinner: 'bouncingBall',
    text: 'Creating project boilerplate'
  }).start();

  // --------------------    APP CORE FILES    ---------------------
  createDotEnvFilesLocally.bind(this)();
  packageJsonScripts.bind(this)();
  baseFilesTemplate.bind(this)();
  stateManagementFeatureFiles.bind(this)();
  testingSetup.bind(this)();
  navigationSetup.bind(this)();
  appIcons.bind(this)();
  babelConfigSetup.bind(this)();
  prettierrcConfigSetup.bind(this)();

  // ----------------    Android project configurationn    ----------------
  androidProjectSetup.bind(this)();

  // ----------------     iOS project configuration    ----------------
  iosProjectSetup.bind(this)();
  cleanTargetsFromPods.bind(this)();

  // ----------------    Disable Landscape orientiation    ----------------
  if (!this.features.landscape) {
    disableLandscapeOrientation.bind(this)();
  }

  // ----------------    Splash Screen    ----------------
  splashScreenSetup.bind(this)();

  // ----------------    Features: Login and SignUp    ----------------
  if (this.features.loginandsignup) {
    loginAndSignUpFeatureFiles.bind(this)();
  }

  // ----------------    Features: Onboarding    ----------------
  if (this.features.onboarding) {
    onboardingFeatureFiles.bind(this)();
  }

  // ----------------    Features: Social Buttons    ----------------
  if (this.features.socialloginbuttons) {
    addSocialsToProject.bind(this)();
  }

  // ----------------    Features: Firebase    ----------------
  if (this.features.hasFirebase) {
    firebaseCoreFeatureFiles.bind(this)();
    if (this.features.firebase) {
      crashlyticsFeatureFiles.bind(this)();
      firebaseAnalyticsFeatureFiles.bind(this)();
      firebasePerformanceSetup.bind(this)();
    }
    if (this.features.pushnotifications) {
      pushNotificationsFeatureFiles.bind(this)();
      pushNotificationsSetup.bind(this)();
    }
  }

  // ----------------    Features: Google Maps    ----------------
  if (this.features.googlemaps) {
    addGoogleMapsToProject.bind(this)();
  }

  // ---------------    Enables fullscreen on iPad    ----------------------------
  enableFullscreen.bind(this)();

  spinner.succeed('Boilerplate ready!');
};
