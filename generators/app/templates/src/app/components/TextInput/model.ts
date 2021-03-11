import { Control, RegisterOptions } from 'react-hook-form';
import { TextInput as PaperTextInput } from 'react-native-paper';

/*
 ** TODO: You can add styles to Base like Family Font to be the Text styles base!
 ** if you want to add a custom style, you need to add it here and in VARIANTS
 */

export const VARIANTS = [
  'center',
  'justify',
  'right',
  'xxsmall',
  'xsmall',
  'small',
  'medium',
  'xmedium',
  'big',
  'xbig'
];

export type VariantsType = {
  center?: boolean;
  justify?: boolean;
  right?: boolean;
  xxsmall?: boolean;
  xsmall?: boolean;
  small?: boolean;
  medium?: boolean;
  xmedium?: boolean;
  big?: boolean;
  xbig?: boolean;
};

export type TextInputProps = React.ComponentProps<typeof PaperTextInput> &
  VariantsType & {
    testID?: string | undefined;
    errorTestID?: string | undefined;
    labelTestID?: string | undefined;
    control: Control<Record<string, any>>;
    name: string;
    defaultValue?: string;
    rules?: RegisterOptions;
    label?: string;
    errorMessage?: string;
  };
