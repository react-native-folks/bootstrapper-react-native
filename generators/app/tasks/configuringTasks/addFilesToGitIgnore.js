const StackTrace = require('../../StackTrace');

module.exports = function addFilesToGitIgnore() {
  try {
    const gitIgnoreFile = this.fs.read(`${this.projectName}/.gitignore`);
    let updatedGitIgnoreFile = gitIgnoreFile.concat(
      '\n# History (vs code)\n.history\n'
    );
    updatedGitIgnoreFile = updatedGitIgnoreFile.concat('\n# Env\n/*.env\n');
    updatedGitIgnoreFile = updatedGitIgnoreFile.replace(
      'DerivedData',
      'DerivatedData\nConfig.xcconfig'
    );
    if (this.features.hasFirebase) {
      updatedGitIgnoreFile = updatedGitIgnoreFile.concat(
        '\n# Google Services files\nandroid/app/google-services/\ngoogle-services.json\nios/GoogleServices\nGoogleService-Info.plist\n'
      );
    }
    updatedGitIgnoreFile = updatedGitIgnoreFile.concat(
      '\n# Detox\nartifacts\n'
    );

    this.fs.write(`${this.projectName}/.gitignore`, updatedGitIgnoreFile);
  } catch (error) {
    StackTrace.addError(
      StackTrace.createError('addFilesToGitIgnore', 'replacing', '', [error])
    );
  }
};
