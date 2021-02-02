const { copyFile, copyTemplateFile } = require('../utils');
const {
  // recoil
  RECOIL_AUTH_ATOMS_PATH,
  RECOIL_AUTH_SELECTORS_PATH,
  // redux
  REDUX_STORE,
  REDUX_UTILS,
  AUTH_REDUX_ACTIONS,
  AUTH_REDUX_INDEX,
  AUTH_REDUX_SLICE,
  REDUX_INTERFACES,
  REDUX_HOOKS
} = require('../files');

const FILES = [];
const TEMPLATE_FILES = [];

module.exports = function onboardingFeatureFiles() {
  if (this.features.statemanagement.redux) {
    FILES.push(REDUX_INTERFACES);
    FILES.push(AUTH_REDUX_INDEX);
    FILES.push(REDUX_UTILS);
    FILES.push(REDUX_HOOKS);
    TEMPLATE_FILES.push(REDUX_STORE);
    TEMPLATE_FILES.push(AUTH_REDUX_ACTIONS);
    TEMPLATE_FILES.push(AUTH_REDUX_SLICE);
  }
  if (this.features.statemanagement.recoil) {
    TEMPLATE_FILES.push(RECOIL_AUTH_ATOMS_PATH);
    TEMPLATE_FILES.push(RECOIL_AUTH_SELECTORS_PATH);
  }
  TEMPLATE_FILES.forEach(copyTemplateFile.bind(this));
  FILES.forEach(copyFile.bind(this));
};
