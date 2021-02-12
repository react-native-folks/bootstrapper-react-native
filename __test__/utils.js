const { exec } = require('child_process');
const util = require('util');

const { PROJECT_NAME } = require('./constants');

const execPromise = util.promisify(exec);

function getProjectName(caseNumber) {
  return PROJECT_NAME + caseNumber;
}

function runExecCommand(command) {
  return new Promise(resolve => {
    exec(command, (error, stdout, stderr) => {
      resolve({
        code: error && error.code ? error.code : 0,
        error,
        stdout,
        stderr
      });
    });
  });
}

function buildAndroidProject(projDir) {
  return runExecCommand(`cd ${projDir} && yarn android:build.develop`);
}

function runTestsOnProject(projDir) {
  return runExecCommand(`cd ${projDir} && yarn test`);
}

async function getCodeAndVersionNumber(projDir) {
  const { stdout } = await execPromise(
    `cd ${projDir} && git rev-list HEAD --count --merges --first-parent`
  );
  const commitNumberCount = stdout ? Number(stdout) : 0;
  const versionNumber = require(`${projDir}/package.json`).version || '0.0.1';
  const trimmedVersion = versionNumber.split('.');
  const buildNumber =
    Number(trimmedVersion[0]) * 10000000 +
    Number(trimmedVersion[1]) * 100000 +
    Number(trimmedVersion[2]) * 1000 +
    Number(commitNumberCount);
  return { buildNumber, versionNumber };
}

module.exports = {
  getProjectName,
  buildAndroidProject,
  runTestsOnProject,
  getCodeAndVersionNumber
};
