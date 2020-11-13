import { TouchableOpacityProps, ViewStyle, TextStyle } from 'react-native';

import { CustomTextProps } from '../CustomText/model';

// Add needed color for the proyect
export const VARIANTS = [
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
  borderless?: boolean;
  radial?: boolean;
  black?: boolean;
  green?: boolean;
  blue?: boolean;
  white?: boolean;
  gray?: boolean;
  transparent?: boolean;
}

export interface CustomButtonProps extends CustomButtonVariants {
  onPress: TouchableOpacityProps['onPress'];
  activeOpacity?: number;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  title?: string;
  textProps?: CustomTextProps;
  radius?: number;
  borderWidth?: number;
}
