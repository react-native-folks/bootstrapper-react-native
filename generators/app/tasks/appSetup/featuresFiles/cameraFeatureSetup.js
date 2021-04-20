const { copyFile, copyTemplateFile } = require('../utils');
const { CAMERA_FLOW_PATH, MEDIA_FILE_SERVICE } = require('../files');

const FILES = [CAMERA_FLOW_PATH];

const TEMPLATE_FILES = [MEDIA_FILE_SERVICE];

function setAndroidPermissionsForCamera() {
  let androidManifestContent = this.fs.read(
    `${this.projectName}/android/app/src/main/AndroidManifest.xml`
  );
  androidManifestContent = androidManifestContent.replace(
    '<uses-permission android:name="android.permission.INTERNET" />',
    '<uses-permission android:name="android.permission.INTERNET" />\n\t\t<uses-permission android:name="android.permission.CAMERA" />\n\t\t<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />\n\t\t<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />\n\t\t<uses-permission android:name="android.permission.RECORD_AUDIO"/>'
  );

  androidManifestContent = androidManifestContent.replace(
    'android:label="@string/app_name"',
    'android:label="@string/app_name"\n\t\t\tandroid:requestLegacyExternalStorage="true"'
  );

  this.fs.write(
    `${this.projectName}/android/app/src/main/AndroidManifest.xml`,
    androidManifestContent
  );
}

function setIOSPermissionsForCamera() {
  let iosInfoPlistContent = this.fs.read(
    `${this.projectName}/ios/${this.projectName}/Info.plist`
  );
  iosInfoPlistContent = iosInfoPlistContent.replace(
    '<key>NSLocationWhenInUseUsageDescription</key>',
    '<key>NSCameraUsageDescription</key>\n<string>We need permissions to use your camera</string>\n<key>NSPhotoLibraryAddUsageDescription</key>\n<string>We need permissions to acces to your photo library</string>\n<key>NSPhotoLibraryUsageDescription</key>\n<string>We need permissions to acces to your photo library</string>\n<key>NSMicrophoneUsageDescription</key>\n<string>We need permissions to use your microphone for a better experience</string>\n<key>NSLocationWhenInUseUsageDescription</key>'
  );
  this.fs.write(
    `${this.projectName}/ios/${this.projectName}/Info.plist`,
    iosInfoPlistContent
  );
}

function setNativeStepsForCamera() {
  // Android
  let buildGradleContent = this.fs.read(
    `${this.projectName}/android/app/build.gradle`
  );
  buildGradleContent = buildGradleContent.replace(
    'targetSdkVersion rootProject.ext.targetSdkVersion',
    "targetSdkVersion rootProject.ext.targetSdkVersion\n\t\tmissingDimensionStrategy 'react-native-camera', 'general'"
  );

  this.fs.write(
    `${this.projectName}/android/app/build.gradle`,
    buildGradleContent
  );
}

module.exports = function cameraFeatureFiles() {
  setAndroidPermissionsForCamera.bind(this)();
  setIOSPermissionsForCamera.bind(this)();
  setNativeStepsForCamera.bind(this)();
  TEMPLATE_FILES.forEach(copyTemplateFile.bind(this));
  FILES.forEach(copyFile.bind(this));
};
