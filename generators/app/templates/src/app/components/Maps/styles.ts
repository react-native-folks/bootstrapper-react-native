import { transparent } from 'constants/colors';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  defaultStyle: {
    flex: 1,
    alignSelf: 'stretch'
  },
  markerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: transparent
  }
});
