const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const rimraf = require('rimraf');

const cases = [
  [1, ['Drawer', 'Tabs', 'Google Maps']], // drawer + tabs + google maps
  [2, ['Login and SignUp', 'Onboarding']], // login + onboarding
  [3, ['Login and SignUp']], // login
  [4, ['Onboarding']], // onboarding
  [5, []] // nada
  // y despues  con recoil
  // [], // login + onboarding
  // [], // login
  // [], // onboarding
  // [] // nada
];

describe('kamino-react-native:app', () => {
  const PROJECT_NAME = 'kaminorn';
  const TEMP_FOLDER = '../../tmp';
  const GENERATOR_TIMEOUT = 480000; // 8 min

  describe.each(cases)(
    'Test generator, case %p with features %p',
    (caseId, features) => {
      const projectName = `${PROJECT_NAME}${caseId}`;

      it.concurrent(
        `Create project ${projectName}`,
        () =>
          helpers
            .run(path.join(__dirname, '../generators/app'))
            .inDir(path.join(__dirname, TEMP_FOLDER))
            // .withArguments('-v') // Turn verbose on
            .withPrompts({
              name: projectName,
              features,
              pushToRepo: false
            }),
        GENERATOR_TIMEOUT
      );

      it(`Check package.json on ${projectName}`, () => {
        assert.file(
          path.join(__dirname, `${TEMP_FOLDER}/${projectName}/package.json`)
        );
      });
    },
    GENERATOR_TIMEOUT
  );

  afterAll(() => {
    rimraf.sync(path.join(__dirname, TEMP_FOLDER));
  });
});
