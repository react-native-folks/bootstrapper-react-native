const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const rimraf = require('rimraf');
const { exec } = require('child_process');

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

function buildAndroid(projDir) {
  return new Promise(resolve => {
    exec(
      `cd ${projDir}/android && ./gradlew clean assembleDevelopDebug`,
      (error, stdout, stderr) => {
        resolve({
          code: error && error.code ? error.code : 0,
          error,
          stdout,
          stderr
        });
      }
    );
  });
}

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
              stateManagement: 'redux',
              pushToRepo: false
            }),
        GENERATOR_TIMEOUT
      );

      it(`Check package.json on ${projectName}`, () => {
        assert.file(
          path.join(__dirname, `${TEMP_FOLDER}/${projectName}/package.json`)
        );
      });

      it(
        `Android build must create corresponding apk for project ${projectName}`,
        async () => {
          if (caseId === 1) {
            await buildAndroid(
              path.join(__dirname, `${TEMP_FOLDER}/${projectName}`)
            );
            assert.file(
              path.join(
                __dirname,
                `${TEMP_FOLDER}/${projectName}/android/app/build/outputs/apk/develop/debug/${PROJECT_NAME}${caseId}-0.0.1-1000-develop-debug.apk`
              )
            );
          }
        },
        GENERATOR_TIMEOUT
      );
    },
    GENERATOR_TIMEOUT
  );

  afterAll(() => {
    rimraf.sync(path.join(__dirname, TEMP_FOLDER));
  });
});
