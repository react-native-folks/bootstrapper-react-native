import {
  transparent,
  lightGray,
  blue,
  black,
  green,
  gray,
  white
} from 'constants/colors';

import { StyleSheet } from 'react-native';

const borderlessStyle = {
  borderWidth: 0,
  backgroundColor: transparent
};

export const defaultAndroidRipple = {
  borderless: false,
  color: lightGray
};

export default (appTheme: any) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 8,
      backgroundColor: appTheme.colors.primary,
      color: appTheme.colors.onPrimary,
      borderColor: gray
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
      backgroundColor: black
    },
    blackContent: {
      color: white
    },
    white: {
      backgroundColor: white
    },
    whiteContent: {
      color: black
    },
    gray: {
      backgroundColor: gray
    },
    grayContent: {
      color: black
    },
    borderlessContent: {
      color: appTheme.colors.accent
    },
    green: {
      backgroundColor: green
    },
    greenContent: {
      color: white
    },
    blue: {
      backgroundColor: blue
    },
    blueContent: {
      color: white
    },
    transparent: {
      backgroundColor: transparent
    },
    transparentContent: {
      color: black
    }
  });
