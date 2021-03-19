function updateAppBuildGradle() {
  const buildGradleContent = this.fs.read(
    `${this.projectName}/android/app/build.gradle`
  );
  let updatedBuildGradleContent = buildGradleContent.replace(
    'apply plugin: "com.android.application"',
    'apply from: "version.gradle"\napply plugin: "com.android.application"\n\nproject.ext.defaultEnvFile = ".envs/develop.env"\nproject.ext.envConfigFiles = [\n\tdevelop: ".envs/develop.env",\n\tstaging: ".envs/staging.env",\n\tproduction: ".envs/production.env"\n]\napply from: project(\':react-native-config\').projectDir.getPath() + "/dotenv.gradle"'
  );
  updatedBuildGradleContent = updatedBuildGradleContent.replace(
    'enableHermes: false,',
    'enableHermes: true,'
  );
  updatedBuildGradleContent = updatedBuildGradleContent.replace(
    'def enableProguardInReleaseBuilds = false',
    'def enableProguardInReleaseBuilds = true'
  );
  updatedBuildGradleContent = updatedBuildGradleContent.replace(
    'versionCode 1',
    'versionCode generateVersionCode()'
  );
  updatedBuildGradleContent = updatedBuildGradleContent.replace(
    'versionName "1.0"',
    'versionName generateVersionName()\n\t\tresValue "string", "app_name", project.hasProperty(\'appName\') ? project.property(\'appName\') : "@string/default_app_name"\n\t\tsetProperty("archivesBaseName", generateBuildFileName())'
  );
  updatedBuildGradleContent = updatedBuildGradleContent.replace(
    'compileSdkVersion rootProject.ext.compileSdkVersion',
    'compileSdkVersion rootProject.ext.compileSdkVersion\n\tflavorDimensions "buildtype"'
  );
  updatedBuildGradleContent = updatedBuildGradleContent.replace(
    'targetSdkVersion rootProject.ext.targetSdkVersion',
    `targetSdkVersion rootProject.ext.targetSdkVersion\n\t\tresValue "string", "build_config_package", "${this.bundleId}"\n\t\tmultiDexEnabled true`
  );
  updatedBuildGradleContent = updatedBuildGradleContent.replace(
    'minifyEnabled enableProguardInReleaseBuilds',
    'shrinkResources true\n\t\t\tminifyEnabled enableProguardInReleaseBuilds'
  );
  updatedBuildGradleContent = updatedBuildGradleContent.replace(
    '// applicationVariants are e.g. debug, release',
    "productFlavors {\n\t\tdevelop {\n\t\t\tdimension 'buildtype'\n\t\t\tapplicationIdSuffix \".develop\"\n\t\t}\n\t\tstaging {\n\t\t\tdimension 'buildtype'\n\t\t\tapplicationIdSuffix \".staging\"\n\t\t}\n\t\tproduction {\n\t\t\tdimension 'buildtype'\n\t\t}\n\t}\n// applicationVariants are e.g. debug, release"
  );
  updatedBuildGradleContent = updatedBuildGradleContent.replace(
    'if (enableHermes) {',
    "implementation 'androidx.appcompat:appcompat:1.3.0-alpha02'\n\timplementation 'androidx.multidex:multidex:2.0.1'\n\tif (enableHermes) {"
  );
  this.fs.write(
    `${this.projectName}/android/app/build.gradle`,
    updatedBuildGradleContent
  );

  const androidResValuesContent = this.fs.read(
    `${this.projectName}/android/app/src/main/res/values/strings.xml`
  );
  let updatedAndroidResValuesContent = androidResValuesContent.replace(
    /name="app_name">.+<\/string>/,
    `name="default_app_name">${this.title}</string>`
  );
  this.fs.write(
    `${this.projectName}/android/app/src/main/res/values/strings.xml`,
    updatedAndroidResValuesContent
  );
}

