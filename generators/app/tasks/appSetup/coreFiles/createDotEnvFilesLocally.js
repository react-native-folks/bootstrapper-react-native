module.exports = function createDotEnvFilesLocally() {
  let extraEnvContent = '';

  const baseDevelopEnvContent = `# Fastlane vars
FIREBASE_APP_ID=[PUT_YOUR_APP_ID_HERE]

# Fastlane iOS
APP_NAME = "${this.projectName}(D)"
BUNDLE_IDENTIFIER = '${this.bundleId}.develop'
EXPORT_METHOD = "development"
INFO_PLIST_DIR = '${this.projectName}/Info.plist'
IPA_NAME = '${this.projectName}(D).ipa'
MATCH_TYPE = "development"
PROJECT_FILE_DIR = '${this.projectName}.xcodeproj'
PROVISION_NAME_PROD = "${this.projectName}-Dev"
SCHEME_NAME = 'develop'
WORKSPACE_NAME = '${this.projectName}.xcworkspace'

# Fastlane Android
SOME_ANDROID_VAR=XXXX
`;

  const baseStagingEnvContent = `# Fastlane vars
FIREBASE_APP_ID=[PUT_YOUR_APP_ID_HERE]

# Fastlane iOS
APP_NAME = '${this.projectName}(S)'
BUNDLE_IDENTIFIER = '${this.bundleId}.staging'
EXPORT_METHOD = 'app-store'
INFO_PLIST_DIR = '${this.projectName}/Info.plist'
IPA_NAME = '${this.projectName}(S).ipa'
MATCH_TYPE = 'appstore'
PROJECT_FILE_DIR = '${this.projectName}.xcodeproj'
PROVISION_NAME_PROD = '${this.projectName}-Staging'
SCHEME_NAME = 'staging'
WORKSPACE_NAME = '${this.projectName}.xcworkspace'

SKIP_SUBMISSION = true
ITC_USERNAME = '#{APPLE_ID_EMAIL}'
ITC_APPLE_ID = '#{APPLE_ID}'
ITC_TEAM_ID = '#{TEAM_ID}'
ITC_TEAM_NAME = '#{TEAM_NAME}'

# Fastlane Android
SOME_ANDROID_VAR=XXXX
`;

  const baseProductionEnvContent = `# Fastlane vars
FIREBASE_APP_ID=[PUT_YOUR_APP_ID_HERE]

# Fastlane iOS
APP_NAME = '${this.projectName}'
BUNDLE_IDENTIFIER = '${this.bundleId}'
EXPORT_METHOD = 'app-store'
INFO_PLIST_DIR = '${this.projectName}/Info.plist'
IPA_NAME = '${this.projectName}.ipa'
MATCH_TYPE = 'appstore'
PROJECT_FILE_DIR = '${this.projectName}.xcodeproj'
PROVISION_NAME_PROD = '${this.projectName}'
SCHEME_NAME = 'production'
WORKSPACE_NAME = '${this.projectName}.xcworkspace'

SKIP_SUBMISSION = true
ITC_USERNAME = '#{APPLE_ID_EMAIL}'
ITC_APPLE_ID = '#{APPLE_ID}'
ITC_TEAM_ID = '#{TEAM_ID}'
ITC_TEAM_NAME = '#{TEAM_NAME}'

# Fastlane Android
SOME_ANDROID_VAR=XXXX
PACKAGE_NAME = "myAppPackageName"
`;

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
