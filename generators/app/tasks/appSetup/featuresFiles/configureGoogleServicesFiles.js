function configureGoogleServices() {
  const googleServicesAndroidContent = this.fs.read(
    this.templatePath('googleServicesConfig', 'google-services.json')
  );
  const googleServiceIOSContent = this.fs.read(
    this.templatePath('googleServicesConfig', 'GoogleService-Info.plist')
  );
  ['develop', 'stage', 'production'].forEach(env => {
    const isProd = env === 'production';
    this.fs.write(
      `${this.projectName}/android/app/google-services/google-services-${env}.json`,
      googleServicesAndroidContent.replace(
        'com.kamino',
        `com.${this.projectName.toLowerCase()}${isProd ? '' : `.${env}`}`
      )
    );
    const capitalizedEnv = env.charAt(0).toUpperCase() + env.substring(1);
    this.fs.write(
      `${this.projectName}/ios/GoogleServices/GoogleService${capitalizedEnv}-Info.plist`,
      googleServiceIOSContent.replace(
        'com.kamino',
        `com.${this.projectName}${isProd ? '' : `.${env}`}`
      )
    );
  });
}

function copyFirebaseFilesScript() {
  const firebaseFilesScriptContent = this.fs.read(
    this.templatePath('googleServicesConfig', 'firebaseFilesScript.sh')
  );
  this.fs.write(
    `${this.projectName}/firebaseFilesScript.sh`,
    firebaseFilesScriptContent
  );
}

module.exports = function configureGoogleServicesFiles() {
  configureGoogleServices.bind(this)();
  copyFirebaseFilesScript.bind(this)();
};
