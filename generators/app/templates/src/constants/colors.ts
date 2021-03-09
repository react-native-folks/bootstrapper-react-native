import { configureFonts, DefaultTheme } from 'react-native-paper';
import { fontConfig } from 'config/fonts';

export const blue: string = '#288CCB';
export const green: string = '#72cc77';
export const red: string = '#FF0000';
export const transparent: string = 'transparent';
export const white: string = '#FFF';
export const black: string = '#000';
export const gray: string = '#rgba(0, 0, 0, 0.38)';
export const darkGray: string = '#363636';
export const lightGray: string = '#C2C2C2';

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
  roundness: 10,
  colors: {
    ...DefaultTheme.colors,
    primary: blue,
    accent: green
  }
};
export default theme;
