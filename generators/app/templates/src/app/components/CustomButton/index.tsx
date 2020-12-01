import React, { useCallback, memo } from 'react';
import { TouchableOpacity } from 'react-native';
import { getCustomStyles } from 'utils/styleUtils';

import CustomText from '../CustomText';

import { VARIANTS, CustomButtonProps } from './model';
import styles from './styles';

const CustomButton = (props: CustomButtonProps) => {
  const customStyles = useCallback(
    () => getCustomStyles(VARIANTS, props, styles),
    [props]
  );
  const customTextStyles = useCallback(
    () => getCustomStyles(VARIANTS, props, styles, 'Content'),
    [props]
  );
  const {
    onPress,
    style,
    activeOpacity,
    title,
    disabled = false,
    textStyle,
    textProps,
    radius = 10,
    borderWidth = 0.5
  } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        (radius && { borderRadius: radius }) || {},
        (borderWidth && { borderWidth: borderWidth }) || {},
        customStyles(),
        style
      ]}
      activeOpacity={activeOpacity}
      disabled={disabled}>
      {title && (
        <CustomText
          white
          {...textProps}
          style={[customTextStyles(), textStyle]}>
          {title}
        </CustomText>
      )}
    </TouchableOpacity>
  );
};

CustomButton.defaultProps = {
  activeOpacity: 0.8
};

export default memo(CustomButton);
