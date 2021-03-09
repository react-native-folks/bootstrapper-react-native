import { black } from 'constants/colors';
import { SEMIBOLD, BOLD, ITALIC, SIZES } from 'constants/fonts';
import { fontMaker } from 'utils/font';

const defaultFontConfig = {
  regular: {
    fontFamily: 'Rubik-Regular'
  },
  medium: {
    fontFamily: 'Rubik-Medium'
  },
  light: {
    fontFamily: 'Rubik-Light'
  },
  thin: {
    fontFamily: 'Rubik-Light'
  }
};

export const fontConfig = {
  web: defaultFontConfig,
  ios: defaultFontConfig,
  android: defaultFontConfig
};

// Here you can make your custom fonts
// I only recommend using family if you have more than one Font Family in the App.
export default {
  baseFont: fontMaker({ size: SIZES.MEDIUM, color: black }),
  baseItalicFont: fontMaker({
    size: SIZES.MEDIUM,
    color: black,
    style: ITALIC
  }),
  semiBoldFont: fontMaker({
    weight: SEMIBOLD,
    size: SIZES.MEDIUM,
    color: black
  }),
  boldFont: fontMaker({ weight: BOLD, size: SIZES.MEDIUM, color: black })
};
