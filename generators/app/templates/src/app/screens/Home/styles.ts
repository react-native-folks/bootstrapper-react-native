import { StyleSheet } from 'react-native';
import { white } from 'constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: white
  },
  home: {
    justifyContent: 'space-around',
    minHeight: 200,
    padding: 15,
    borderRadius: 10
  },
  logout: {
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10
  }
});
