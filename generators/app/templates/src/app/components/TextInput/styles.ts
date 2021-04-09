import colors from 'constants/colors';

import { sizes } from 'config/fonts';
import { StyleSheet } from 'react-native';
import { mapSizesStyles } from 'utils/style';

export default StyleSheet.create({
  container: {
    marginVertical: 10
  },
  base: {
    backgroundColor: colors.transparent
  },
  center: {
    textAlign: 'center'
  },
  justify: {
    textAlign: 'justify' // iOS only
  },
  right: {
    textAlign: 'right'
  },
  ...mapSizesStyles(sizes)
});
