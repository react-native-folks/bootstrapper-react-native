const {
  copyFile,
  copyTemplateFile,
  copyFileFromDiferentLocation,
  removeFile
} = require('../utils');
const {
  MOCKS,
  TESTS_STORE,
  TESTS_UTILS,
  TESTS_RESPONSES_PATH,
  JEST_CONFIG_FILE,
  GOOGLE_SIGNIN_MOCK,
  TESTS_AUTH_ACTIONS_PATH,
  TESTS_AUTH_SLICE_PATH,
  DETOX_FILE,
  ANDROID_SECURITY_NETWORK_FILE,
  E2E_CONFIG_FILE,
  E2E_ENVIRONMENT_FILE
} = require('../files');

function setupAndroidFilesForDetox() {
  // Manifest changes
  const androidManifestValuesContent = this.fs.read(
    `${this.projectName}/android/app/src/main/AndroidManifest.xml`
  );
  let updatedAndroidManifestValuesContent = androidManifestValuesContent.replace(
    'android:label="@string/app_name"',
    'android:label="@string/app_name"\n\t\t\tandroid:networkSecurityConfig="@xml/network_security_config"'
  );
  this.fs.write(
    `${this.projectName}/android/app/src/main/AndroidManifest.xml`,
    updatedAndroidManifestValuesContent
  );

  // App Gradle Changes
  const appGradleContent = this.fs.read(
    `${this.projectName}/android/app/build.gradle`
  );
  let updatedAppGradleContent = appGradleContent.replace(
    'targetSdkVersion rootProject.ext.targetSdkVersion',
    'targetSdkVersion rootProject.ext.targetSdkVersion\n\t\ttestBuildType System.getProperty("testBuildType", "release")\n\t\ttestInstrumentationRunner "androidx.test.runner.AndroidJUnitRunner"'
  );
  updatedAppGradleContent = updatedAppGradleContent.replace(
    'proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"',
    'proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"\n\t\t\tproguardFile "${rootProject.projectDir}/../node_modules/detox/android/detox/proguard-rules-app.pro"'
  );
  updatedAppGradleContent = updatedAppGradleContent.replace(
    'if (enableHermes) {',
    "androidTestImplementation('com.wix:detox:+') { transitive = true }\n\tandroidTestImplementation 'junit:junit:4.13'\n\tif (enableHermes) {"
  );
  this.fs.write(
    `${this.projectName}/android/app/build.gradle`,
    updatedAppGradleContent
  );
  // Project Gradle Changes
  const projectGradle = this.fs.read(
    `${this.projectName}/android/build.gradle`
  );
  const targetReg = new RegExp(/targetSdkVersion = \d\d/, 'g');
  let updatedProjectGradle = projectGradle.replace(
    targetReg,
    `${
      projectGradle.match(targetReg)[0] ?? 'targetSdkVersion = 29'
    }\n\t\tkotlinVersion = "1.4.21"`
  );
  // Detox need to force minSDK to 18 instead of 16 that is the react native default
  const minSdkReg = new RegExp(/minSdkVersion = \d\d/, 'g');
  updatedProjectGradle = updatedProjectGradle.replace(
    minSdkReg,
    'minSdkVersion = 18'
  );

  updatedProjectGradle = updatedProjectGradle.replace(
    '// NOTE: Do not place your application dependencies here; they belong',
    'classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlinVersion"\n\t\t// NOTE: Do not place your application dependencies here; they belong'
  );
  updatedProjectGradle = updatedProjectGradle.replace(
    "maven { url 'https://www.jitpack.io' }",
    'maven { url \'https://www.jitpack.io\' }\n\t\tmaven { url "$rootDir/../node_modules/detox/Detox-android" }'
  );
  this.fs.write(
    `${this.projectName}/android/build.gradle`,
    updatedProjectGradle
  );
}

function updateDetoxFilesWithProjectProperties() {
  // copy and modify testFile into android package path
  copyFileFromDiferentLocation.bind(this)(
    `android/app/src/androidTest/java/com/DetoxTest.java`,
    `android/app/src/androidTest/java/${this.bundleId
      .replace(/\./g, '/')
      .toLowerCase()}/DetoxTest.java`
  );
  const detoxTestJavaContent = this.fs.read(
    `${
      this.projectName
    }/android/app/src/androidTest/java/${this.bundleId
      .replace(/\./g, '/')
      .toLowerCase()}/DetoxTest.java`
  );
  let updatedDetoxTestJavaContent = detoxTestJavaContent.replace(
    new RegExp(/\[APP_ID\]/, 'g'),
    `${this.bundleId.toLowerCase()}`
  );
  this.fs.write(
    `${
      this.projectName
    }/android/app/src/androidTest/java/${this.bundleId
      .replace(/\./g, '/')
      .toLowerCase()}/DetoxTest.java`,
    updatedDetoxTestJavaContent
  );
}

const FILES = [
  MOCKS,
  TESTS_STORE,
  TESTS_UTILS,
  TESTS_RESPONSES_PATH,
  ANDROID_SECURITY_NETWORK_FILE,
  E2E_CONFIG_FILE,
  E2E_ENVIRONMENT_FILE
];

const TEMPLATE_FILES = [JEST_CONFIG_FILE, DETOX_FILE];

module.exports = function baseFilesTemplate() {
  setupAndroidFilesForDetox.bind(this)();
  if (this.features.statemanagement.redux) {
    TEMPLATE_FILES.push(TESTS_AUTH_ACTIONS_PATH);
    TEMPLATE_FILES.push(TESTS_AUTH_SLICE_PATH);
  }
  TEMPLATE_FILES.forEach(copyTemplateFile.bind(this));
  FILES.forEach(copyFile.bind(this));
  if (!this.features.socialButtons.google) {
    removeFile.bind(this)(GOOGLE_SIGNIN_MOCK);
  }
  updateDetoxFilesWithProjectProperties.bind(this)();
};
