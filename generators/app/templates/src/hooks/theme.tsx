import { AppTheme } from 'constants/colors';

import React from 'react';
import { useColorScheme } from 'react-native';

export type ThemeProperty = 'light' | 'dark' | 'system' | string;

export const ThemeContext = React.createContext({
  changeTheme: (_newTheme: ThemeProperty) => {},
  appTheme: AppTheme.defaultTheme
});

export const useAppTheme = (
  initialStoredTheme: ThemeProperty
): [any, (theme: ThemeProperty) => void] => {
  const [selectedTheme, setTheme] = React.useState(initialStoredTheme);
  const systemTheme = useColorScheme();
  let appTheme;
  if (selectedTheme === 'system') {
    appTheme =
      systemTheme === 'dark' ? AppTheme.darkTheme : AppTheme.defaultTheme;
  } else {
    appTheme =
      selectedTheme === 'dark' ? AppTheme.darkTheme : AppTheme.defaultTheme;
  }
  const setAppTheme = (theme: ThemeProperty) => setTheme(theme);
  return [appTheme, setAppTheme];
};
