/* eslint-disable prettier/prettier */
import {element, by, waitFor} from 'detox';

const testingElements = require('./testingElements');

async function pressRightFooterButton()  {
    await waitFor(element(by.id(testingElements.footerRightActionButton).withAncestor(by.id(testingElements.footerContainer)))).toBeVisible().withTimeout(10000);
    await element(by.id(testingElements.footerRightActionButton).withAncestor(by.id(testingElements.footerContainer))).tap();
}

async function pressLeftFooterButton()  {
    await waitFor(element(by.id(testingElements.footerLeftActionButton).withAncestor(by.id(testingElements.footerContainer)))).toBeVisible().withTimeout(10000);
    await element(by.id(testingElements.footerLeftActionButton).withAncestor(by.id(testingElements.footerContainer))).tap();
}

async function pressSkipButton()  {
    await waitFor(element(by.text('Skip'))).toBeVisible().withTimeout(10000);
     await element(by.text('Skip')).tap();
}

async function pressNextButton()  {
    await waitFor(element(by.text('Next'))).toBeVisible().withTimeout(10000);
    await element(by.text('Next')).tap();
}

async function pressPreviousButton()  {
    await waitFor(element(by.text('Previous'))).toBeVisible().withTimeout(10000);
    await element(by.text('Previous')).tap();
}

async function pressFinishButton()  {
    await waitFor(element(by.text('Finish'))).toBeVisible().withTimeout(10000);
    await element(by.text('Finish')).tap();
}

module.exports = { pressLeftFooterButton, pressRightFooterButton, pressSkipButton, pressNextButton, pressPreviousButton, pressFinishButton };
