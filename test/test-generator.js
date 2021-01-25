const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const { GENERATOR_FEATURES } = require('../generators/app/constants');

describe('kamino-react-native:app', function () {
  const repositoryNameT1 = 'kaminorn';

  it(`Login And Onboarding - T1 - Created ${repositoryNameT1}`, async function () {
    helpers
      .run(path.join(__dirname, '../generators/app'))
      .inDir(path.join(__dirname, './TestRepositoryT1'))
      .withPrompts({
        name: repositoryNameT1,
        features: GENERATOR_FEATURES.filter(
          f => f.localeCompare('Social Login Buttons') // All features without 'Social Login Buttons' that requires extra configuration
        ),
        landscape: false
      })
      .then(function () {
        assert.file(
          path.join(
            __dirname,
            `./TestRepositoryT1/${repositoryNameT1}/package.json`
          )
        );
      });
  });
});
