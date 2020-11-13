import { StyleSheet } from 'react-native';
import {
  transparent,
  blue,
  black,
  green,
  gray,
  white
} from '@constants/colors';

const borderlessStyle = {
  borderWidth: 0,
  backgroundColor: transparent
};

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    backgroundColor: blue,
    borderColor: gray
  },
  borderless: borderlessStyle,
  radial: {
    borderRadius: 100
  },
  black: {
    backgroundColor: black
  },
  blackContent: {
    color: white
  },
  white: {
    backgroundColor: white
  },
  whiteContent: {
    color: black
  },
  gray: {
    backgroundColor: gray
  },
  grayContent: {
    color: black
  },
  borderlessContent: {
    color: gray
  },
  green: {
    backgroundColor: green
  },
  greenContent: {
    color: white
  },
  blue: {
    backgroundColor: blue
  },
  blueContent: {
    color: white
  },
  transparent: {
    backgroundColor: transparent
  },
  transparentContent: {
    color: black
  }
});
