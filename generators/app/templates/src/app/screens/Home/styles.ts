import { StyleSheet } from 'react-native';
import { CustomThemeType } from 'config/theme';

export default (appTheme: CustomThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: appTheme.colors.background
    },
    home: {
      justifyContent: 'space-around',
      minHeight: 200,
      padding: 15,
      borderRadius: 10
    },
    elementSpace: {
      marginVertical: 10
    },
    logout: {
      marginTop: 10,
      justifyContent: 'center',
      padding: 15,
      borderRadius: 10
    }
  });
