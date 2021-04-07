require('../node_modules/react-native-reanimated/src/reanimated2/jestUtils').setUpTests();

jest.mock(
  'react-native-reanimated',
  () => require('react-native-reanimated/mock').default
);

//@ts-expect-error
global.__reanimatedWorkletInit = jest.fn();
