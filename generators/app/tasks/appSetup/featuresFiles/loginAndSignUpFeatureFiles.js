const { copyFile, copyTemplateFile } = require('../utils');
const {
  AUTH_INTERFACES,
  AUTH_PATH_SIGNUP,
  LOGIN_STYLE,
  LOGIN_I18N,
  LOGIN_TEST,
  LOGIN,
  AUTH_SERVICE,
  TESTS_AUTH_PATH,
  TESTS_UTILS
} = require('../files');

const FILES = [
  AUTH_INTERFACES,
  AUTH_PATH_SIGNUP,
  LOGIN_STYLE,
  LOGIN_I18N,
  LOGIN_TEST,
  TESTS_AUTH_PATH,
  TESTS_UTILS
];

const TEMPLATE_FILES = [AUTH_SERVICE, LOGIN];

module.exports = function loginAndSignUpFeatureFiles() {
  TEMPLATE_FILES.forEach(copyTemplateFile.bind(this));
  FILES.forEach(copyFile.bind(this));
};
