const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const rimraf = require('rimraf');
const {
  buildAndroidProject,
  runLintAndTestsOnProject,
  getCodeAndVersionNumber
} = require('./utils.js');

const cases = [
  [1, ['Drawer', 'Tabs', 'Google Maps']] // drawer + tabs + google maps
  // [2, ['Login and SignUp', 'Onboarding']], // login + onboarding
  // [3, ['Login and SignUp']], // login
  // [4, ['Onboarding']], // onboarding
  // [5, []] // nada
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
      const projectDir = path.join(__dirname, `${TEMP_FOLDER}/${projectName}`);
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
        assert.file(`${projectDir}/package.json`);
      });

      it(
        'Project Lint and Tests should pass success for project ${projectName}',
        async () => {
          const result = await runLintAndTestsOnProject(
            path.join(__dirname, `${TEMP_FOLDER}/${projectName}`)
          );
          assert(result.code === 0);
        },
        GENERATOR_TIMEOUT
      );

      it(
        `Android build must create corresponding apk for project ${projectName}`,
        async () => {
          const { versionNumber, buildNumber } = await getCodeAndVersionNumber(
            projectDir
          );
          await buildAndroidProject(projectDir);
          assert.file(
            path.join(
              projectDir,
              `/android/app/build/outputs/apk/develop/release/${PROJECT_NAME}${caseId}-${versionNumber}-${buildNumber}-develop-release.apk`
            )
          );
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
