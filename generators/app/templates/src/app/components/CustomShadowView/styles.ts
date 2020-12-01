import { StyleSheet } from 'react-native';
import { transparent, black, gray } from 'constants/colors';

export default StyleSheet.create({
  base: {
    borderWidth: 0,
    borderColor: transparent,
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 3, height: 6 },
    shadowColor: black,
    elevation: 4
  },
  week: {
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 2 },
    shadowColor: black,
    elevation: 2
  },
  medium: {
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 3, height: 6 },
    shadowColor: black,
    elevation: 4
  },
  strong: {
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 2, height: 4 },
    shadowColor: black,
    elevation: 8
  },
  rounded: {
    borderRadius: 10
  },
  borderLine: {
    borderWidth: 1,
    borderColor: gray
  }
});
