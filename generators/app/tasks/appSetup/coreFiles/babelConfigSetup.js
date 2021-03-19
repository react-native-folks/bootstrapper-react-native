module.exports = function babelConfigSetup() {
  const contentBabelConfig = this.fs.read(
    `${this.projectName}/babel.config.js`
  );
  const babelContent = `presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel']
    }
  },
  plugins: [
    'react-native-reanimated/plugin',
    'import-glob',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.json'
        ]
      }
    ]
  ]`;
  const updatedBabelConfig = contentBabelConfig.replace(
    "presets: ['module:metro-react-native-babel-preset'],",
    babelContent
  );
  this.fs.write(`${this.projectName}/babel.config.js`, updatedBabelConfig);
};
