import { StyleSheet } from 'react-native';
import { gray } from 'constants/colors';

export default StyleSheet.create({
  buttonContainer: {
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: gray,
    width: 100
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10
  }
});
