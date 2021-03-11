import colors from 'constants/colors';

import { StyleSheet } from 'react-native';
import { CustomThemeType } from 'config/theme';

const DOT_SIZE = 12;
const ACTIVE_DOT_SIZE = 15;
const BORDER_RADIUS = 10;

const styles = (appTheme: CustomThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: appTheme.dark ? colors.black : colors.blue
    },
    pagination: {
      position: 'absolute',
      bottom: 34
    },
    activeDot: {
      backgroundColor: colors.white,
      width: ACTIVE_DOT_SIZE,
      height: ACTIVE_DOT_SIZE,
      borderRadius: BORDER_RADIUS
    },
    dot: {
      backgroundColor: colors.semiTransparent,
      width: DOT_SIZE,
      height: DOT_SIZE,
      borderRadius: 10
    }
  });
export default styles;