function addRNGestureHandlerConfig() {
  const mainActivityContentPath = this.destinationPath(
    this.projectName,
    'android/app/src/main/java',
    this.bundleId.replace(/\./g, '/'),
    'MainActivity.java'
  );

  const mainActivityContent = this.fs.read(mainActivityContentPath);
  let updatedMainActivityContent = mainActivityContent.replace(
    'import com.facebook.react.ReactActivity;',
    'import com.facebook.react.ReactActivity;\nimport com.facebook.react.ReactActivityDelegate;\nimport com.facebook.react.ReactRootView;\nimport com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;\nimport android.content.res.Configuration;'
  );
  updatedMainActivityContent = updatedMainActivityContent.replace(
    `return "${this.projectName}";\n\t}`,
    `return "${this.projectName}";\n\t}\n\n\t@Override\n\tprotected ReactActivityDelegate createReactActivityDelegate() {\n\t\treturn new ReactActivityDelegate(this, getMainComponentName()) {\n\t\t\t@Override\n\t\t\tprotected ReactRootView createRootView() {\n\t\t\t\treturn new RNGestureHandlerEnabledRootView(MainActivity.this);\n\t\t\t}\n\t\t};\n\t}`
  );

  updatedMainActivityContent = updatedMainActivityContent.replace(
    'public class MainActivity extends ReactActivity {',
    'public class MainActivity extends ReactActivity {\n\t@Override\n\tpublic void onConfigurationChanged(Configuration newConfig) {\n\t\tsuper.onConfigurationChanged(newConfig);\n\t\tgetReactInstanceManager().onConfigurationChanged(this, newConfig);\n\t}'
  );
  this.fs.write(mainActivityContentPath, updatedMainActivityContent);
}

function addReanimatedConfig() {
  const mainApplicationContentPath = this.destinationPath(
    this.projectName,
    'android/app/src/main/java',
    this.bundleId.replace(/\./g, '/'),
    'MainApplication.java'
  );

  const mainApplicationContent = this.fs.read(mainApplicationContentPath);
  let updatedmainApplicationContent = mainApplicationContent.replace(
    'import com.facebook.soloader.SoLoader;',
    'import com.facebook.soloader.SoLoader;\nimport com.facebook.react.bridge.JSIModulePackage;\n    import com.swmansion.reanimated.ReanimatedJSIModulePackage;'
  );
  updatedmainApplicationContent = updatedmainApplicationContent.replace(
    `return "index";\n\t}`,
    `return "index";\n\t}\n\n\t@Override\n\tprotected JSIModulePackage getJSIModulePackage() {\n\t\treturn new ReanimatedJSIModulePackage();\n\t}`
  );

  this.fs.write(mainApplicationContentPath, updatedmainApplicationContent);
}

function updateAppProguardRules() {
  const proguardRulesContent = this.fs.read(
    `${this.projectName}/android/app/proguard-rules.pro`
  );
  const updatedProguardRulesContent = proguardRulesContent.replace(
    '# Add any project specific keep options here:',
    `# Add any project specific keep options here:\n# Hermes\n-keep class com.facebook.hermes.unicode.** { *; }\n\n# react-native-config\n-keep class ${this.bundleId}.BuildConfig { *; }\n\n# react-native-reanimated 2\n-keep class com.facebook.react.turbomodule.** { *; }`
  );
  this.fs.write(
    `${this.projectName}/android/app/proguard-rules.pro`,
    updatedProguardRulesContent
  );
}

function updateGradleProperties() {
  const gradlePropertiesContent = this.fs.read(
    `${this.projectName}/android/gradle.properties`
  );
  let updatedGradlePropertiesContent = gradlePropertiesContent.replace(
    '# org.gradle.jvmargs=-Xmx2048m',
    'org.gradle.jvmargs=-Xmx2048m'
  );
  // Forced flipper sdk to version 74 since actually RN initialize projects on 54
  updatedGradlePropertiesContent = updatedGradlePropertiesContent.replace(
    new RegExp(/FLIPPER_VERSION=\d+\.\d+\.\d+/, 'g'),
    'FLIPPER_VERSION=0.74.0'
  );
  this.fs.write(
    `${this.projectName}/android/gradle.properties`,
    updatedGradlePropertiesContent
  );
}

module.exports = function androidProjectSetup() {
  updateAppBuildGradle.bind(this)();
  addRNGestureHandlerConfig.bind(this)();
  updateAppProguardRules.bind(this)();
  updateGradleProperties.bind(this)();
  addReanimatedConfig.bind(this)();
};
