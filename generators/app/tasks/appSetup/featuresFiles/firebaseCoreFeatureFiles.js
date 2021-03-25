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
  this.platforms.android && addConfigToAndroidFiles.bind(this)();
  this.platforms.ios && addConfigToIosFiles.bind(this)();
};
