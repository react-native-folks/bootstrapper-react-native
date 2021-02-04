const { copyFile, copyTemplateFile, removeFile } = require('../utils');
const {
  MOCKS,
  TESTS_STORE,
  TESTS_UTILS,
  TESTS_RESPONSES_PATH,
  JEST_CONFIG_FILE,
  GOOGLE_SIGNIN_MOCK,
  TESTS_AUTH_ACTIONS_PATH,
  TESTS_AUTH_SLICE_PATH
} = require('../files');

const FILES = [MOCKS, TESTS_STORE, TESTS_UTILS, TESTS_RESPONSES_PATH];

const TEMPLATE_FILES = [JEST_CONFIG_FILE];

module.exports = function baseFilesTemplate() {
  if (this.features.statemanagement.redux) {
    TEMPLATE_FILES.push(TESTS_AUTH_ACTIONS_PATH);
    TEMPLATE_FILES.push(TESTS_AUTH_SLICE_PATH);
  }
  TEMPLATE_FILES.forEach(copyTemplateFile.bind(this));
  FILES.forEach(copyFile.bind(this));
  if (!this.features.socialButtons.google) {
    removeFile.bind(this)(GOOGLE_SIGNIN_MOCK);
  }
};
