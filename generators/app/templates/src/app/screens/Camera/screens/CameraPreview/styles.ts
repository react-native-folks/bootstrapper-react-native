import colors from 'constants/colors';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: colors.black
  },
  backButton: {
    position: 'absolute',
    top: 0,
    left: 0
  }
});
