import i18next from 'i18next';
import getTranslation from 'utils/translations';

const NAMESPACE = 'LOGIN';

export const translations = {
  MAIL: () => getTranslation(`${NAMESPACE}:MAIL`),
  MAIL_PLACEHOLDER: () => getTranslation(`${NAMESPACE}:MAIL_PLACEHOLDER`),
  PASSWORD: () => getTranslation(`${NAMESPACE}:PASSWORD`),
  LOG_IN: () => getTranslation(`${NAMESPACE}:LOG_IN`),
  LOGIN_FAILURE: () => getTranslation(`${NAMESPACE}:LOGIN_FAILURE`),
  SIGN_UP: () => getTranslation(`${NAMESPACE}:SIGN_UP`),
  SOCIAL_LOGIN: () => getTranslation(`${NAMESPACE}:SOCIAL_LOGIN`)
};

i18next.addResources('es', NAMESPACE, {
  MAIL: 'Email',
  MAIL_PLACEHOLDER: 'Ej: email@dominio.com',
  PASSWORD: 'Contraseña',
  LOG_IN: 'Iniciar sesión',
  LOGIN_FAILURE: 'Email y/o contraseña incorrecto/s',
  SIGN_UP: 'No tenes cuenta? Registrate!',
  SOCIAL_LOGIN: 'O conectate con'
});

i18next.addResources('en', NAMESPACE, {
  MAIL: 'Email',
  MAIL_PLACEHOLDER: 'email@domain.com',
  PASSWORD: 'Password',
  LOG_IN: 'Login',
  LOGIN_FAILURE: 'Incorrect email or password',
  SIGN_UP: "Don't you have an account? Sign Up!",
  SOCIAL_LOGIN: 'Or connect with'
});
