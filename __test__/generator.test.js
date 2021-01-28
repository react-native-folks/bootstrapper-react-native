const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const rimraf = require('rimraf');

const { GENERATOR_FEATURES } = require('../generators/app/constants');

describe('kamino-react-native:app', () => {
  const PROJECT_NAME = 'kaminorn';
  const TEMP_FOLDER = '../../tmp';
  const GENERATOR_TIMEOUT = 480000;

  beforeAll(
    done =>
      helpers
        .run(path.join(__dirname, '../generators/app'))
        .inDir(path.join(__dirname, TEMP_FOLDER))
        // .withArguments('-v') // Turn verbose on
        .withPrompts({
          name: PROJECT_NAME,
          features: GENERATOR_FEATURES.filter(
            f => f.localeCompare('Social Login Buttons') // All features without 'Social Login Buttons' that requires extra configuration
          ),
          pushToRepo: false
        })
        .on('end', done),
    GENERATOR_TIMEOUT
  );

  afterAll(() => {
    rimraf.sync(path.join(__dirname, TEMP_FOLDER));
  });

  describe('file creation', () => {
    it('Check package.json', () => {
      assert.file(
        path.join(__dirname, `${TEMP_FOLDER}/${PROJECT_NAME}/package.json`)
      );
    });
  });
});
