import { ReactNode } from 'react';
import { Text as PaperText } from 'react-native-paper';
/*
 ** TODO: You can add styles to Base like Family Font to be the Text styles base!
 ** if you want to add a custom style, you need to add it here and in VARIANTS
 */

export const VARIANTS = [
  // Weight
  'light',
  'semibold',
  'bold',
  // Style
  'italic',
  'center',
  'justify',
  'right',
  // Colors
  'primary',
  'secondary',
  'onPrimary',
  'onSecondary',
  'accent',
  'error',
  // Custom colors - Add here colors from constants/colors
  'red',
  'gray',
  'green',
  'white',
  'mediumGray',
  'darkGray',
  // Sizes
  'xxsmall',
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
  'xxlarge'
];

export interface VariantsInterface {
  // Weight
  light?: boolean;
  semibold?: boolean;
  bold?: boolean;
  // Style
  italic?: boolean;
  center?: boolean;
  justify?: boolean;
  right?: boolean;
  // Colors
  primary?: boolean;
  secondary?: boolean;
  onPrimary?: boolean;
  onSecondary?: boolean;
  accent?: boolean;
  error?: boolean;
  // Custom colors - Add here colors from constants/colors
  red?: boolean;
  gray?: boolean;
  green?: boolean;
  white?: boolean;
  mediumGray?: boolean;
  darkGray?: boolean;
  // Sizes
  xxsmall?: boolean;
  xsmall?: boolean;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  xlarge?: boolean;
  xxlarge?: boolean;
}

export type TextProps = React.ComponentProps<typeof PaperText> &
  VariantsInterface & {
    children: ReactNode;
  };
