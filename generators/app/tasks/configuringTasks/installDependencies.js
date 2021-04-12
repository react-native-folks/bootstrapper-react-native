const runCommand = require('../runCommand');
const { getFixedDependencies } = require('./fixedDependencies');

const DEPENDENCIES = [
  '@react-native-async-storage/async-storage',
  '@reduxjs/toolkit',
  'apisauce',
  'cerealizr',
  'i18next',
  'react-native-flipper',
  'react-native-localize',
  'react-native-splash-screen',
  'react-hook-form',
  'reactotron-apisauce',
  'reactotron-react-native',
  'react-native-paper',
  'react-native-vector-icons',
  'react-native-keyboard-aware-scroll-view',
  'typescript'
];

const DEV_DEPENDENCIES = [
  '@react-native-community/eslint-config',
  '@testing-library/jest-native',
  '@testing-library/react-native',
  '@types/jest',
  '@types/react',
  '@types/react-native',
  '@types/react-test-renderer',
  '@types/react-native-vector-icons',
  'babel-eslint',
  'babel-plugin-import-glob',
  'babel-plugin-module-resolver',
  'detox',
  'eslint',
  'eslint-plugin-import',
  'husky',
  'jest-circus',
  'jest-environment-node',
  'jest-react-native',
  'jsdom-global',
  'jsdom',
  'prettier-eslint',
  'prettier',
  'react-native-mock-render',
  'react-native-testing-library'
];

function yarnInstall(projectName, deps, options, dev) {
  const yarnArgs = dev ? ['add', '--dev'].concat(deps) : ['add'].concat(deps);
  return runCommand({
    command: ['yarn', yarnArgs, { cwd: `${process.cwd()}/${projectName}` }],
    loadingMessage: `Fetching ${dev ? 'dev dependencies' : 'dependencies'}`,
    successMessage: `${dev ? 'Dev dependencies' : 'Dependencies'} ready!`,
    failureMessage: `${
      dev ? 'Dev dependencies' : 'Dependencies'
    } installation failed. Turn verbose mode on for detailed logging`,
    context: options
  });
}

module.exports = function installDependencies() {
  const fixedDependencies = getFixedDependencies.bind(this)();
  DEPENDENCIES.push(
    fixedDependencies.REACT_NATIVE_MASKED_VIEW,
    fixedDependencies.REACT_NAVIGATION_NATIVE,
    fixedDependencies.REACT_NATIVAGITION_STACK,
    fixedDependencies.REACT_NATIVE_CONFIG,
    fixedDependencies.REACT_NATIVE_GESTURE_HANDLER,
    fixedDependencies.REACT_NATIVE_REANIMATED,
    fixedDependencies.REACT_NATIVE_SAFE_AREA_CONTEXT,
    fixedDependencies.REACT_NATIVE_SCREENS
  );
  if (this.features.tabs) {
    DEPENDENCIES.push(fixedDependencies.REACT_NAVIGATION_TABS);
  }

  if (this.features.hasFirebase) {
    DEPENDENCIES.push(fixedDependencies.REACT_NATIVE_FIREBASE_APP);
    if (this.features.firebase) {
      DEPENDENCIES.push(fixedDependencies.REACT_NATIVE_FIREBASE_ANALYTICS);
      DEPENDENCIES.push(fixedDependencies.REACT_NATIVE_FIREBASE_CRASHLYTICS);
      DEPENDENCIES.push(fixedDependencies.REACT_NATIVE_FIREBASE_PERF);
    }
    if (this.features.pushnotifications) {
      DEPENDENCIES.push('react-native-push-notification');
      DEPENDENCIES.push(fixedDependencies.REACT_NATIVE_FIREBASE_MESSAGING);
      DEPENDENCIES.push('@react-native-community/push-notification-ios');
      DEV_DEPENDENCIES.push('@types/react-native-push-notification');
    }
  }

  if (this.features.camera) {
    DEPENDENCIES.push('@react-native-community/cameraroll');
    DEPENDENCIES.push('react-native-camera');
    DEPENDENCIES.push('react-native-video');
  }

  if (this.features.socialloginbuttons) {
    const { google, facebook, apple, twitter } = this.features.socialButtons;
    if (google) DEPENDENCIES.push('@react-native-community/google-signin');
    if (apple)
      DEPENDENCIES.push('@invertase/react-native-apple-authentication');
    if (facebook) {
      DEPENDENCIES.push('react-native-fbsdk');
      DEPENDENCIES.push('@types/react-native-fbsdk');
    }
    if (twitter) DEPENDENCIES.push('react-native-login-twitter');
  }

  if (this.features.googlemaps) {
    DEPENDENCIES.push('react-native-maps');
  }

  if (this.features.drawer) {
    DEPENDENCIES.push(fixedDependencies.REACT_NAVIGATION_DRAWER);
  }

  if (this.features.onboarding) {
    DEPENDENCIES.push('react-native-swiper');
  }

  if (this.features.statemanagement.recoil) {
    DEPENDENCIES.push('recoil');
  }

  if (this.features.statemanagement.redux) {
    DEPENDENCIES.push('redux');
    DEPENDENCIES.push('react-redux');
    DEPENDENCIES.push('reactotron-redux');
    DEV_DEPENDENCIES.push('@types/react-redux');
    DEV_DEPENDENCIES.push('redux-mock-store');
  }

  return yarnInstall(this.projectName, DEPENDENCIES, this.options)
    .then(() =>
      yarnInstall(
        this.projectName,
        DEV_DEPENDENCIES,
        this.options,
        true
      ).catch(() => {})
    )
    .catch(() => {});
};
