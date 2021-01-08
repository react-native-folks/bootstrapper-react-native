module.exports = function packgeJsonScripts() {
  const packageJson = this.fs.readJSON(
    this.destinationPath(this.projectName, 'package.json')
  );
  packageJson.scripts = packageJson.scripts || {};
  packageJson.scripts['android:build.develop'] =
    'cd android && ./gradlew clean assembleDevelopRelease';
  packageJson.scripts['android:build.staging'] =
    'cd android && ./gradlew clean assembleStagingRelease';
  packageJson.scripts['android:build.production'] =
    'cd android && ./gradlew clean bundleProductionRelease';
  packageJson.scripts['android:clean'] = 'cd android/ && ./gradlew clean';
  packageJson.scripts.android =
    'npx react-native run-android --variant developDebug --appIdSuffix develop';
  packageJson.scripts.clean =
    'rm -rf $TMPDIR/react-* && rm -rf $TMPDIR/metro-* && rm -rf $TMPDIR/haste-map-* && watchman watch-del-all && yarn cache clean';
  packageJson.scripts.coverage = 'jest --coverage --passWithNoTests';
  packageJson.scripts['force-clean'] =
    'yarn android:clean && yarn ios:clean && yarn clean  && rm -rf node_modules/ && yarn install && cd ios/ && pod install && cd ..';
  packageJson.scripts['ios:clean'] = 'rm -rf ios/build && rm -rf ios/Pods';
  packageJson.scripts['ios:pods'] = 'cd ios && pod install';
  packageJson.scripts.ios = 'npx react-native run-ios --scheme develop';
  packageJson.scripts['lint-diff'] =
    'git diff --staged --name-only --relative --diff-filter=ACM | grep -E "\\.(ts|tsx|js|jsx)$" | xargs eslint';
  packageJson.scripts['lint-fix'] = 'eslint src --ext .js,.ts,.jsx,.tsx --fix';
  packageJson.scripts.lint = 'eslint src --ext .js,.ts,.jsx,.tsx';
  packageJson.scripts.start = 'npx react-native start';
  packageJson.scripts['test:debug'] =
    'node --inspect node_modules/.bin/jest --runInBand';
  packageJson.scripts['test:watch'] = 'jest --watch';
  packageJson.scripts.test = 'jest --passWithNoTests';
  packageJson.scripts.tsc = 'tsc';
  packageJson.husky = packageJson.husky || {};
  packageJson.husky.hooks = packageJson.husky.hooks || {};
  packageJson.husky.hooks['pre-commit'] = 'yarn run lint-diff && yarn run tsc';

  this.fs.writeJSON(
    this.destinationPath(this.projectName, 'package.json'),
    packageJson
  );
};
