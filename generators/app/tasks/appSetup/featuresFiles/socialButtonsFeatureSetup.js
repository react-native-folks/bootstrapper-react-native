const { copyFile } = require('../utils');
const { SOCIAL_BUTTONS } = require('../files');

function addSocialsToNativeProjects() {
  let iosInfoPlistContent = this.fs.read(
    `${this.projectName}/ios/${this.projectName}/Info.plist`
  );
  console.log(iosInfoPlistContent);
  iosInfoPlistContent = iosInfoPlistContent.replace(
    '<key>NSLocationWhenInUseUsageDescription</key>',
    `<key>CFBundleURLTypes</key>\r\n\t<array>\r\n\t\t<dict>\r\n\t\t<key>CFBundleURLSchemes</key>\r\n\t\t<array>\r\n\t\t\t<string>fb$(FACEBOOK_APP_ID)</string>\r\n\t\t</array>\r\n\t\t</dict>\r\n\t</array>\r\n\t<key>FacebookAppID</key>\r\n\t<string>$(FACEBOOK_APP_ID)</string>\r\n\t<key>FacebookDisplayName</key>\r\n\t<string>${this.projectName}</string>\r\n\t<key>LSApplicationQueriesSchemes</key>\r\n\t<array>\r\n\t\t<string>fbapi</string>\r\n\t\t<string>fb-messenger-api</string>\r\n\t\t<string>fbauth2</string>\r\n\t\t<string>fbshareextension</string>\r\n\t</array>\n\t<key>NSLocationWhenInUseUsageDescription</key>`
  );

  this.fs.write(
    `${this.projectName}/ios/${this.projectName}/Info.plist`,
    iosInfoPlistContent
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

const FILES = [SOCIAL_BUTTONS];

function socialButtonsFeatureFiles() {
  FILES.forEach(copyFile.bind(this));
}

module.exports = function addSocialsToProject() {
  socialButtonsFeatureFiles.bind(this)();
  addSocialsToNativeProjects.bind(this)();
};
