const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

const {
  CASES,
  TEMP_FOLDER,
  GENERATOR_TIMEOUT,
  PLATFORM_EXCLUDE_OPTIONS,
  ARGS_SKIP_PLATFORM_PARAM
} = require('./constants');
const { getProjectName } = require('./utils');

describe('Test Yeoman generator if can generate projects succesfully', () => {
  const platformSkipArg = process.argv.filter(x =>
    x.startsWith(ARGS_SKIP_PLATFORM_PARAM)
  )[0];

  beforeAll(done => {
    helpers.testDirectory(TEMP_FOLDER, done);
  });

  test.concurrent.each(CASES)(
    'Test case %p - Test if generator creates the project succesfully',
    (id, propmts) =>
      helpers
        .run(path.join(__dirname, '../generators/app'))
        .setDir(TEMP_FOLDER)
        .withPrompts({
          title: getProjectName(id),
          ...propmts,
          pushToRepo: false,
          platformsSkipped: PLATFORM_EXCLUDE_OPTIONS.includes(platformSkipArg)
            ? platformSkipArg
            : 'ios'
        }),
    GENERATOR_TIMEOUT
  );

  describe.each(CASES)(
    'Test case %p - Check files by feature were generated correctly ',
    id => {
      const projectDir = path.join(TEMP_FOLDER, getProjectName(id));

      it(`Check package.json`, () => {
        assert.file(path.join(projectDir, 'package.json'));
      });

      it(`Check index.js`, () => {
        assert.file(path.join(projectDir, 'index.js'));
      });
    }
  );
});
