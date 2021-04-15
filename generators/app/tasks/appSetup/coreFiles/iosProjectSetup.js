const createSchemes = require('./multipleEnvIos/createSchemes');

module.exports = function fixBundleIndentifier() {
  createSchemes.bind(this)();
};
