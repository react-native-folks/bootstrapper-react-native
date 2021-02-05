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

const TEMP_FOLDER = path.join(__dirname, '../../tmp');

describe('kamino-react-native:app', () => {
  const GENERATOR_TIMEOUT = 480000; // 8 min

  // TODO: Fix this asynchronous folder creation
  // beforeAll(async done => {
  //   if (!fs.existsSync(TEMP_FOLDER)) {
  //     await fs.mkdirSync(TEMP_FOLDER);
  //   }
  //   done();
  // });

  it.concurrent.each(cases)(
    'Test case %p: Test if generator creates project succesfully',
    (id, { features, stateManagement }) =>
      helpers
        .run(path.join(__dirname, '../generators/app'))
        .cd(TEMP_FOLDER)
        // .inDir(path.join(__dirname, TEMP_FOLDER))
        // .withArguments('-v') // Turn verbose on
        .withPrompts({
          name: `kaminorn${id}`,
          features,
          stateManagement,
          pushToRepo: false
        }),
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

  afterAll(() => {
    fs.rm(TEMP_FOLDER);
  });
});
