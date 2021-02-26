const fs = require('fs');
const assert = require('yeoman-assert');
const path = require('path');

const {
  buildAndroidProject,
  getCodeAndVersionNumber,
  getProjectName,
  runTestsOnProject
} = require('./utils');
const { CASES, TEMP_FOLDER, GENERATOR_TIMEOUT } = require('./constants');

describe('Check if the project passes his tests and builds successfully', () => {
  // afterAll(() => {
  //   fs.rmdirSync(TEMP_FOLDER, { recursive: true });
  // });

  test.each(CASES)(
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
      const { versionNumber, buildNumber } = await getCodeAndVersionNumber(
        projectDir
      );

      await buildAndroidProject(projectDir);
      return assert.file(
        path.join(
          projectDir,
          `/android/app/build/outputs/apk/develop/release/${getProjectName(
            id
          )}-${versionNumber}-${buildNumber}-develop-release.apk`
        )
      );
    },
    GENERATOR_TIMEOUT
  );
});
