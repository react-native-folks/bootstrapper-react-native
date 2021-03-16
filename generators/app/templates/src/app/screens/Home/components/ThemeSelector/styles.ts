import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
  }
});
