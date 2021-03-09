import { ReactElement } from 'react';
import {
  TouchableOpacityProps,
  ViewStyle,
  TextStyle,
  PressableAndroidRippleConfig,
  PressableProps
} from 'react-native';

import { CustomTextProps } from '../CustomText/model';

// Add needed color for the proyect
export const VARIANTS = [
  'primary',
  'secondary',
  'borderless',
  'radial',
  'black',
  'green',
  'blue',
  'white',
  'gray',
  'transparent'
];

interface CustomButtonVariants {
  primary?: boolean;
  secondary?: boolean;
  borderless?: boolean;
  radial?: boolean;
  black?: boolean;
  green?: boolean;
  blue?: boolean;
  white?: boolean;
  gray?: boolean;
  transparent?: boolean;
}

export interface CustomButtonProps
  extends CustomButtonVariants,
    PressableProps {
  onPress: TouchableOpacityProps['onPress'];
  activeOpacity?: number;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  pressedStyle?: ViewStyle;
  androidRipple?: PressableAndroidRippleConfig;
  children?: ({ pressed }: { pressed: boolean }) => ReactElement;
  title?: string;
  textProps?: CustomTextProps;
  radius?: number;
  borderWidth?: number;
}
