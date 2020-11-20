const schemeBase = require('./schemeBase');

module.exports = function createSchemes() {
  const commonPath = schemeName =>
    `${this.projectName}/ios/${this.projectName}.xcodeproj/xcshareddata/xcschemes/${schemeName}.xcscheme`;
  this.fs.write(commonPath('develop'), schemeBase.bind(this)('develop', 'Debug'));
  this.fs.write(commonPath('staging'), schemeBase.bind(this)('staging', 'Staging'));
  this.fs.write(commonPath('production'), schemeBase.bind(this)('production', 'Production'));
  this.fs.delete(commonPath(this.projectName));
  this.fs.delete(commonPath(`${this.projectName}-tvOS`));
};
