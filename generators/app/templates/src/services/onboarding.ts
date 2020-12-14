import AsyncStorage from '@react-native-async-storage/async-storage';

const ONBOARDING_KEY = '@Onboarding:hasAccess';

export const setOnboardingAccess = (value: boolean) =>
  AsyncStorage.setItem(ONBOARDING_KEY, JSON.stringify(value));
export const getOnboardingAccess = () =>
  AsyncStorage.getItem(ONBOARDING_KEY).then((value: string) =>
    JSON.parse(`${value}`)
  );
