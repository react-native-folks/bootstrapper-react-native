import { ViewStyle, TextStyle, ImageStyle } from 'react-native';

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
