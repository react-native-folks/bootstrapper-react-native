module.exports = function createDotEnvFilesLocally() {
  let extraEnvContent = '';

  const baseDevelopEnvContent = `
# Fastlane vars
FIREBASE_APP_ID = "#{FIREBASE_APP_ID}"

# Fastlane iOS
INFO_PLIST_DIR = '#{this.projectName}/Info.plist'
PROJECT_FILE_DIR = '#{this.projectName}.xcodeproj'
WORKSPACE_NAME = '#{this.projectName}.xcworkspace'
BUNDLE_IDENTIFIER = "#{BUNDLE_IDENTIFIER}"
PROVISION_NAME_PROD = "#{projectName}-Dev"
APP_NAME = "#{projectName}(D)"
MATCH_TYPE = "development"
FIREBASE_APP_ID = "#{firebaseAppId}"
EXPORT_METHOD = "development"
SCHEME_NAME = 'develop'
IPA_NAME = '#{projectName}(D).ipa'

# Fastlane Android
FLAVOR = "Development"
BUILD_TYPE = "Release"
`;

  const baseStagingEnvContent = `
# Fastlane vars
FIREBASE_APP_ID = "#{FIREBASE_APP_ID}"

# Fastlane iOS
INFO_PLIST_DIR = '#{this.projectName}/Info.plist'
PROJECT_FILE_DIR = '#{this.projectName}.xcodeproj'
WORKSPACE_NAME = '#{this.projectName}.xcworkspace'
BUNDLE_IDENTIFIER = '#{BUNDLE_IDENTIFIER}}'
PROVISION_NAME_PROD = '#{projectName}-Staging'
APP_NAME = '#{projectName}(S)'
MATCH_TYPE = 'appstore'
EXPORT_METHOD = 'app-store'
SCHEME_NAME = 'staging'
IPA_NAME = '#{projectName}(S).ipa'

SKIP_SUBMISSION = true
ITC_USERNAME = '#{APPLE_ID_EMAIL}'
ITC_APPLE_ID = '#{APPLE_ID}'
ITC_TEAM_ID = '#{TEAM_ID}'
ITC_TEAM_NAME = '#{TEAM_NAME}'

# Fastlane Android
FLAVOR = "Staging"
BUILD_TYPE = "Release"
`;

  const baseProductionEnvContent = `
# Fastlane vars
FIREBASE_APP_ID = "#{FIREBASE_APP_ID}"

# Fastlane iOS
INFO_PLIST_DIR = '#{this.projectName}/Info.plist'
PROJECT_FILE_DIR = '#{this.projectName}.xcodeproj'
WORKSPACE_NAME = '#{this.projectName}.xcworkspace'
BUNDLE_IDENTIFIER = '#{BUNDLE_IDENTIFIER}'
PROVISION_NAME_PROD = '#{projectName}'
APP_NAME = '#{projectName}'
MATCH_TYPE = 'appstore'
EXPORT_METHOD = 'app-store'
SCHEME_NAME = 'production'
IPA_NAME = '#{projectName}.ipa'

SKIP_SUBMISSION = true
ITC_USERNAME = '#{APPLE_ID_EMAIL}'
ITC_APPLE_ID = '#{APPLE_ID}'
ITC_TEAM_ID = '#{TEAM_ID}'
ITC_TEAM_NAME = '#{TEAM_NAME}'

# Fastlane Android
FLAVOR = "Production"
BUILD_TYPE = "Release"
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
    `${this.projectName}/.env/develop.env`,
    baseDevelopEnvContent.concat(extraEnvContent)
  );
  this.fs.write(
    `${this.projectName}/.env/staging.env`,
    baseStagingEnvContent.concat(extraEnvContent)
  );
  this.fs.write(
    `${this.projectName}/.env/production.env`,
    baseProductionEnvContent.concat(extraEnvContent)
  );
};
