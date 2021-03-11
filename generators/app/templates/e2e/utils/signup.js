/* eslint-disable prettier/prettier */
import {element, by, waitFor, expect} from 'detox';

const elements = require('./testingElements.js');

async function typeNameSignup(firstName) {
   await waitFor(element(by.id(elements.firstName).withAncestor(by.id(elements.signUpContainer)))).toExist().withTimeout(10000);
   await element(by.id(elements.firstName).withAncestor(by.id(elements.signUpContainer))).clearText();
   await element(by.id(elements.firstName).withAncestor(by.id(elements.signUpContainer))).replaceText(`${firstName}`);
}

async function typeSurnameSignup(surName)  {
   await waitFor(element(by.id(elements.surName).withAncestor(by.id(elements.signUpContainer)))).toExist().withTimeout(10000);
   await element(by.id(elements.surName).withAncestor(by.id(elements.signUpContainer))).clearText();
   await element(by.id(elements.surName).withAncestor(by.id(elements.signUpContainer))).replaceText(`${surName}`);
}

async function typeBirthdaySignup(birthDate)  {
   await waitFor(element(by.id(elements.birthDate).withAncestor(by.id(elements.signUpContainer)))).toExist().withTimeout(10000);
   await element(by.id(elements.birthDate).withAncestor(by.id(elements.signUpContainer))).clearText();
   await element(by.id(elements.birthDate).withAncestor(by.id(elements.signUpContainer))).replaceText(`${birthDate}`);
}

async function typeEmailSignup(email)  {
   await waitFor(element(by.id(elements.email).withAncestor(by.id(elements.signUpContainer)))).toExist().withTimeout(10000);
   await element(by.id(elements.email).withAncestor(by.id(elements.signUpContainer))).clearText();
   await element(by.id(elements.email).withAncestor(by.id(elements.signUpContainer))).replaceText(`${email}`);
   await element(by.id(elements.email).withAncestor(by.id(elements.signUpContainer))).tapReturnKey();
}

async function typePasswordSignup(password)  {
   await waitFor(element(by.id(elements.password).withAncestor(by.id(elements.signUpContainer)))).toExist().withTimeout(10000);
   await element(by.id(elements.password).withAncestor(by.id(elements.signUpContainer))).clearText();
   await element(by.id(elements.password).withAncestor(by.id(elements.signUpContainer))).replaceText(`${password}`);
}

async function typePhoneNumberSignup(phoneNumber)  {
   await waitFor(element(by.id(elements.phoneNumber).withAncestor(by.id(elements.signUpContainer)))).toExist().withTimeout(10000);
   await element(by.id(elements.phoneNumber).withAncestor(by.id(elements.signUpContainer))).clearText();
   await element(by.id(elements.phoneNumber).withAncestor(by.id(elements.signUpContainer))).replaceText(`${phoneNumber}`);
}

async function pressSubmitButton()  {
   await waitFor(element(by.id(elements.signupSubmitButton).withAncestor(by.id(elements.signUpContainer)))).toExist().withTimeout(10000);
   await element(by.id(elements.signupSubmitButton).withAncestor(by.id(elements.signUpContainer))).tap();
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
   pressSubmitButton,
   verifyErrorsNotVisible
};
