const fs = require('fs');
const assert = require('yeoman-assert');
const path = require('path');

const {
  buildIOSProject,
  buildAndroidProject,
  getCodeAndVersionNumber,
  getProjectName,
  runTestsOnProject
} = require('./utils');
const {
  CASES,
  TEMP_FOLDER,
  GENERATOR_TIMEOUT,
  ARGS_SKIP_PLATFORM_PARAM
} = require('./constants');

describe('Check if the project passes his tests and builds successfully', () => {
  const platformSkipAg = process.argv.filter(x =>
    x.startsWith(ARGS_SKIP_PLATFORM_PARAM)
  )[0];
  afterAll(() => {
    fs.rmdirSync(TEMP_FOLDER, { recursive: true });
  });

  test.concurrent.each(CASES)(
    'Test case %p - Project Tests should pass success',
    async id => {
      const projectDir = path.join(TEMP_FOLDER, getProjectName(id));
      const result = await runTestsOnProject(projectDir);
      return assert(result.code === 0);
    },
    GENERATOR_TIMEOUT
  );

  test.each(CASES)(
    'Test case %p - Android build must create corresponding apk',
    async id => {
      const projectDir = path.join(TEMP_FOLDER, getProjectName(id));

      if (platformSkipAg !== 'android') {
        // Check android Build
        const { versionNumber, buildNumber } = await getCodeAndVersionNumber(
          projectDir
        );
        await buildAndroidProject(projectDir);
        assert.file(
          path.join(
            projectDir,
            `/android/app/build/outputs/apk/develop/release/${getProjectName(
              id
            )}-${versionNumber}-${buildNumber}-develop-release.apk`
          )
        );
      }
      if (platformSkipAg !== 'ios') {
        // Check iOS Build
        await buildIOSProject(projectDir);
        return assert.file(
          path.join(
            projectDir,
            `ios/build/Build/Products/Develop-iphonesimulator/${getProjectName(
              id
            )}.app`
          )
        );
      }
    },
    GENERATOR_TIMEOUT
  );
});
