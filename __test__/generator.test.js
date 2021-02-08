const fs = require('fs');
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

const {
  buildAndroidProject,
  runLintAndTestsOnProject,
  getCodeAndVersionNumber
} = require('./utils.js');

const cases = [
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
    'Test case %p - Test if generator creates the project succesfully',
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
    id => {
      const projectName = `kaminorn${id}`;
      const projectDir = path.join(TEMP_FOLDER, projectName);

      it(`Check package.json`, () => {
        assert.file(path.join(projectDir, 'package.json'));
      });

      it(`Check index.js`, () => {
        assert.file(path.join(projectDir, 'index.js'));
      });
    }
  );

  describe.each(cases)(
    'Test case %p - Check if the project passes his tests and builds successfully',
    id => {
      const projectName = `kaminorn${id}`;
      const projectDir = path.join(TEMP_FOLDER, projectName);

      it(
        `Project Lint and Tests should pass success for project ${projectName}`,
        async () => {
          const result = await runLintAndTestsOnProject(projectDir);
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
              `/android/app/build/outputs/apk/develop/release/${projectName}-${versionNumber}-${buildNumber}-develop-release.apk`
            )
          );
        },
        GENERATOR_TIMEOUT
      );
    }
  );
});
