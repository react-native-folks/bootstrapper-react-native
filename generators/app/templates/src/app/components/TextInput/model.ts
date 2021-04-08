import { Control, RegisterOptions } from 'react-hook-form';
import { TextInput as PaperTextInput } from 'react-native-paper';

/*
 ** TODO: You can add styles to Base like Family Font to be the Text styles base!
 ** if you want to add a custom style, you need to add it here and in VARIANTS
 */

export const VARIANTS = [
  // Style
  'center',
  'justify',
  'right',
  // Sizes
  'xxsmall',
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
  'xxlarge'
];

export type VariantsType = {
  // Style
  center?: boolean;
  justify?: boolean;
  right?: boolean;
  // Sizes
  xxsmall?: boolean;
  xsmall?: boolean;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  xlarge?: boolean;
  xxlarge?: boolean;
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
