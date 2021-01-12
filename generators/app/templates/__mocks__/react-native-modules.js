import { NativeModules } from 'react-native';

NativeModules.RNTwitterSignIn = {
  init: () => {},
  login: () => Promise()
};

export { NativeModules };
