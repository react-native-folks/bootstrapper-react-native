const { copyFile } = require('../utils');
const {
  SOCIAL_FACEBOOK_BUTTON,
  SOCIAL_APPLE_BUTTON,
  SOCIAL_GOOGLE_BUTTON
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
          'com.googleusercontent.apps.310288528932-nkvfhdujierf2peli90lnao5gr2kaqoi'
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
        androidGradle.replace(
          'dependencies {',
          "dependencies {\n\t\tclasspath 'com.google.gms:google-services:4.3.3'"
        );
      }

      this.fs.write(`${this.projectName}/android/build.gradle`, androidGradle);

      let androidAppGradle = this.fs.read(
        `${this.projectName}/android/app/build.gradle`
      );

      if (!androidAppGradle.includes('com.google.gms.google-services')) {
        androidAppGradle.replace(
          'apply plugin: "com.android.application"',
          'apply plugin: "com.android.application"\napply plugin: "com.google.gms.google-services"'
        );
        this.fs.write(
          `${this.projectName}/android/app/build.gradle`,
          androidAppGradle
        );
      }
    }

    // Login with Facebook case
    if (this.features.socialButtons.facebook) {
      iosInfoPlistContent = iosInfoPlistContent.replace(
        '<key>CFBundleURLTypes</key>\r\n\t<array>',
        `<key>CFBundleURLTypes</key>\r\n\t<array>\n\t${generateIosUrlScheme(
          'fb$(FACEBOOK_APP_ID)'
        )}`
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

    // Finish with writting ios and android files
    this.fs.write(
      `${this.projectName}/ios/${this.projectName}/Info.plist`,
      iosInfoPlistContent
    );
  }
}

const FILES = [];

function socialButtonsFeatureFiles() {
  const { facebook, apple, google } = this.features.socialButtons;
  if (facebook) FILES.push(SOCIAL_FACEBOOK_BUTTON);
  if (apple) FILES.push(SOCIAL_APPLE_BUTTON);
  if (google) FILES.push(SOCIAL_GOOGLE_BUTTON);
  FILES.forEach(copyFile.bind(this));
}

module.exports = function addSocialsToProject() {
  socialButtonsFeatureFiles.bind(this)();
  addSocialsToNativeProjects.bind(this)();
};
