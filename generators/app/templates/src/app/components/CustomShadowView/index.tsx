import React, { useCallback } from 'react';
import { View } from 'react-native';
import { getCustomStyles } from '@utils/styleUtils';

import { CustomShadowViewProps, VARIANTS } from './model';
import styles from './styles';

const CustomShadowView = ({
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
    <View {...viewProps} style={[styles.base, customStyles(), style]}>
      {children}
    </View>
  );
};

export default CustomShadowView;
