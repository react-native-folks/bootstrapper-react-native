const configureGoogleServicesFiles = require('./configureGoogleServicesFiles');
const { copyFile } = require('../utils');
const {
  SOCIAL_FACEBOOK_BUTTON,
  SOCIAL_APPLE_BUTTON,
  SOCIAL_GOOGLE_BUTTON,
  SOCIAL_TWITTER_BUTTON
} = require('../files');

function generateIosUrlScheme(scheme) {
  return `<dict>\r\n\t\t\t<key>CFBundleTypeRole</key>\r\n\t\t\t<string>Editor</string>\r\n\t\t\t<key>CFBundleURLSchemes</key>\r\n\t\t\t<array>\r\n\t\t\t\t<string>${scheme}</string>\r\n\t\t\t</array>\r\n\t\t</dict>`;
}

function addSocialsToNativeProjects() {
  if (
    this.features.socialButtons.facebook ||
    this.features.socialButtons.google
  ) {
    let iosInfoPlistContent = this.fs.read(
      `${this.projectName}/ios/${this.projectName}/Info.plist`
    );

    // iOS Basic additions for socials
    iosInfoPlistContent = iosInfoPlistContent.replace(
      '<key>NSLocationWhenInUseUsageDescription</key>',
      '<key>CFBundleURLTypes</key>\r\n\t<array>\r\n\t</array>\n\t<key>NSLocationWhenInUseUsageDescription</key>'
    );

    // Login with Google case
    if (this.features.socialButtons.google) {
      // iOS side
      iosInfoPlistContent = iosInfoPlistContent.replace(
        '<key>CFBundleURLTypes</key>\r\n\t<array>',
        `<key>CFBundleURLTypes</key>\r\n\t<array>\n\t${generateIosUrlScheme(
          '$(GOOGLE_REVERSE_ID)'
        )}`
      );

      // Android side
      let androidGradle = this.fs.read(
        `${this.projectName}/android/build.gradle`
      );

      androidGradle.replace(
        'ext {',
        'ext {\n\t\tgooglePlayServicesAuthVersion = "16.0.1"'
      );

      if (!androidGradle.includes('com.google.gms:google-services')) {
        androidAppGradle = androidGradle.replace(
          'dependencies {',
          "dependencies {\n\t\tclasspath 'com.google.gms:google-services:4.3.3'"
        );
      }

      this.fs.write(`${this.projectName}/android/build.gradle`, androidGradle);

      let androidAppGradle = this.fs.read(
        `${this.projectName}/android/app/build.gradle`
      );

      if (!androidAppGradle.includes('com.google.gms.google-services')) {
        androidAppGradle = androidAppGradle.replace(
          'apply plugin: "com.android.application"',
          'apply plugin: "com.android.application"\napply plugin: "com.google.gms.google-services"'
        );
        this.fs.write(
          `${this.projectName}/android/app/build.gradle`,
          androidAppGradle
        );
      }

      configureGoogleServicesFiles.bind(this)();
    }

    // Login with Facebook case
    if (this.features.socialButtons.facebook) {
      iosInfoPlistContent = iosInfoPlistContent.replace(
        '<key>CFBundleURLTypes</key>\r\n\t<array>',
        `<key>CFBundleURLTypes</key>\r\n\t<array>\n\t${generateIosUrlScheme(
          'fb$(FACEBOOK_APP_ID)'
        )}`
      );

      iosInfoPlistContent = iosInfoPlistContent.replace(
        '<key>NSLocationWhenInUseUsageDescription</key>',
        `<key>FacebookAppID</key>\n\t<string>$(FACEBOOK_APP_ID)</string>\n\t<key>${this.projectName}</key>\n\t<string>MyGreatAppTesting</string>\n\t<key>NSLocationWhenInUseUsageDescription</key>`
      );

      let androidGradle = this.fs.read(
        `${this.projectName}/android/build.gradle`
      );

      androidGradle = androidGradle.replace(
        'multiDexEnabled true',
        'resValue "string", "FACEBOOK_APP_ID", project.env.get("FACEBOOK_APP_ID")\n\t\tmultiDexEnabled true'
      );

      this.fs.write(
        `${this.projectName}/android/app/build.gradle`,
        androidGradle
      );

      let androidManifestContent = this.fs.read(
        `${this.projectName}/android/app/src/main/AndroidManifest.xml`
      );

      androidManifestContent = androidManifestContent.replace(
        '</application>',
        '\t<meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/FACEBOOK_APP_ID"/>\n\t\t</application>'
      );

      this.fs.write(
        `${this.projectName}/android/app/src/main/AndroidManifest.xml`,
        androidManifestContent
      );
    }

    // Login with Twitter case
    if (this.features.socialButtons.twitter) {
      const appDelegateContent = this.fs.read(
        `${this.projectName}/ios/${this.projectName}/AppDelegate.m`
      );
      let updatedAppDelegateContent = appDelegateContent.replace(
        '#import <React/RCTRootView.h>',
        '#import <React/RCTRootView.h>\n#import <TwitterKit/TWTRKit.h>'
      );
      updatedAppDelegateContent = updatedAppDelegateContent.replace(
        'return YES;',
        'return YES;\n}\n\n- (BOOL)application:(UIApplication *)app openURL:(NSURL *)url options:(NSDictionary<NSString *,id> *)options {\n\treturn [[Twitter sharedInstance] application:app openURL:url options:options];'
      );
      this.fs.write(
        `${this.projectName}/ios/${this.projectName}/AppDelegate.m`,
        updatedAppDelegateContent
      );

      iosInfoPlistContent = iosInfoPlistContent.replace(
        '<key>CFBundleURLTypes</key>\r\n\t<array>',
        `<key>CFBundleURLTypes</key>\r\n\t<array>\n\t${generateIosUrlScheme(
          'twitterkit-$(TWITTER_KEY)'
        )}`
      );
      iosInfoPlistContent = iosInfoPlistContent.replace(
        '<key>NSLocationWhenInUseUsageDescription</key>',
        '<key>LSApplicationQueriesSchemes</key>\n\t<array>\n\t\t<string>twitter</string>\n\t\t<string>twitterauth</string>\n\t</array>\n\t<key>NSLocationWhenInUseUsageDescription</key>'
      );
    }
    // Finish with writting ios and android files
    this.fs.write(
      `${this.projectName}/ios/${this.projectName}/Info.plist`,
      iosInfoPlistContent
    );
  }
}

const FILES = [];

function socialButtonsFeatureFiles() {
  const { facebook, apple, google, twitter } = this.features.socialButtons;
  if (twitter) FILES.push(SOCIAL_TWITTER_BUTTON);
  if (facebook) FILES.push(SOCIAL_FACEBOOK_BUTTON);
  if (apple) FILES.push(SOCIAL_APPLE_BUTTON);
  if (google) FILES.push(SOCIAL_GOOGLE_BUTTON);
  FILES.forEach(copyFile.bind(this));
}

module.exports = function addSocialsToProject() {
  socialButtonsFeatureFiles.bind(this)();
  addSocialsToNativeProjects.bind(this)();
};
