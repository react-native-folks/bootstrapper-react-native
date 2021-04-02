import React, { useCallback, memo } from 'react';
import { Text as PaperText } from 'react-native-paper';
import { useTheme } from 'hooks/theme';
import { getCustomStyles } from 'utils/style';

import { VARIANTS, TextProps } from './model';
import createStyle from './styles';

const Text = (props: TextProps) => {
  const theme = useTheme();
  const styles = createStyle(theme);
  const customStyles = useCallback(
    () => getCustomStyles(VARIANTS, props, styles),
    [props, styles]
  );
  const { textProps, style, testID, children } = props;
  return (
    <PaperText
      testID={testID || children?.toString()}
      {...textProps}
      style={[styles.base, customStyles(), style]}>
      {children}
    </PaperText>
  );
};

Text.defaultProps = {
  textProps: {}
};

export default memo(Text);
