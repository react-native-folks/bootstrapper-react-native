const { copyFile, copyTemplateFile } = require('../utils');
const {
  AUTH_SERVICE,
  ONBOARDING_COMPONENTS_PATH,
  ONBOARDING_INDEX_PATH,
  ONBOARDING_TEST_PATH,
  ONBOARDING_I18N_PATH,
  ONBOARDING_SERVICE
} = require('../files');

const FILES = [
  ONBOARDING_COMPONENTS_PATH,
  ONBOARDING_TEST_PATH,
  ONBOARDING_I18N_PATH,
  ONBOARDING_SERVICE
];

const TEMPLATE_FILES = [ONBOARDING_INDEX_PATH];

module.exports = function onboardingFeatureFiles() {
  if (!this.features.loginandsignup) {
    TEMPLATE_FILES.push(AUTH_SERVICE);
  }
  TEMPLATE_FILES.forEach(copyTemplateFile.bind(this));
  FILES.forEach(copyFile.bind(this));
};
