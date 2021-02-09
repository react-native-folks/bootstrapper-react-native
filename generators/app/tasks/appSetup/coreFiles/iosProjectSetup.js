const createSchemes = require('./multipleEnvIos/createSchemes');

module.exports = function fixBundleIndentifier() {
  const iosProjectContent = this.fs.read(
    `${this.projectName}/ios/${this.projectName}.xcodeproj/project.pbxproj`
  );
  const replaceRegex = new RegExp(`PRODUCT_NAME = ${this.projectName};`, 'g');
  const fixedProjectContent = iosProjectContent.replace(
    replaceRegex,
    `PRODUCT_NAME = ${this.projectName};\n\t\t\t\tTARGETED_DEVICE_FAMILY = "1,2";`
  );
  this.fs.write(
    `${this.projectName}/ios/${this.projectName}.xcodeproj/project.pbxproj`,
    fixedProjectContent
  );
  // Forced flipper sdk to version 74 since actually RN initialize projects on 54
  const podfileContent = this.fs.read(`${this.projectName}/ios/Podfile`);
  const fixedPodfileContent = podfileContent.replace(
    'use_flipper!',
    "use_flipper!({ 'Flipper' => '0.74.0' })"
  );
  this.fs.write(`${this.projectName}/ios/Podfile`, fixedPodfileContent);
  createSchemes.bind(this)();
};
