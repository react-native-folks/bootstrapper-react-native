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
    marginTop: 40
  },
  loginButtonContent: {
    margin: 8
  },
  signUpButton: {
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
  },
  socialsLabel: {
    marginVertical: 10,
    alignSelf: 'center'
  },
  socialButtonsContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  }
});
