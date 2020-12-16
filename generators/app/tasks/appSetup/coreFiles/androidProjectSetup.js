function updateAppBuildGradle() {
  const buildGradleContent = this.fs.read(
    `${this.projectName}/android/app/build.gradle`
  );
  let updatedBuildGradleContent = buildGradleContent.replace(
    'apply plugin: "com.android.application"',
    'apply plugin: "com.android.application"\n\nproject.ext.envConfigFiles = [\n\tdevelopdebug: ".env/develop.env",\n\tdeveloprelease: ".env/develop.env",\n\tstagingdebug: ".env/staging.env",\n\tstagingrelease: ".env/staging.env",\n\tproductiondebug: ".env/production.env",\n\tproductionrelease: ".env/production.env"\n]\napply from: project(\':react-native-config\').projectDir.getPath() + "/dotenv.gradle"'
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
    'compileSdkVersion rootProject.ext.compileSdkVersion',
    'compileSdkVersion rootProject.ext.compileSdkVersion\n\tflavorDimensions "buildtype"'
  );
  updatedBuildGradleContent = updatedBuildGradleContent.replace(
    'targetSdkVersion rootProject.ext.targetSdkVersion',
    `targetSdkVersion rootProject.ext.targetSdkVersion\n\t\tresValue "string", "build_config_package", "com.${this.projectName.toLowerCase()}"\n\t\tmultiDexEnabled true`
  );
  if (this.features.socialloginbuttons) {
    updatedBuildGradleContent = updatedBuildGradleContent.replace(
      'multiDexEnabled true',
      'resValue "string", "FACEBOOK_APP_ID", project.env.get("FACEBOOK_APP_ID")\n\t\tmultiDexEnabled true'
    );
  }
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
}

function addRNGestureHandlerConfig() {
  const mainActivityContent = this.fs.read(
    `${this.projectName}/android/app/src/main/java/com/${this.projectName}/MainActivity.java`
  );
  let updatedMainActivityContent = mainActivityContent.replace(
    'import com.facebook.react.ReactActivity;',
    'import com.facebook.react.ReactActivity;\nimport com.facebook.react.ReactActivityDelegate;\nimport com.facebook.react.ReactRootView;\nimport com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;'
  );
  updatedMainActivityContent = updatedMainActivityContent.replace(
    `return "${this.projectName}";`,
    `return "${this.projectName}";\n\t}\n\n\t@Override\n\tprotected ReactActivityDelegate createReactActivityDelegate() {\n\t  return new ReactActivityDelegate(this, getMainComponentName()) {\n\t\t@Override\n\t\tprotected ReactRootView createRootView() {\n\t\t return new RNGestureHandlerEnabledRootView(MainActivity.this);\n\t\t}\n\t  };`
  );
  this.fs.write(
    `${this.projectName}/android/app/src/main/java/com/${this.projectName}/MainActivity.java`,
    updatedMainActivityContent
  );
}

function updateAppProguardRules() {
  const proguardRulesContent = this.fs.read(
    `${this.projectName}/android/app/proguard-rules.pro`
  );
  const updatedProguardRulesContent = proguardRulesContent.replace(
    '# Add any project specific keep options here:',
    `# Add any project specific keep options here:\n# Hermes\n-keep class com.facebook.hermes.unicode.** { *; }\n\n# react-native-config\n-keep class com.${this.projectName.toLowerCase()}.BuildConfig { *; }`
  );
  this.fs.write(
    `${this.projectName}/android/app/proguard-rules.pro`,
    updatedProguardRulesContent
  );
}

function disableR8ForReleases() {
  const gradleProperties = this.fs.read(
    `${this.projectName}/android/gradle.properties`
  );
  const updatedGradleProperties = gradleProperties.replace(
    'android.enableJetifier=true',
    'android.enableJetifier=true\nandroid.enableR8=false'
  );
  this.fs.write(
    `${this.projectName}/android/gradle.properties`,
    updatedGradleProperties
  );
}

module.exports = function androidProjectSetup() {
  updateAppBuildGradle.bind(this)();
  addRNGestureHandlerConfig.bind(this)();
  updateAppProguardRules.bind(this)();
  disableR8ForReleases.bind(this)();
};

/*
signingConfigs {
        debug {
            storeFile file('debug.keystore')
            storePassword 'android'
            keyAlias 'androiddebugkey'
            keyPassword 'android'
        }

        release {
            // For production keystore signing replace MY_APP by your project name and add the information on your "~/.gradle/gradle.properties" file.
            // The put the keystore on the "android/app". Its recomended add the file to .gitignore
            if (project.hasProperty('MY_APP_STORE_FILE')) {
                storeFile file(MY_APP_STORE_FILE)
                storePassword MY_APP_STORE_PASSWORD
                keyAlias MY_APP_UPLOAD_KEY_ALIAS
                keyPassword MY_APP_UPLOAD_KEY_PASSWORD
            } else {
                storeFile file('debug.keystore')
                storePassword 'android'
                keyAlias 'androiddebugkey'
                keyPassword 'android'
            }
        }
    }
*/
