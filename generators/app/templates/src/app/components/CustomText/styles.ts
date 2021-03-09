import {
  black,
  blue,
  white,
  green,
  gray,
  transparent,
  red,
  CustomThemeType
} from 'constants/colors';
import { SIZES } from 'constants/fonts';

import { StyleSheet } from 'react-native';
import fonts from 'config/fonts';
import { moderateScale } from 'utils/scaling';
import { StringObject, NumberObject } from 'interfaces/global';

const getColors = (colorsObj: StringObject) =>
  Object.keys(colorsObj).reduce(
    (colors, color) => ({
      ...colors,
      ...{ [color]: { color: colorsObj[color] } }
    }),
    {}
  );

const getSizes = (sizesObj: NumberObject) =>
  Object.keys(sizesObj).reduce(
    (sizes, size) => ({
      ...sizes,
      ...{ [size]: { fontSize: moderateScale(sizesObj[size]) } }
    }),
    {}
  );

export default (appTheme: CustomThemeType) =>
  StyleSheet.create({
    base: {
      ...fonts.baseFont,
      backgroundColor: transparent
    },
    semiBold: fonts.semiBoldFont,
    bold: fonts.boldFont,
    italic: fonts.baseItalicFont,
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
      color: red
    },
    // Colors
    primary: {
      color: appTheme.colors.primary
    },
    secondary: {
      color: appTheme.colors.secondary
    },
    onPrimary: {
      color: appTheme.colors.onPrimary
    },
    onSecondary: {
      color: appTheme.colors.onSecondary
    },
    accent: {
      color: appTheme.colors.accent
    },
    ...getColors({ blue, gray, green, white, black }),
    // Sizes
    ...getSizes({
      xxsmall: SIZES.XXSMALL,
      xsmall: SIZES.XSMALL,
      small: SIZES.SMALL,
      medium: SIZES.MEDIUM,
      xmedium: SIZES.XMEDIUM,
      big: SIZES.BIG,
      xbig: SIZES.XBIG
    })
  });
