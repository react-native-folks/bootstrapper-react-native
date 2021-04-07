import colors from 'constants/colors';

import { CustomThemeType } from 'config/theme';
import { StyleSheet } from 'react-native';

export default (theme: CustomThemeType) =>
  StyleSheet.create({
    nativeButtonContainer: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    container: {
      height: 50,
      borderRadius: theme.roundness,
      borderColor: colors.gray,
      marginVertical: 6,
      marginHorizontal: 0,
      justifyContent: 'center',
      alignItems: 'center'
    },
    full: {
      width: '100%'
    },
    half: {
      width: '48%'
    },
    third: {
      width: '31%'
    }
  });
