import colors from 'constants/colors';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  buttonContainer: {
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: colors.white,
    width: 100
  },
  buttonText: {
    color: colors.white
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10
  }
});
