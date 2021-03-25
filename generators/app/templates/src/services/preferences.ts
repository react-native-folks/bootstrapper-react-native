import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeProperty } from 'interfaces/theme';
const THEME_KEY = '@Preferences:appTheme';

export const setAppThemePreference = (value: ThemeProperty) =>
  AsyncStorage.setItem(THEME_KEY, value || ThemeProperty.SYSTEM);
export const getAppThemePreference = () =>
  AsyncStorage.getItem(THEME_KEY) as Promise<ThemeProperty | null>;

const preferencesServices = {
  setAppThemePreference,
  getAppThemePreference
};

export default preferencesServices;
