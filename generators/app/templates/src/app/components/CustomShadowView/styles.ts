import colors from 'constants/colors';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  base: {
    borderWidth: 0,
    borderColor: colors.transparent,
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 3, height: 6 },
    shadowColor: colors.black,
    elevation: 4
  },
  week: {
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 2 },
    shadowColor: colors.black,
    elevation: 2
  },
  medium: {
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 3, height: 6 },
    shadowColor: colors.black,
    elevation: 4
  },
  strong: {
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 2, height: 4 },
    shadowColor: colors.black,
    elevation: 8
  },
  rounded: {
    borderRadius: 10
  },
  borderLine: {
    borderWidth: 1,
    borderColor: colors.gray
  }
});
