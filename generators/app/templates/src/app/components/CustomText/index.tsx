import React, { useCallback, memo } from 'react';
import { Text } from 'react-native';
import { useTheme } from 'react-native-paper';
import { getCustomStyles } from 'utils/style';
import { CustomThemeType } from 'config/theme';

import { VARIANTS, CustomTextProps } from './model';
import createStyle from './styles';

const CustomText = (props: CustomTextProps) => {
  const theme = useTheme() as CustomThemeType;
  const styles = createStyle(theme);
  const customStyles = useCallback(
    () => getCustomStyles(VARIANTS, props, styles),
    [props, styles]
  );
  const { textProps, style, testID, children } = props;
  return (
    <Text
      testID={testID || children?.toString()}
      {...textProps}
      style={[styles.base, customStyles(), style]}>
      {children}
    </Text>
  );
};

CustomText.defaultProps = {
  textProps: {}
};

export default memo(CustomText);
