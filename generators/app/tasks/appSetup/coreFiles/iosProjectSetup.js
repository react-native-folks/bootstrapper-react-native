const createSchemes = require('./multipleEnvIos/createSchemes');

module.exports = function fixBundleIndentifier() {
  // Enable hermes
  let podfileContent = this.fs.read(`${this.projectName}/ios/Podfile`);
  podfileContent = podfileContent.replace(
    ':hermes_enabled => false',
    ':hermes_enabled => true'
  );

  this.fs.write(`${this.projectName}/ios/Podfile`, podfileContent);

  createSchemes.bind(this)();
};
