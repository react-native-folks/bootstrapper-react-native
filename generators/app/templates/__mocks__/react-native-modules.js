import { NativeModules, ScrollView, View } from 'react-native';

NativeModules.RNTwitterSignIn = {
  init: () => {},
  login: () => Promise()
};

NativeModules.RNGestureHandlerModule = {
  ScrollView,
  PanGestureHandler: View,
  attachGestureHandler: jest.fn(),
  createGestureHandler: jest.fn(),
  dropGestureHandler: jest.fn(),
  updateGestureHandler: jest.fn(),
  Direction: {
    RIGHT: 1,
    LEFT: 2,
    UP: 4,
    DOWN: 8
  },
  State: {
    BEGAN: 'BEGAN',
    FAILED: 'FAILED',
    ACTIVE: 'ACTIVE',
    END: 'END',
    UNDETERMINED: 'UNDETERMINED'
  }
};

export { NativeModules };
