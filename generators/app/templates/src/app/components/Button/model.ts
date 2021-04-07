import { Button as PaperButton } from 'react-native-paper';

// Add needed color for the proyect
export const VARIANTS = [
  'primary',
  'secondary',
  'accent',
  'borderless',
  'radial',
  'black',
  'green',
  'blue',
  'white',
  'gray',
  'transparent'
];

interface ButtonVariants {
  primary?: boolean;
  secondary?: boolean;
  accent?: boolean;
  black?: boolean;
  green?: boolean;
  blue?: boolean;
  white?: boolean;
  gray?: boolean;
  transparent?: boolean;
  primaryLabel?: boolean;
  secondaryLabel?: boolean;
  accentLabel?: boolean;
  blackLabel?: boolean;
  greenLabel?: boolean;
  blueLabel?: boolean;
  whiteLabel?: boolean;
  grayLabel?: boolean;
  transparentLabel?: boolean;
}

export type ButtonProps = Omit<
  React.ComponentProps<typeof PaperButton>,
  'children'
> &
  ButtonVariants & {
    title?: any;
    children?: string;
  };
