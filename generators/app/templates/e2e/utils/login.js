/* eslint-disable prettier/prettier */
import {element, by, waitFor} from 'detox';

const elements = require('./testingElements.js');

async function typeEmailLogin(email)  {
    await waitFor(element(by.id(elements.email))).toBeVisible().withTimeout(10000);
    await element(by.id(elements.email)).clearText();
    await element(by.id(elements.email)).replaceText(`${email}`);
}
async function typePasswordLogin(password)  {
    await waitFor(element(by.id(elements.password))).toBeVisible().withTimeout(10000);
    await element(by.id(elements.password)).clearText();
    await element(by.id(elements.password)).replaceText(`${password}`);
}
async function clickLoginButton()  {
    await waitFor(element(by.id(elements.loginSubmitButton))).toBeVisible().withTimeout(10000);
    await element(by.id(elements.loginSubmitButton)).tap();
}
async function clickSignUpButton()  {
    await waitFor(element(by.id(elements.gotoSignupButton))).toBeVisible().withTimeout(10000);
    await element(by.id(elements.gotoSignupButton)).tap();
}
module.exports = { typeEmailLogin, typePasswordLogin, clickLoginButton, clickSignUpButton};
