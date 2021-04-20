import i18next from 'i18next';
import getTranslation from 'utils/translations';

const NAMESPACE = 'SIGNUP';

export const translations = {
  NAME: () => getTranslation(`${NAMESPACE}:NAME`),
  SURNAME: () => getTranslation(`${NAMESPACE}:SURNAME`),
  JOB_TITLE: () => getTranslation(`${NAMESPACE}:JOB_TITLE`),
  JOB_TITLE_PLACEHOLDER: () =>
    getTranslation(`${NAMESPACE}:JOB_TITLE_PLACEHOLDER`),
  MAIL: () => getTranslation(`${NAMESPACE}:MAIL`),
  MAIL_PLACEHOLDER: () => getTranslation(`${NAMESPACE}:MAIL_PLACEHOLDER`),
  PASSWORD: () => getTranslation(`${NAMESPACE}:PASSWORD`),
  PASSWORD_AGAIN: () => getTranslation(`${NAMESPACE}:PASSWORD_AGAIN`),
  PHONE_NUMBER: () => getTranslation(`${NAMESPACE}:PHONE_NUMBER`),
  PHONE_NUMBER_PLACEHOLDER: () =>
    getTranslation(`${NAMESPACE}:PHONE_NUMBER_PLACEHOLDER`),
  SIGN_UP: () => getTranslation(`${NAMESPACE}:SIGN_UP`),
  SIGNUP_FAILURE: () => getTranslation(`${NAMESPACE}:SIGNUP_FAILURE`)
};

i18next.addResources('es', NAMESPACE, {
  NAME: 'Nombre/s',
  SURNAME: 'Apellido/s',
  JOB_TITLE: 'Título profesional',
  JOB_TITLE_PLACEHOLDER: 'p.ej. Ingeniero de software',
  MAIL: 'Email',
  MAIL_PLACEHOLDER: 'Ej: email@dominio.com',
  PASSWORD: 'Contraseña',
  PASSWORD_AGAIN: 'Contraseña de nuevo',
  PHONE_NUMBER: 'Número de teléfono',
  PHONE_NUMBER_PLACEHOLDER: 'Número sin 0 ni 15. Ej: 1134454325',
  SIGN_UP: 'Registrarse',
  SIGNUP_FAILURE: 'Ocurrió un error. Por favor inténtenlo nuevamente!'
});

i18next.addResources('en', NAMESPACE, {
  NAME: 'Name',
  SURNAME: 'Surname',
  JOB_TITLE: 'Job title',
  JOB_TITLE_PLACEHOLDER: 'e.g. Software Engineer',
  MAIL: 'Email',
  MAIL_PLACEHOLDER: 'email@domain.com',
  PASSWORD: 'Password',
  PASSWORD_AGAIN: 'Re-enter password',
  PHONE_NUMBER: 'Phone number',
  PHONE_NUMBER_PLACEHOLDER: '1134454325',
  SIGN_UP: 'Sign up',
  SIGNUP_FAILURE: 'A problem was ocurred. Please, try again later!'
});
