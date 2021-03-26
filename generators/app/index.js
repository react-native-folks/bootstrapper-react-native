const Generator = require('yeoman-generator');

// CONFIGURING
const reactNativeInit = require('./tasks/configuringTasks/reactNativeInit');
const installDependencies = require('./tasks/configuringTasks/installDependencies');
const addFilesToGitIgnore = require('./tasks/configuringTasks/addFilesToGitIgnore');
// WRITING
const appSetup = require('./tasks/appSetup');
// INSTALL
const bundleInstall = require('./tasks/installTasks/bundleInstall');
const configureIosProject = require('./tasks/installTasks/configureIosProject');
const installPods = require('./tasks/installTasks/installPods');
const linkAppAssets = require('./tasks/installTasks/linkAppAssets');
const editBundleIdentifier = require('./tasks/installTasks/editBundleIdentifier');
const lintFixProject = require('./tasks/installTasks/lintFixProject');
const gitInitialization = require('./tasks/installTasks/gitInitialization');
const runCommand = require('./tasks/runCommand');

// END
const nextSteps = require('./tasks/nextSteps');
const {
  GENERATOR_FEATURES,
  GENERATOR_SOCIALS,
  GENERATOR_STATE_MANAGEMENTS,
  PLATFORM_OPTIONS
} = require('./constants');

class ReactNativeBootstrap extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.option('verbose', {
      desc: 'Turns on verbose logging',
      alias: 'v',
      type: Boolean,
      default: false
    });
    this.option('rnversion', {
      desc: 'Force use a React Native specific version',
      alias: 'rnv',
      type: String
    });
    this.option('latest', {
      desc: 'Force use a React Native latest version',
      alias: 'latest',
      type: Boolean,
      default: false
    });
    this.conflicter.force = true;
  }

  async prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'title',
        message: "What's your project name?",
        validate: val =>
          String(val).match(/^[a-zA-Z0-9 ]*$/i)
            ? true
            : `${val} is not a valid name for a project. Please use a valid identifier name (alphanumeric).`,
        filter: value => value.replace(/\s+$/, '')
      },
      {
        type: 'list',
        name: 'platformsSkipped',
        message: 'Do you want to skip some platform instalation?',
        choices: PLATFORM_OPTIONS,
        filter: value => value.replace(/ /g, '').toLowerCase()
      },
      {
        type: 'checkbox',
        name: 'features',
        message: "What's features should this project include?",
        choices: GENERATOR_FEATURES,
        filter: values =>
          values.reduce((answer, val) => {
            answer[val.replace(/ /g, '').toLowerCase()] = true;
            return answer;
          }, {})
      },
      {
        type: 'confirm',
        name: 'landscape',
        message: 'Would you like to enable landscape orientation? Default NO',
        default: false
      }
    ]).then(async ({ features, platformsSkipped, landscape, title }) => {
      this.title = title;
      this.platforms = {
        android: platformsSkipped === 'none' || platformsSkipped === 'ios',
        ios: platformsSkipped === 'none' || platformsSkipped === 'android'
      };
      this.projectName = title.replace(/\s+/g, '').toLowerCase();
      this.features = features;
      this.features.landscape = landscape;
      this.features.hasFirebase =
        features.firebase || features.pushnotifications;
      this.features.socialButtons = {};
      if (this.features.socialloginbuttons) {
        const { socialButtons } = await this.prompt([
          {
            type: 'checkbox',
            name: 'socialButtons',
            message: 'About social buttons: What service should be included?',
            choices: GENERATOR_SOCIALS,
            filter: values =>
              values.reduce((answer, val) => {
                answer[val.replace(/ /g, '').toLowerCase()] = true;
                return answer;
              }, {})
          }
        ]);
        this.features = { ...this.features, socialButtons };
        if (socialButtons.google) this.features.hasFirebase = true;
        if (
          (this.features.socialButtons.facebook ||
            this.features.socialButtons.twitter ||
            this.features.socialButtons.google) &&
          this.platforms.ios
        ) {
          this.features.socialButtons.apple = true;
          console.log(
            '● APPLE SIGN IN was added automatically because is mandatory for apple review if other socials sign in is on the app.'
              .cyan
          );
        }
      }
      this.features.statemanagement = {
        redux: false,
        recoil: false
      };
      const { stateManagement } = await this.prompt([
        {
          type: 'list',
          name: 'stateManagement',
          message: 'What application state management do you want to use?',
          choices: GENERATOR_STATE_MANAGEMENTS,
          filter: value => value.replace(/ /g, '').toLowerCase()
        }
      ]);
      this.features.statemanagement[stateManagement] = true;
      return this.prompt([
        {
          type: 'input',
          name: 'bundleId',
          message: 'Enter the bundle id for your app',
          default: `com.mahisoft.${this.projectName}`
        }
      ]).then(answer => {
        this.bundleId = answer.bundleId;
      });
    });
  }

  configuring() {
    return Promise.resolve()
      .then(() => reactNativeInit.bind(this)())
      .then(() => editBundleIdentifier.bind(this)())
      .then(() => installDependencies.bind(this)())
      .then(() => addFilesToGitIgnore.bind(this)());
  }

  writing() {
    appSetup.bind(this)();
  }

  install() {
    return (
      Promise.resolve()
        .then(() => this.platforms.ios && bundleInstall.bind(this)())
        .then(() => linkAppAssets.bind(this)())
        // TODO - remove when npx react-native link fix iOS Copy Bundle Resources Issue
        .then(() =>
          runCommand({
            command: [
              'npx',
              [
                'react-native',
                'unlink',
                'react-native-vector-icons',
                '--platforms',
                'ios'
              ],
              { cwd: `${process.cwd()}/${this.projectName}` }
            ],
            loadingMessage: 'Unlinking Vector Icons from iOS platform',
            successMessage: 'Success Vector Icons unlink',
            failureMessage: 'Failed Vector Icons unlink',
            context: this.options
          })
        )
        .then(() => this.platforms.ios && configureIosProject.bind(this)())
        .then(() => this.platforms.ios && installPods.bind(this)())
        .then(() => lintFixProject.bind(this)())
        .then(() => gitInitialization.bind(this)())
    );
  }

  end() {
    nextSteps.bind(this)();
  }
}

module.exports = ReactNativeBootstrap;
