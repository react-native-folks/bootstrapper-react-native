const path = require('path');

const CASES = [
  { features: ['drawer', 'tabs', 'googlemaps'], stateManagement: 'redux' },
  { features: ['drawer', 'tabs'], stateManagement: 'redux' },
  { features: ['drawer'], stateManagement: 'redux' },
  { features: ['tabs'], stateManagement: 'redux' },
  { features: ['loginandsignup', 'onboarding'], stateManagement: 'redux' },
  { features: ['loginandsignup'], stateManagement: 'redux' },
  { features: ['onboarding'], stateManagement: 'redux' },
  { features: [], stateManagement: 'redux' }
].map((v, i) => {
  v.features = v.features.reduce((p, c) => ({ ...p, [c]: true }), {});
  return [i + 1, v];
});

const TEMP_FOLDER = path.join(__dirname, '../../tmp');
const PROJECT_NAME = 'kaminorn';
const GENERATOR_TIMEOUT = 480000; // 8 min

module.exports = {
  CASES,
  GENERATOR_TIMEOUT,
  PROJECT_NAME,
  TEMP_FOLDER
};
