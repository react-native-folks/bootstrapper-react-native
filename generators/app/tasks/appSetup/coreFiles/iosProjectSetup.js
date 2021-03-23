const createSchemes = require('./multipleEnvIos/createSchemes');

module.exports = function fixBundleIndentifier() {
  // Forced flipper sdk to version 74 since actually RN initialize projects on 54
  const podfileContent = this.fs.read(`${this.projectName}/ios/Podfile`);
  const fixedPodfileContent = podfileContent.replace(
    'use_flipper!',
    "use_flipper!({ 'Flipper-Folly' => '~> 2.2.0' })"
  );
  this.fs.write(`${this.projectName}/ios/Podfile`, fixedPodfileContent);
  createSchemes.bind(this)();
};
