const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

const { CASES, TEMP_FOLDER, GENERATOR_TIMEOUT } = require('./constants');
const { getProjectName } = require('./utils');

describe('Test Yeoman generator if can generate projects succesfully', () => {
  beforeAll(done => {
    helpers.testDirectory(TEMP_FOLDER, done);
  });

  test.concurrent.each(CASES)(
    'Test case %p - Test if generator creates the project succesfully',
    (id, { features, stateManagement }) =>
      helpers
        .run(path.join(__dirname, '../generators/app'))
        .setDir(TEMP_FOLDER)
        .withPrompts({
          name: getProjectName(id),
          features,
          stateManagement,
          pushToRepo: false
        }),
    // .withArguments('-v') // Turn verbose on
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
