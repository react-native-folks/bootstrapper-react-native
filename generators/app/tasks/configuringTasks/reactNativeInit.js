const runCommand = require('../runCommand');

module.exports = function reactNativeInit() {
  const command = [
    'npx',
    [
      'react-native',
      'init',
      this.projectName,
      '--skip-install',
      '--title',
      this.title,
      ...(this.options.rnversion ? ['--version', this.options.rnversion] : [])
    ]
  ];
  return runCommand({
    command,
    loadingMessage: 'Initializing react-native',
    context: this.options
  }).then(({ spinner }) =>
    runCommand({
      command: [
        'rm',
        ['-rf', '__tests__'],
        { cwd: `${process.cwd()}/${this.projectName}` }
      ],
      context: this.options
    })
      .then(() => {
        spinner.succeed('react-native ready!');
      })
      .catch(() => {
        spinner.fail(
          'react-native set up failed. Turn verbose mode on for detailed logging'
        );
      })
  );
};
