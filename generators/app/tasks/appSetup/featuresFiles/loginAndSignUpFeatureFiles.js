const { copyFile, copyTemplateFile } = require('../utils');
const {
  AUTH_INTERFACES,
  AUTH_PATH_SIGNUP,
  LOGIN_STYLE,
  LOGIN_I18N,
  LOGIN_TEST,
  LOGIN,
  AUTH_SERVICE,
  AUTH_CONSTANTS
} = require('../files');

const FILES = [
  AUTH_CONSTANTS,
  AUTH_INTERFACES,
  AUTH_PATH_SIGNUP,
  LOGIN_STYLE,
  LOGIN_I18N
];

const TEMPLATE_FILES = [AUTH_SERVICE, LOGIN, LOGIN_TEST];

module.exports = function loginAndSignUpFeatureFiles() {
  TEMPLATE_FILES.forEach(copyTemplateFile.bind(this));
  FILES.forEach(copyFile.bind(this));
};
