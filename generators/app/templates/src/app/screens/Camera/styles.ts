import colors from 'constants/colors';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black
  },
  commandsContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50
  },
  counterText: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.white,
    paddingHorizontal: 5,
    zIndex: 100,
    position: 'absolute',
    top: 30,
    alignSelf: 'center',
    backgroundColor: colors.darkShadow
  }
});
