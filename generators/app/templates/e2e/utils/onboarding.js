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
    await waitFor(element(by.text('SKIP'))).toBeVisible().withTimeout(10000);
     await element(by.text('SKIP')).tap();
}

async function pressNextButton()  {
    await waitFor(element(by.text('NEXT'))).toBeVisible().withTimeout(10000);
    await element(by.text('NEXT')).tap();
}

async function pressPreviousButton()  {
    await waitFor(element(by.text('PREVIOUS'))).toBeVisible().withTimeout(10000);
    await element(by.text('PREVIOUS')).tap();
}

async function pressFinishButton()  {
    await waitFor(element(by.text('FINISH'))).toBeVisible().withTimeout(10000);
    await element(by.text('FINISH')).tap();
}

module.exports = { pressLeftFooterButton, pressRightFooterButton, pressSkipButton, pressNextButton, pressPreviousButton, pressFinishButton };
