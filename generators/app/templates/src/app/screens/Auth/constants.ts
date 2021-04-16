import { isAndroid, isIos } from 'constants/platform';

import {
  validationsWrapper,
  validateRequired,
  validateEmail,
  validateMinLength,
  validateOnlyText
} from 'utils/validations';

import { translations } from './screens/SignUp/i18n';
import './screens/SignUp/i18n';

export const FIELDS = {
  email: 'email',
  password: 'password',
  passwordAgain: 'passwordAgain',
  name: 'name',
  surname: 'surname',
  jobTitle: 'jobTitle',
  phoneNumber: 'phoneNumber'
};

export const LOGIN_INITIAL_VALUES = {
  [FIELDS.email]: '',
  [FIELDS.password]: ''
};

export const SIGNUP_INITIAL_VALUES = {
  [FIELDS.email]: '',
  [FIELDS.password]: '',
  [FIELDS.passwordAgain]: '',
  [FIELDS.name]: '',
  [FIELDS.surname]: '',
  [FIELDS.jobTitle]: '',
  [FIELDS.phoneNumber]: ''
};

export const SIGNUP_FIELDS = [
  {
    name: FIELDS.email,
    rules: {
      validate: validationsWrapper([validateRequired, validateEmail])
    },
    label: translations.MAIL(),
    keyboardType: 'email-address' as 'email-address',
    placeholder: translations.MAIL_PLACEHOLDER()
  },
  {
    name: FIELDS.password,
    rules: {
      validate: validationsWrapper([validateRequired, validateMinLength(8)])
    },
    label: translations.PASSWORD(),
    keyboardType: isAndroid
      ? ('visible-password' as 'visible-password')
      : ('ascii-capable' as 'ascii-capable'),
    secureTextEntry: true
  },
  {
    name: FIELDS.passwordAgain,
    rules: {
      validate: validationsWrapper([validateRequired, validateMinLength(8)])
    },
    label: translations.PASSWORD_AGAIN(),
    keyboardType: isAndroid
      ? ('visible-password' as 'visible-password')
      : ('ascii-capable' as 'ascii-capable'),
    secureTextEntry: true
  },
  {
    name: FIELDS.name,
    rules: {
      validate: validationsWrapper([validateRequired, validateOnlyText])
    },
    keyboardType: isIos ? ('ascii-capable' as 'ascii-capable') : undefined,
    label: translations.NAME()
  },
  {
    name: FIELDS.surname,
    rules: {
      validate: validationsWrapper([validateRequired, validateOnlyText])
    },
    keyboardType: isIos ? ('ascii-capable' as 'ascii-capable') : undefined,
    label: translations.SURNAME()
  },
  {
    name: FIELDS.jobTitle,
    rules: {
      validate: validateRequired
    },
    keyboardType: isIos ? ('ascii-capable' as 'ascii-capable') : undefined,
    label: translations.JOB_TITLE(),
    placeholder: translations.JOB_TITLE_PLACEHOLDER()
  },
  {
    name: FIELDS.phoneNumber,
    label: translations.PHONE_NUMBER(),
    secureTextEntry: true,
    keyboardType: 'phone-pad' as 'phone-pad',
    placeholder: translations.PHONE_NUMBER_PLACEHOLDER()
  }
];
