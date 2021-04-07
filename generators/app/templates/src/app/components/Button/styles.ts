import colors from 'constants/colors';

import { CustomThemeType } from 'config/theme';
import { StyleSheet } from 'react-native';

export default (theme: CustomThemeType) =>
  StyleSheet.create({
    primary: {
      backgroundColor: theme.colors.primary
    },
    primaryLabel: {
      color: theme.colors.primary
    },
    secondary: {
      backgroundColor: theme.colors.secondary,
      color: theme.colors.secondary
    },
    secondaryLabel: {
      color: theme.colors.secondary
    },
    accent: {
      backgroundColor: theme.colors.accent
    },
    accentLabel: {
      color: theme.colors.accent
    },
    black: {
      backgroundColor: colors.black
    },
    blackLabel: {
      color: colors.black
    },
    white: {
      backgroundColor: colors.white
    },
    whiteLabel: {
      color: colors.white
    },
    gray: {
      backgroundColor: colors.gray
    },
    grayLabel: {
      color: colors.gray
    },
    green: {
      backgroundColor: colors.green
    },
    greenLabel: {
      color: colors.green
    },
    blue: {
      backgroundColor: colors.blue
    },
    blueLabel: {
      color: colors.blue
    },
    transparent: {
      backgroundColor: colors.transparent
    },
    transparentLabel: {
      color: colors.transparent
    }
  });
