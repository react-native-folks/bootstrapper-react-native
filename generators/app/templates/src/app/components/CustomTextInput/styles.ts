import { StyleSheet } from 'react-native';
import fonts from 'config/fonts';
import {
  black,
  blue,
  white,
  green,
  gray,
  transparent,
  red
} from 'constants/colors';
import { SIZES } from 'constants/fonts';
import { moderateScale } from 'utils/scalingUtils';
import { StringObject, NumberObject } from 'interfaces/globalInterfaces';

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

export default StyleSheet.create({
  base: {
    ...fonts.baseFont,
    backgroundColor: transparent,
    borderBottomWidth: 0.5,
    borderBottomColor: gray
  },
  box: {
    borderWidth: 0.5,
    borderRadius: 10,
    borderBottomColor: gray
  },
  emptyBox: {
    borderWidth: 0
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
  }),
  container: {
    marginVertical: 10
  }
});
