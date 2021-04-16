const { copyFile } = require('../utils');
const { PUSH_NOTIFICATIONS_SERVICE } = require('../files');

const FILES = [PUSH_NOTIFICATIONS_SERVICE];

module.exports = function pushNotificationsFeatureFiles() {
  FILES.forEach(copyFile.bind(this));
};
