module.exports = function createDotEnvFilesLocally() {
  let extraEnvContent = '';

  const baseDevelopEnvContent = `##### Fastlane vars #####
APP_ID = '${this.bundleId}.develop'
APP_NAME = '${this.projectName}'
FIREBASE_GROUPS="develop"
FIREBASE_IOS_APP_ID="1:500596129221:ios:fbcf4309ede028d1ccdfac"
FIREBASE_ANDROID_APP_ID="1:500596129221:android:2268780c70b8078accdfac"
APPLE_ID="user@mahisoft.com"
APPLE_TEAM_ID="92KJ98262N"
APP_STORE_CONNECT_TEAM="117822377"
CERTIFICATES_GIT_URL="git@github.com:xxx/xxxxxxxxxxx.git"
CERTIFICATES_GIT_BRANCH="master"
BUILD_CONFIGURATION="Develop"
SCHEME="develop"

##### Other vars #####`;

  const baseStagingEnvContent = `##### Fastlane vars #####
APP_ID = '${this.bundleId}.staging'
APP_NAME = '${this.projectName}'
FIREBASE_GROUPS="develop"
FIREBASE_IOS_APP_ID="1:500596129221:ios:xxxxxxxxxxxxxxxxx"
FIREBASE_ANDROID_APP_ID="1:500596129221:android:xxxxxxxxxxxxxxxxx"
APPLE_ID="user@mahisoft.com"
APPLE_TEAM_ID="92KJ98262N"
APP_STORE_CONNECT_TEAM="117822377"
CERTIFICATES_GIT_URL="git@github.com:xxx/xxxxxxxxxxx.git"
CERTIFICATES_GIT_BRANCH="master"
BUILD_CONFIGURATION="Staging"
SCHEME="staging"

##### Other vars #####`;

  const baseProductionEnvContent = `##### Fastlane vars #####
APP_ID = '${this.bundleId}'
APP_NAME = '${this.projectName}'
FIREBASE_GROUPS="develop"
FIREBASE_IOS_APP_ID="1:500596129221:ios:xxxxxxxxxxxxxxxxx"
FIREBASE_ANDROID_APP_ID="1:500596129221:android:xxxxxxxxxxxxxxxxx"
APPLE_ID="user@mahisoft.com"
APPLE_TEAM_ID="92KJ98262N"
APP_STORE_CONNECT_TEAM="117822377"
CERTIFICATES_GIT_URL="git@github.com:xxx/xxxxxxxxxxx.git"
CERTIFICATES_GIT_BRANCH="master"
BUILD_CONFIGURATION="Production"
SCHEME="production"
FASTLANE_APPLE_APPLICATION_SPECIFIC_PASSWORD="xxx-xxx-xxx-xxx"

##### Other vars #####`;

  if (this.features.socialButtons.facebook) {
    extraEnvContent = extraEnvContent.concat(
      '\nFACEBOOK_APP_ID=[PUT_YOUR_ID_HERE]'
    );
  }

  if (this.features.socialButtons.twitter) {
    extraEnvContent = extraEnvContent.concat(
      '\nTWITTER_KEY=[PUT_YOUR_KEY_HERE]\nTWITTER_SECRET_KEY=[PUT_YOUR_SECRET_KEY_HERE]'
    );
  }

  if (this.features.socialButtons.google) {
    extraEnvContent = extraEnvContent.concat(
      '\nGOOGLE_REVERSE_ID=[PUT_YOUR_REVERSE_ID_HERE]'
    );
  }

  if (this.features.googlemaps) {
    extraEnvContent = extraEnvContent.concat(
      '\nGOOGLE_MAPS_API_KEY=[PUT_YOUR_REVERSE_ID_HERE]'
    );
  }

  this.fs.write(
    `${this.projectName}/.envs/develop.env`,
    baseDevelopEnvContent.concat(extraEnvContent)
  );
  this.fs.write(
    `${this.projectName}/.envs/staging.env`,
    baseStagingEnvContent.concat(extraEnvContent)
  );
  this.fs.write(
    `${this.projectName}/.envs/production.env`,
    baseProductionEnvContent.concat(extraEnvContent)
  );
};
