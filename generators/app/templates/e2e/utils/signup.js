/* eslint-disable prettier/prettier */
import {element, by, waitFor, expect} from 'detox';

const elements = require('./testingElements.js');

async function typeNameSignup(firstName) {
   await waitFor(element(by.id(elements.firstName))).toExist().withTimeout(10000);
   await element(by.id(elements.firstName)).clearText();
   await element(by.id(elements.firstName)).replaceText(`${firstName}`);
}

async function typeSurnameSignup(surName)  {
   await waitFor(element(by.id(elements.surName))).toExist().withTimeout(10000);
   await element(by.id(elements.surName)).clearText();
   await element(by.id(elements.surName)).replaceText(`${surName}`);
}

async function typeBirthdaySignup(birthDate)  {
   await waitFor(element(by.id(elements.birthDate))).toExist().withTimeout(10000);
   await element(by.id(elements.birthDate)).clearText();
   await element(by.id(elements.birthDate)).replaceText(`${birthDate}`);
}

async function typeEmailSignup(email)  {
   await waitFor(element(by.id(elements.email)).atIndex(1)).toExist().withTimeout(10000);
   await element(by.id(elements.email)).atIndex(1).clearText();
   await element(by.id(elements.email)).atIndex(1).replaceText(`${email}`);
}

async function typePasswordSignup(password)  {
   await waitFor(element(by.id(elements.password)).atIndex(1)).toExist().withTimeout(10000);
   await element(by.id(elements.password)).atIndex(1).clearText();
   await element(by.id(elements.password)).atIndex(1).replaceText(`${password}`);
}

async function typePhoneNumberSignup(phoneNumber)  {
   await waitFor(element(by.id(elements.phoneNumber))).toExist().withTimeout(10000);
   await element(by.id(elements.phoneNumber)).clearText();
   await element(by.id(elements.phoneNumber)).replaceText(`${phoneNumber}`);
}

async function clickSubmitButton()  {
   await waitFor(element(by.id(elements.signupSubmitButton))).toExist().withTimeout(10000);
   await element(by.id(elements.signupSubmitButton)).tap();
}

async function verifyErrorsNotVisible() {
   await expect(element(by.id(elements.errorName))).not.toBeVisible();
   await expect(element(by.id(elements.errorSurname))).not.toBeVisible();
   await expect(element(by.id(elements.errorBirthdate))).not.toBeVisible();
   await expect(element(by.id(elements.errorEmail))).not.toBeVisible();
   await expect(element(by.id(elements.errorPassword))).not.toBeVisible();
   await expect(element(by.id(elements.errorPhone))).not.toBeVisible();
}

module.exports = {
   typeEmailSignup,
   typePasswordSignup,
   typeNameSignup,
   typeSurnameSignup,
   typeBirthdaySignup,
   typePhoneNumberSignup,
   clickSubmitButton,
   verifyErrorsNotVisible
};
