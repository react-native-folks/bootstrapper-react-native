/* eslint-disable prettier/prettier */
import {element, by, waitFor, expect} from 'detox';

const elements = require('./testingElements.js');

async function typeNameSignup(firstName) {
   await waitFor(element(by.id(elements.firstName).withAncestor(by.id(elements.signUpContainer)))).toBeVisible().whileElement(by.id(elements.signupScrollViewContainer)).scroll(50, 'down');
   await element(by.id(elements.firstName).withAncestor(by.id(elements.signUpContainer))).clearText();
   await element(by.id(elements.firstName).withAncestor(by.id(elements.signUpContainer))).replaceText(`${firstName}`);
   await element(by.id(elements.firstName).withAncestor(by.id(elements.signUpContainer))).tapReturnKey();
}

async function typeSurnameSignup(surName)  {
   await waitFor(element(by.id(elements.surName).withAncestor(by.id(elements.signUpContainer)))).toBeVisible().whileElement(by.id(elements.signupScrollViewContainer)).scroll(50, 'down');
   await element(by.id(elements.surName).withAncestor(by.id(elements.signUpContainer))).clearText();
   await element(by.id(elements.surName).withAncestor(by.id(elements.signUpContainer))).replaceText(`${surName}`);
   await element(by.id(elements.surName).withAncestor(by.id(elements.signUpContainer))).tapReturnKey();
}

async function typeJobTitleSignup(jobTitle)  {
   await waitFor(element(by.id(elements.jobTitle).withAncestor(by.id(elements.signUpContainer)))).toBeVisible().whileElement(by.id(elements.signupScrollViewContainer)).scroll(50, 'down');
   await element(by.id(elements.jobTitle).withAncestor(by.id(elements.signUpContainer))).clearText();
   await element(by.id(elements.jobTitle).withAncestor(by.id(elements.signUpContainer))).replaceText(`${jobTitle}`);
   await element(by.id(elements.jobTitle).withAncestor(by.id(elements.signUpContainer))).tapReturnKey();
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
   await element(by.id(elements.password).withAncestor(by.id(elements.signUpContainer))).tapReturnKey();
}

async function typePasswordAgainSignup(passwordAgain)  {
   await waitFor(element(by.id(elements.passwordAgain).withAncestor(by.id(elements.signUpContainer)))).toExist().withTimeout(10000);
   await element(by.id(elements.passwordAgain).withAncestor(by.id(elements.signUpContainer))).clearText();
   await element(by.id(elements.passwordAgain).withAncestor(by.id(elements.signUpContainer))).replaceText(`${passwordAgain}`);
   await element(by.id(elements.passwordAgain).withAncestor(by.id(elements.signUpContainer))).tapReturnKey();
}

async function typePhoneNumberSignup(phoneNumber)  {
   await waitFor(element(by.id(elements.phoneNumber).withAncestor(by.id(elements.signUpContainer)))).toBeVisible().whileElement(by.id(elements.signupScrollViewContainer)).scroll(50, 'down');
   await element(by.id(elements.phoneNumber).withAncestor(by.id(elements.signUpContainer))).clearText();
   await element(by.id(elements.phoneNumber).withAncestor(by.id(elements.signUpContainer))).replaceText(`${phoneNumber}`);
   await element(by.id(elements.phoneNumber).withAncestor(by.id(elements.signUpContainer))).tapReturnKey();
}

async function pressSubmitButton()  {
   await waitFor(element(by.id(elements.signupSubmitButton).withAncestor(by.id(elements.signUpContainer)))).toExist().withTimeout(10000);
   await waitFor(element(by.id(elements.signupSubmitButton))).toBeVisible().whileElement(by.id(elements.signupScrollViewContainer)).scroll(50, 'down');
   await element(by.id(elements.signupSubmitButton)).tap();
}

async function verifyErrorsNotVisible() {
   await expect(element(by.id(elements.errorEmail).withAncestor(by.id(elements.signUpContainer)))).toHaveText('');
   await expect(element(by.id(elements.errorPassword).withAncestor(by.id(elements.signUpContainer)))).toHaveText('');
   await expect(element(by.id(elements.errorPasswordAgain))).toHaveText('');
   await expect(element(by.id(elements.errorName))).toHaveText('');
   await expect(element(by.id(elements.errorSurname))).toHaveText('');
   await expect(element(by.id(elements.errorJobTitle))).toHaveText('');
   await expect(element(by.id(elements.errorPhoneNumber))).toHaveText('');
}

async function verifyErrorsVisible() {
   await expect(element(by.id(elements.errorEmail).withAncestor(by.id(elements.signUpContainer)))).not.toHaveText('');
   await expect(element(by.id(elements.errorPassword).withAncestor(by.id(elements.signUpContainer)))).not.toHaveText('');
   await expect(element(by.id(elements.errorPasswordAgain))).not.toHaveText('');
   await expect(element(by.id(elements.errorName))).not.toHaveText('');
   await expect(element(by.id(elements.errorSurname))).not.toHaveText('');
   await expect(element(by.id(elements.errorJobTitle))).not.toHaveText('');
   // await expect(element(by.id(elements.errorPhoneNumber))).not.toHaveText('');; //pending validate type of input to show error
}

module.exports = {
   typeEmailSignup,
   typePasswordSignup,
   typePasswordAgainSignup,
   typeNameSignup,
   typeSurnameSignup,
   typeJobTitleSignup,
   typePhoneNumberSignup,
   pressSubmitButton,
   verifyErrorsNotVisible,
   verifyErrorsVisible
};
