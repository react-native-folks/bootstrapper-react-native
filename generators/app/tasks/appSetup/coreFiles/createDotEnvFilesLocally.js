module.exports = function createDotEnvFilesLocally() {
  let extraEnvContent = '';
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

  this.fs.write(
    `${this.projectName}/.dev.env`,
    'EMPTY_VARIABLE=DEVELOPMENT'.concat(extraEnvContent)
  );
  this.fs.write(
    `${this.projectName}/.stage.env`,
    'EMPTY_VARIABLE=STAGE'.concat(extraEnvContent)
  );
  this.fs.write(
    `${this.projectName}/.production.env`,
    'EMPTY_VARIABLE=PRODUCTION'.concat(extraEnvContent)
  );
};
