const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
var fs = require('fs');

const cases = [
  { features: ['drawer', 'tabs', 'googlemaps'], stateManagement: 'redux' },
  { features: ['drawer', 'tabs'], stateManagement: 'redux' },
  { features: ['drawer'], stateManagement: 'redux' },
  { features: ['tabs'], stateManagement: 'redux' },
  { features: ['loginandsignup', 'onboarding'], stateManagement: 'redux' },
  { features: ['loginandsignup'], stateManagement: 'redux' },
  { features: ['onboarding'], stateManagement: 'redux' },
  { features: [], stateManagement: 'redux' }
  // y despues  con recoil
  // [], // login + onboarding
  // [], // login
  // [], // onboarding
  // [] // nada
].map((v, i) => {
  v.features = v.features.reduce((p, c) => ({ ...p, [c]: true }), {});
  return [i + 1, v];
});

describe('kamino-react-native:app', () => {
  const TEMP_FOLDER = path.join(__dirname, '../../tmp');
  const GENERATOR_TIMEOUT = 480000; // 8 min

  beforeAll(done => {
    helpers.testDirectory(TEMP_FOLDER, done);
  });

  afterAll(() => {
    fs.rmdirSync(TEMP_FOLDER, { recursive: true });
  });

  it.concurrent.each(cases)(
    'Test case %p: Test if generator creates project succesfully',
    (id, { features, stateManagement }) =>
      helpers
        .run(path.join(__dirname, '../generators/app'))
        .setDir(TEMP_FOLDER)
        .withPrompts({
          name: `kaminorn${id}`,
          features,
          stateManagement,
          pushToRepo: false
        }),
    // .withArguments('-v') // Turn verbose on
    GENERATOR_TIMEOUT
  );

  describe.each(cases)(
    'Test case %p - Check files by feature were generated correctly ',
    (id, { features, stateManagement }) => {
      const projectName = `kaminorn${id}`;

      it(`Check package.json`, () => {
        assert.file(`${TEMP_FOLDER}/${projectName}/package.json`);
      });

      it(`Check index.js`, () => {
        assert.file(`${TEMP_FOLDER}/${projectName}/index.js`);
      });
    }
  );
});
