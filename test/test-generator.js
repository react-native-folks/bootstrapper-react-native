'use strict';

var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('kamino-react-native:app', function () {
  var repositoryNameT1 = 'kaminorn';

  it(`Login And Onboarding - T1 - Created ${repositoryNameT1}`, async function () {
    helpers
      .run(path.join(__dirname, '../generators/app'))
      .inDir(path.join(__dirname, './TestRepositoryT1'))
      .withPrompts({
        name: repositoryNameT1,
        features: ['Login and SignUp', 'Onboarding'],
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

/*features
[
  'Login and SignUp',
  'Onboarding',
  'Tabs',
  'Drawer',
  'Social Login Buttons',
  'Google Maps',
  'Crashlytics',
  'Firebase Analytics',
  'Firebase Performance',
  'Push Notifications'
];

socialButtons
['Facebook', 'Apple', 'Google', 'Twitter'];

*/
