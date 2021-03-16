import { createContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { AppTheme } from 'config/theme';
import { getAppThemePreference } from 'services/preferences';
import { useTheme as usePaperTheme } from 'react-native-paper';
import { CustomThemeType } from 'config/theme';

export enum ThemeProperty {
  LIGHT = 'light',
  DARK = 'dark',
  SYSTEM = 'system'
}

export const ThemeContext = createContext({
  changeTheme: (_newTheme: ThemeProperty) => {},
  appTheme: AppTheme.defaultTheme
});

export const useAppTheme = (
  initialStoredTheme: ThemeProperty
): [any, (theme: ThemeProperty) => void] => {
  const [selectedTheme, setTheme] = useState(initialStoredTheme);
  useEffect(() => {
    getAppThemePreference().then(storedTheme => {
      if (storedTheme) {
        setTheme(storedTheme as ThemeProperty);
      }
    });
  }, []);
  const systemTheme = useColorScheme();
  let appTheme;
  if (selectedTheme === ThemeProperty.SYSTEM) {
    appTheme =
      systemTheme === ThemeProperty.DARK
        ? AppTheme.darkTheme
        : AppTheme.defaultTheme;
  } else {
    appTheme =
      selectedTheme === ThemeProperty.DARK
        ? AppTheme.darkTheme
        : AppTheme.defaultTheme;
  }
  appTheme.type = selectedTheme;
  const setAppTheme = (theme: ThemeProperty) => setTheme(theme);
  return [appTheme, setAppTheme];
};

export const useTheme = () => usePaperTheme() as CustomThemeType;
