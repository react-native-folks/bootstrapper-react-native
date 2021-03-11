import colors from 'constants/colors';

import { CustomThemeType } from 'config/theme';
import { StyleSheet } from 'react-native';

const borderlessStyle = {
  borderWidth: 0,
  backgroundColor: colors.transparent
};

export const defaultAndroidRipple = {
  borderless: false,
  color: colors.lightGray
};

export default (appTheme: CustomThemeType) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 8,
      backgroundColor: appTheme.colors.primary,
      color: appTheme.colors.onPrimary,
      borderColor: colors.gray
    },
    defaultPressed: {
      opacity: 0.4
    },
    borderless: borderlessStyle,
    radial: {
      borderRadius: 100
    },
    primary: {
      backgroundColor: appTheme.colors.primary
    },
    primaryContent: {
      color: appTheme.colors.onPrimary
    },
    secondary: {
      backgroundColor: appTheme.colors.secondary
    },
    secondaryContent: {
      color: appTheme.colors.onSecondary
    },
    black: {
      backgroundColor: colors.black
    },
    blackContent: {
      color: colors.white
    },
    white: {
      backgroundColor: colors.white
    },
    whiteContent: {
      color: colors.black
    },
    gray: {
      backgroundColor: colors.gray
    },
    grayContent: {
      color: colors.black
    },
    borderlessContent: {
      color: appTheme.colors.accent
    },
    green: {
      backgroundColor: colors.green
    },
    greenContent: {
      color: colors.white
    },
    blue: {
      backgroundColor: colors.blue
    },
    blueContent: {
      color: colors.white
    },
    transparent: {
      backgroundColor: colors.transparent
    },
    transparentContent: {
      color: colors.black
    }
  });
