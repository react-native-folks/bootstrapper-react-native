import { TextProps, TextInputProps } from 'react-native';
import { Control, ValidationRules } from 'react-hook-form';
import { CustomTextProps } from 'app/components/CustomText/model';

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
  'error',
  'box',
  'emptyBox'
];

export interface VariantsInterface {
  semiBold?: boolean;
  bold?: boolean;
  italic?: boolean;
  center?: boolean;
  justify?: boolean;
  right?: boolean;
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
  box?: boolean;
  emptyBox?: boolean;
}

export interface CustomTextInputProps extends VariantsInterface {
  testID?: string | undefined;
  errorTestID?: string | undefined;
  labelTestID?: string | undefined;
  control: Control<Record<string, any>>;
  name: string;
  defaultValue?: string;
  rules?: ValidationRules;
  label?: string;
  inputProps?: TextInputProps;
  labelProps?: CustomTextProps;
  textProps?: TextProps;
  style?: any;
  errorMessage?: string;
}
