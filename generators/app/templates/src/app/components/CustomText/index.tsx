import React, { useCallback, memo } from 'react';
import { Text } from 'react-native';
import { getCustomStyles } from 'utils/style';

import { VARIANTS, CustomTextProps } from './model';
import styles from './styles';

const CustomText = (props: CustomTextProps) => {
  const customStyles = useCallback(
    () => getCustomStyles(VARIANTS, props, styles),
    [props]
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
