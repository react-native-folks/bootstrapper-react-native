module.exports = function createDotEnvFilesLocally() {
  let extraEnvContent = '';
  if (this.features.socialloginbuttons) {
    extraEnvContent = extraEnvContent.concat(
      '\nFACEBOOK_APP_ID=[PUT_YOUR_ID_HERE]'
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
