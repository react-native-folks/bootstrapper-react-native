import colors from 'constants/colors';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  nativeButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    height: 50,
    borderRadius: 2,
    borderWidth: 0.5,
    borderColor: colors.gray,
    marginVertical: 6,
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
