import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme
} from '@react-navigation/native';
import {
  configureFonts,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme
} from 'react-native-paper';
import { fontConfig } from 'config/fonts';

// CONSTANT COLORS
export const blue: string = '#149ED6';
export const green: string = '#72cc77';
export const red: string = '#FF0000';
export const transparent: string = 'transparent';
export const semiTransparent: string = 'rgba(255,255,255,0.5)';
export const white: string = '#FFF';
export const black: string = '#0b0b0b';
export const lightBlack: string = '#1E1E1E';
export const gray: string = '#00000061'; // '#rgba(0, 0, 0, 0.38)';
export const darkGray: string = '#161717';
export const lightGray: string = '#F4F4F4';
export const mediumGray: string = '#919191';
export const darkShadow: string = 'rgba(0, 0, 0, 0.05)';
export const lightShadow: string = 'rgba(255, 255, 255, 0.05)';

// App themes related with light and dark mode
export const theme = {
  light: {
    primary: blue,
    secondary: white,
    accent: gray,
    background: lightGray,
    input: black,
    onPrimary: lightGray,
    onSecondary: blue
  },
  dark: {
    primary: blue,
    secondary: darkGray,
    accent: lightGray,
    background: black,
    input: white,
    onPrimary: black,
    onSecondary: lightGray
  },
  fontConfig: configureFonts(fontConfig)
};

const defaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  fonts: theme.fontConfig,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    ...theme.light
  }
};
const darkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  fonts: theme.fontConfig,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
    ...theme.dark
  }
};

export type CustomThemeType = typeof darkTheme | typeof defaultTheme;

export const AppTheme = {
  defaultTheme,
  darkTheme
};
