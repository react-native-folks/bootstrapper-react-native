import colors from 'constants/colors';
import { SIZES } from 'constants/fonts';

import { StyleSheet } from 'react-native';
import { moderateScale } from 'utils/scaling';
import { NumberObject } from 'interfaces/global';

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
    backgroundColor: colors.transparent
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
