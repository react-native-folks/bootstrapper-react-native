import { ReactNode } from 'react';
import { Text as PaperText } from 'react-native-paper';

/*
 ** TODO: You can add styles to Base like Family Font to be the Text styles base!
 ** if you want to add a custom style, you need to add it here and in VARIANTS
 */

export const VARIANTS = [
  'semiBold',
  'bold',
  'italic',
  'center',
  'justify',
  'right',
  'primary',
  'secondary',
  'onPrimary',
  'onSecondary',
  'accent',
  'blue',
  'gray',
  'green',
  'white',
  'xxsmall',
  'xsmall',
  'small',
  'medium',
  'xmedium',
  'big',
  'xbig',
  'error'
];

export interface VariantsInterface {
  semiBold?: boolean;
  bold?: boolean;
  italic?: boolean;
  center?: boolean;
  justify?: boolean;
  right?: boolean;
  primary?: boolean;
  secondary?: boolean;
  onPrimary?: boolean;
  onSecondary?: boolean;
  accent?: boolean;
  blue?: boolean;
  gray?: boolean;
  green?: boolean;
  white?: boolean;
  xxsmall?: boolean;
  xsmall?: boolean;
  small?: boolean;
  medium?: boolean;
  xmedium?: boolean;
  big?: boolean;
  xbig?: boolean;
  error?: boolean;
}

export type TextProps = React.ComponentProps<typeof PaperText> &
  VariantsInterface & {
    children: ReactNode;
  };
