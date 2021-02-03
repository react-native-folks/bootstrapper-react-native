import React, { useCallback } from 'react';
import { View } from 'react-native';
import { getCustomStyles } from 'utils/style';

import { CustomShadowViewProps, VARIANTS } from './model';
import styles from './styles';

const CustomShadowView = ({
  testID,
  viewProps,
  style,
  children,
  rounded = true,
  medium = true,
  ...props
}: CustomShadowViewProps) => {
  const customStyles = useCallback(
    () => getCustomStyles(VARIANTS, { rounded, medium, ...props }, styles),
    [medium, props, rounded]
  );
  return (
    <View
      testID={testID}
      {...viewProps}
      style={[styles.base, customStyles(), style]}>
      {children}
    </View>
  );
};

export default CustomShadowView;
