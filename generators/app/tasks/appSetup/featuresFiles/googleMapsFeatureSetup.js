const { copyFile } = require('../utils');
const { MAPS_COMPONENT_PATH, GOOGLE_MAPS_PATH } = require('../files');

function addGoogleMapsToNativeProjects() {
  // Android
  // android build-gradle
  let androidGradle = this.fs.read(`${this.projectName}/android/build.gradle`);
  if (!androidGradle.includes('playServicesVersion')) {
    androidGradle = androidGradle.replace(
      'ext {',
      'ext {\n\t\tplayServicesVersion = "17.0.0"'
    );
  }
  this.fs.write(`${this.projectName}/android/build.gradle`, androidGradle);

  // Androd manifest
  let manifest = this.fs.read(
    `${this.projectName}/android/app/src/main/AndroidMAnifest.xml`
  );
  manifest = manifest.replace(
    '</application>',
    '\t<meta-data\n\t\t\t\tandroid:name="com.google.android.geo.API_KEY"\n\t\t\t\tandroid:value="@string/GOOGLE_MAPS_API_KEY"/>\n\t\t\t<uses-library android:name="org.apache.http.legacy" android:required="false"/>\n\t\t</application>'
  );
  this.fs.write(
    `${this.projectName}/android/app/src/main/AndroidMAnifest.xml`,
    manifest
  );

  // iOS
  let podfileContent = this.fs.read(`${this.projectName}/ios/Podfile`);
  podfileContent = podfileContent.replace(
    '# Enables Flipper.',
    "# React Native Maps dependencies\n\trn_maps_path = '../node_modules/react-native-maps'\n\tpod 'react-native-google-maps', :path => rn_maps_path\n\tpod 'GoogleMaps'\n\tpod 'Google-Maps-iOS-Utils'\n\n\t# Enables Flipper."
  );

  this.fs.write(`${this.projectName}/ios/Podfile`, podfileContent);

  let appDelegateContent = this.fs.read(
    `${this.projectName}/ios/${this.projectName}/AppDelegate.m`
  );
  if (!appDelegateContent.includes('ReactNativeConfig.h')) {
    appDelegateContent = appDelegateContent.replace(
      '#import <React/RCTRootView.h>',
      '#import <React/RCTRootView.h>\n#import "ReactNativeConfig.h"'
    );
  }
  appDelegateContent = appDelegateContent.replace(
    '#import <React/RCTRootView.h>',
    '#import <React/RCTRootView.h>\n#import <GoogleMaps/GoogleMaps.h>'
  );
  appDelegateContent = appDelegateContent.replace(
    'launchOptions\n{',
    'launchOptions\n{\n\t[GMSServices provideAPIKey: [ReactNativeConfig envFor:@"GOOGLE_MAPS_API_KEY"]];'
  );

  this.fs.write(
    `${this.projectName}/ios/${this.projectName}/AppDelegate.m`,
    appDelegateContent
  );
}

const FILES = [GOOGLE_MAPS_PATH, MAPS_COMPONENT_PATH];

function googleMapsFeatureFiles() {
  FILES.forEach(copyFile.bind(this));
}

module.exports = function addGoogleMapsToProject() {
  googleMapsFeatureFiles.bind(this)();
  addGoogleMapsToNativeProjects.bind(this)();
};
