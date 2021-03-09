import { CustomThemeType } from 'constants/colors';

import { StyleSheet } from 'react-native';

export default (appTheme: CustomThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: appTheme.colors.background
    },
    themeSelectorContainer: {
      marginTop: 20,
      alignSelf: 'stretch',
      paddingHorizontal: 20
    },
    themeSelectorGroup: {
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    selectorItem: {
      height: 80,
      width: 100,
      alignContent: 'center',
      flexDirection: 'column'
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
