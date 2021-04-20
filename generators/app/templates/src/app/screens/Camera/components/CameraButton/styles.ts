import colors from 'constants/colors';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  outsideLine: {
    bottom: 10,
    borderWidth: 3,
    height: 60,
    aspectRatio: 1,
    borderColor: colors.white,
    borderRadius: 40,
    padding: 3
  },
  recordBubble: {
    flex: 1,
    borderRadius: 40,
    backgroundColor: colors.red
  }
});
