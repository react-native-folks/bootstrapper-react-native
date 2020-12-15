import { isIos } from 'constants/platform';

import React, { useCallback, memo } from 'react';
import { Pressable } from 'react-native';
import { getCustomStyles } from 'utils/style';

import CustomText from '../CustomText';

import { VARIANTS, CustomButtonProps } from './model';
import styles, { defaultAndroidRipple } from './styles';

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
    pressedStyle,
    title,
    disabled = false,
    textStyle,
    textProps,
    radius = 10,
    borderWidth = 0.5,
    androidRipple = null,
    children,
    ...otherProps
  } = props;
  return (
    <Pressable
      onPress={onPress}
      android_ripple={androidRipple || defaultAndroidRipple}
      style={({ pressed }) => [
        styles.container,
        (radius && { borderRadius: radius }) || {},
        (borderWidth && { borderWidth: borderWidth }) || {},
        customStyles(),
        style,
        isIos &&
          pressed &&
          (pressedStyle ? pressedStyle : styles.defaultPressed)
      ]}
      {...otherProps}
      disabled={disabled}>
      {(pressed: { pressed: boolean }) =>
        children
          ? children(pressed)
          : title && (
              <CustomText
                white
                {...textProps}
                style={[customTextStyles(), textStyle]}>
                {title}
              </CustomText>
            )
      }
    </Pressable>
  );
};

CustomButton.defaultProps = {
  delayLongPress: 500
};

export default memo(CustomButton);
