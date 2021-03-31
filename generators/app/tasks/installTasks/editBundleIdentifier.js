const runCommand = require('../runCommand');

module.exports = function editBundleIdentifier() {
  return runCommand({
    command: [
      'npx',
      ['react-native-rename', this.projectName, '-b', this.bundleId],
      { cwd: `${process.cwd()}/${this.projectName}` }
    ],
    loadingMessage: 'Updating Bundle Identifier in both platforms',
    successMessage: 'Updating Bundle Identifier Success!',
    failureMessage: 'Updating Bundle Identifier Failure!',
    context: this.options
  }).catch(() => {});
};
