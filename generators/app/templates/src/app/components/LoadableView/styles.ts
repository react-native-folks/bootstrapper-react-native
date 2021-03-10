import { StyleSheet } from 'react-native';
import colors from 'constants/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  loaderContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.5,
    backgroundColor: colors.white,
    position: 'absolute',
    zIndex: 3
  }
});
