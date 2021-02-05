const { exec } = require('child_process');
const util = require('util');

const execPromise = util.promisify(exec);

function buildAndroidProject(projDir) {
  return new Promise(resolve => {
    exec(
      `cd ${projDir}/android && ./gradlew clean assembleDevelopRelease`,
      (error, stdout, stderr) => {
        resolve({
          code: error && error.code ? error.code : 0,
          error,
          stdout,
          stderr
        });
      }
    );
  });
}

function runLintAndTestsOnProject(projDir) {
  return new Promise(resolve => {
    exec(`cd ${projDir} && yarn lint && yarn test`, (error, stdout, stderr) => {
      resolve({
        code: error && error.code ? error.code : 0,
        error,
        stdout,
        stderr
      });
    });
  });
}

async function getCodeAndVersionNumber(projDir) {
  const { stdout } = await execPromise(
    `cd ${projDir} && git rev-list HEAD --count --merges --first-parent`
  );
  const buildNumber = stdout ? Number(stdout) : 0;
  const versionNumber = require(`${projDir}/package.json`).version ?? '0.0.1';
  return { buildNumber, versionNumber };
}

module.exports = {
  buildAndroidProject,
  runLintAndTestsOnProject,
  getCodeAndVersionNumber
};
