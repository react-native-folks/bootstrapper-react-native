import { StyleSheet } from 'react-native';
import { green } from '@constants/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  stretchAndFlex: {
    alignSelf: 'stretch'
  },
  form: {
    paddingBottom: 20,
    paddingHorizontal: 30
  },
  formButton: {
    backgroundColor: green,
    borderRadius: 3,
    marginTop: 15,
    padding: 10
  }
});
