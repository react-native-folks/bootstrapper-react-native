import { StyleProp, ViewStyle, TextStyle, ViewProps } from 'react-native';
import { ReactNode } from 'react';

export interface CustomShadowViewProps extends VariantsInterface {
  viewProps?: ViewProps;
  style?: StyleProp<ViewStyle> | StyleProp<TextStyle>;
  children: ReactNode | Array<ReactNode>;
}

/*
 ** You can add styles to Base like Family Font to be the Text styles base!
 ** if you want to add a custom style, you need to add it here and in VARIANTS
 */

export interface VariantsInterface {
  weak?: boolean;
  medium?: boolean;
  strong?: boolean;
  rounded?: boolean;
  borderLine?: boolean;
}

export const VARIANTS = ['weak', 'medium', 'strong', 'rounded', 'borderLine'];
