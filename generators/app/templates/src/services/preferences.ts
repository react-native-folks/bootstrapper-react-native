import AsyncStorage from '@react-native-async-storage/async-storage';

const THEME_KEY = '@Preferences:appTheme';

export const setAppThemePreference = (value: string) =>
  AsyncStorage.setItem(THEME_KEY, value || 'system');
export const getAppThemePreference = () => AsyncStorage.getItem(THEME_KEY);

const preferencesServices = {
  setAppThemePreference,
  getAppThemePreference
};

export default preferencesServices;
