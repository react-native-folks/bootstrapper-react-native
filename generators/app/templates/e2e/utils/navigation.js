/* eslint-disable prettier/prettier */
import { element, by, device } from 'detox';

const elements = require('./testingElements.js');

async function pressBackButton()  {
    if (device.getPlatform() === 'android') {
      await device.pressBack(); // Android native back button only
    } else {
      await element(by.id(elements.backButton)).tap(); // iOS header navigation back button
    }
}

module.exports = {
  pressBackButton
};
