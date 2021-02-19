const runCommand = require('../runCommand');

const DEPENDENCIES = [
  '@react-native-async-storage/async-storage',
  '@react-native-community/masked-view',
  '@react-navigation/native',
  '@react-navigation/stack',
  '@reduxjs/toolkit',
  'apisauce',
  'cerealizr',
  'i18next',
  'react-native-config',
  'react-native-flipper',
  'react-native-gesture-handler',
  'react-native-localize',
  'react-native-reanimated',
  'react-native-safe-area-context',
  'react-native-screens',
  'react-native-splash-screen',
  'react-hook-form',
  'reactotron-apisauce',
  'reactotron-react-native',
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
  if (this.features.loginandsignup) {
    DEPENDENCIES.push('react-native-keyboard-spacer');
  }
  if (this.features.tabs) {
    DEPENDENCIES.push('@react-navigation/bottom-tabs');
  }

  if (this.features.hasFirebase) {
    DEPENDENCIES.push('@react-native-firebase/app');
    if (this.features.firebase) {
      DEPENDENCIES.push('@react-native-firebase/crashlytics');
      DEPENDENCIES.push('@react-native-firebase/analytics');
      DEPENDENCIES.push('@react-native-firebase/perf');
    }
    if (this.features.pushnotifications) {
      DEPENDENCIES.push('react-native-push-notification');
      DEPENDENCIES.push('@react-native-firebase/messaging');
      DEPENDENCIES.push('@react-native-community/push-notification-ios');
      DEV_DEPENDENCIES.push('@types/react-native-push-notification');
    }
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
    DEPENDENCIES.push('@react-navigation/drawer');
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
      yarnInstall(this.projectName, DEV_DEPENDENCIES, this.options, true)
    )
    .catch(() => {
      process.exit(1);
    });
};
