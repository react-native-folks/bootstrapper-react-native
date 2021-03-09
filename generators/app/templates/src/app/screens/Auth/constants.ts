import { isAndroid, isIos } from 'constants/platform';

import i18next from 'i18next';
import {
  validationsWrapper,
  validateRequired,
  validateEmail,
  validateMinLength,
  validateOnlyText
} from 'utils/validations';

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
    label: i18next.t('SIGNUP:MAIL'),
    keyboardType: 'email-address' as 'email-address',
    placeholder: i18next.t('SIGNUP:MAIL_PLACEHOLDER')
  },
  {
    name: FIELDS.password,
    rules: {
      validate: validationsWrapper([validateRequired, validateMinLength(8)])
    },
    label: i18next.t('SIGNUP:PASSWORD'),
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
    label: i18next.t('SIGNUP:PASSWORD_AGAIN'),
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
    label: i18next.t('SIGNUP:NAME')
  },
  {
    name: FIELDS.surname,
    rules: {
      validate: validationsWrapper([validateRequired, validateOnlyText])
    },
    keyboardType: isIos ? ('ascii-capable' as 'ascii-capable') : undefined,
    label: i18next.t('SIGNUP:SURNAME')
  },
  {
    name: FIELDS.jobTitle,
    rules: {
      validate: validateRequired
    },
    keyboardType: isIos ? ('ascii-capable' as 'ascii-capable') : undefined,
    label: i18next.t('SIGNUP:JOB_TITLE'),
    placeholder: i18next.t('SIGNUP:JOB_TITLE_PLACEHOLDER')
  },
  {
    name: FIELDS.phoneNumber,
    label: i18next.t('SIGNUP:PHONE_NUMBER'),
    secureTextEntry: true,
    keyboardType: 'phone-pad' as 'phone-pad',
    placeholder: i18next.t('SIGNUP:PHONE_NUMBER_PLACEHOLDER')
  }
];
