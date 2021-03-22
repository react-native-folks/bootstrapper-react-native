import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '100%'
  },
  form: {
    flex: 0.55,
    paddingHorizontal: 30,
    alignSelf: 'stretch'
  },
  loginButton: {
    alignSelf: 'stretch',
    padding: 10,
    marginTop: 40,
    marginHorizontal: 30
  },
  signUpButton: {
    padding: 10,
    marginVertical: 15
  },
  logoContainer: {
    flex: 0.45,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    height: 300,
    aspectRatio: 1
  }
});
