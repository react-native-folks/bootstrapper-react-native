/* eslint-disable prettier/prettier */
import {element, by, waitFor} from 'detox';

const testingElements = require('./testingElements');

async function clickRightFooterButton()  {
    await waitFor(element(by.id(testingElements.footerRightActionButton).withAncestor(by.id(testingElements.footerContainer)))).toBeVisible().withTimeout(10000);
    await element(by.id(testingElements.footerRightActionButton).withAncestor(by.id(testingElements.footerContainer))).tap();
}

async function clickLeftFooterButton()  {
    await waitFor(element(by.id(testingElements.footerLeftActionButton).withAncestor(by.id(testingElements.footerContainer)))).toBeVisible().withTimeout(10000);
    await element(by.id(testingElements.footerLeftActionButton).withAncestor(by.id(testingElements.footerContainer))).tap();
}

async function clickSkipButton()  {
    await waitFor(element(by.text('Skip'))).toBeVisible().withTimeout(10000);
     await element(by.text('Skip')).tap();
}

async function clickNextButton()  {
    await waitFor(element(by.text('Next'))).toBeVisible().withTimeout(10000);
    await element(by.text('Next')).tap();
}

async function clickPreviousButton()  {
    await waitFor(element(by.text('Previous'))).toBeVisible().withTimeout(10000);
    await element(by.text('Previous')).tap();
}

async function clickFinishButton()  {
    await waitFor(element(by.text('Finish'))).toBeVisible().withTimeout(10000);
    await element(by.text('Finish')).tap();
}

module.exports = { clickLeftFooterButton, clickRightFooterButton, clickSkipButton, clickNextButton, clickPreviousButton, clickFinishButton };
