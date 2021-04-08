import { ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { moderateScale } from 'utils/scaling';
import { StringObject, NumberObject } from 'interfaces/global';

type StylesType = ViewStyle | TextStyle | ImageStyle;

export function getCustomStyles(
  variants: string[],
  props: Record<string, any>,
  styles: Record<string, StylesType>,
  stylePrefix: string = ''
) {
  return variants.reduce((preVariants: StylesType, variant: string) => {
    const variantName: string = `${variant}${stylePrefix}`;
    return props[variantName]
      ? { ...preVariants, ...styles[variantName] }
      : preVariants;
  }, {});
}

export const mapColorsStyles = (colorsObj: StringObject) =>
  Object.keys(colorsObj).reduce(
    (colorsAcc, color) => ({
      ...colorsAcc,
      ...{ [color]: { color: colorsObj[color] } }
    }),
    {}
  );

export const mapSizesStyles = (sizesObj: NumberObject) =>
  Object.keys(sizesObj).reduce(
    (sizesAcc, size) => ({
      ...sizesAcc,
      ...{ [size]: { fontSize: moderateScale(sizesObj[size]) } }
    }),
    {}
  );
