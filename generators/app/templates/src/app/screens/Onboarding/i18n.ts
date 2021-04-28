import i18next from 'i18next';
import getTranslation from 'utils/translations';

const NAMESPACE = 'ONBOARDING';

export const translations = {
  SKIP: () => getTranslation(`${NAMESPACE}:SKIP`),
  NEXT: () => getTranslation(`${NAMESPACE}:NEXT`),
  PREVIOUS: () => getTranslation(`${NAMESPACE}:PREVIOUS`),
  FINISH: () => getTranslation(`${NAMESPACE}:FINISH`),
  FIRST_SCREEN: () => getTranslation(`${NAMESPACE}:FIRST_SCREEN`),
  SECOND_SCREEN: () => getTranslation(`${NAMESPACE}:SECOND_SCREEN`),
  THIRD_SCREEN: () => getTranslation(`${NAMESPACE}:THIRD_SCREEN`)
};

i18next.addResources('es', NAMESPACE, {
  SKIP: 'Saltar',
  NEXT: 'Siguiente',
  PREVIOUS: 'Anterior',
  FINISH: 'Finalizar',
  FIRST_SCREEN: 'Hola! Bienvenido al onboarding de Kamino React Native',
  SECOND_SCREEN:
    'en esta app encontrarás un monton de componentes y configuraciones para tu proyecto',
  THIRD_SCREEN: 'Apretá siguiente para comenzar! Vamos!'
});

i18next.addResources('en', NAMESPACE, {
  SKIP: 'Skip',
  NEXT: 'Next',
  PREVIOUS: 'Previous',
  FINISH: 'Finish',
  FIRST_SCREEN: 'Hi! Welcome to the Kamino React Native onboarding',
  SECOND_SCREEN:
    'On this app you will found a lot of components and configurations for you project',
  THIRD_SCREEN: 'Press Next to start! Lets go!'
});
