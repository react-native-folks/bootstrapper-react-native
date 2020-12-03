const configureGoogleServicesFiles = require('./configureGoogleServicesFiles.js');

function addConfigToAndroidFiles() {
  let buildGradleContent = this.fs.read(
    `${this.projectName}/android/build.gradle`
  );
  buildGradleContent = buildGradleContent.replace(
    '// NOTE: Do not place your application dependencies here; they belong',
    "classpath 'com.google.gms:google-services:4.3.3'\n\t\t// NOTE: Do not place your application dependencies here; they belong"
  );
  this.fs.write(`${this.projectName}/android/build.gradle`, buildGradleContent);

  let appBuildGradleContent = this.fs.read(
    `${this.projectName}/android/app/build.gradle`
  );
  appBuildGradleContent = appBuildGradleContent.replace(
    'apply plugin: "com.android.application"',
    'apply plugin: "com.android.application"\napply plugin: \'com.google.gms.google-services\''
  );
  appBuildGradleContent = appBuildGradleContent.replace(
    'apply from: file("../../node_modules/@react-native-community/cli-platform-android/native_modules.gradle"); applyNativeModulesAppBuildGradle(project)',
    'task setFirebaseFiles() {\n\tif (getGradle().startParameter.taskRequests.size()) {\n\t\texec {\n\t\t\tdef buildArgs = getGradle().startParameter.taskRequests[0].getArgs()\n\t\t\texecutable \'../../firebaseFilesScript.sh\'\n\t\t\tif (buildArgs[1] != null) {\n\t\t\t\targs(buildArgs[1].toString(), "android")\n\t\t\t} else { \n\t\t\t\targs(buildArgs[0].toString(), "android")\n\t\t\t}\n\t\t}\n\t}\n}\n\nbuild.dependsOn setFirebaseFiles\n\napply from: file("../../node_modules/@react-native-community/cli-platform-android/native_modules.gradle"); applyNativeModulesAppBuildGradle(project)'
  );
  this.fs.write(
    `${this.projectName}/android/app/build.gradle`,
    appBuildGradleContent
  );
}

function addConfigToIosFiles() {
  let AppDelegateContent = this.fs.read(
    `${this.projectName}/ios/${this.projectName}/AppDelegate.m`
  );
  AppDelegateContent = AppDelegateContent.replace(
    '#import "AppDelegate.h"',
    '#import "AppDelegate.h"\n#import <Firebase.h>'
  );
  AppDelegateContent = AppDelegateContent.replace(
    'didFinishLaunchingWithOptions:(NSDictionary *)launchOptions\n{',
    'didFinishLaunchingWithOptions:(NSDictionary *)launchOptions\n{\n\t[FIRApp configure];'
  );
  this.fs.write(
    `${this.projectName}/ios/${this.projectName}/AppDelegate.m`,
    AppDelegateContent
  );
}

module.exports = function firebaseCoreFeatureFiles() {
  configureGoogleServicesFiles.bind(this)();
  addConfigToAndroidFiles.bind(this)();
  addConfigToIosFiles.bind(this)();
};
