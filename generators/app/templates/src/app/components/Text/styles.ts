import colors from 'constants/colors';

import { sizes } from 'config/fonts';
import { StyleSheet } from 'react-native';
import { CustomThemeType } from 'config/theme';
import { mapColorsStyles, mapSizesStyles } from 'utils/style';

export default (theme: CustomThemeType) =>
  StyleSheet.create({
    base: {
      fontSize: sizes.medium
    },
    light: theme.fonts.light,
    semibold: theme.fonts.medium,
    italic: {
      fontStyle: 'italic'
    },
    center: {
      textAlign: 'center'
    },
    justify: {
      textAlign: 'justify' // iOS only
    },
    right: {
      textAlign: 'right'
    },
    error: {
      color: theme.colors.error
    },
    // Colors
    primary: {
      color: theme.colors.primary
    },
    secondary: {
      color: theme.colors.secondary
    },
    onPrimary: {
      color: theme.colors.onPrimary
    },
    onSecondary: {
      color: theme.colors.onSecondary
    },
    accent: {
      color: theme.colors.accent
    },
    ...mapColorsStyles(colors),
    ...mapSizesStyles(sizes)
  });
