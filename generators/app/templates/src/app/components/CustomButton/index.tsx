import { isIos } from 'constants/platform';

import React, { useCallback, memo } from 'react';
import { Pressable } from 'react-native';
import { useTheme } from 'react-native-paper';
import { getCustomStyles } from 'utils/style';
import { CustomThemeType } from 'config/theme';

import CustomText from '../CustomText';

import { VARIANTS, CustomButtonProps } from './model';
import createStyle, { defaultAndroidRipple } from './styles';

const CustomButton = (props: CustomButtonProps) => {
  const theme = useTheme() as CustomThemeType;
  const styles = createStyle(theme);
  const customStyles = useCallback(
    () => getCustomStyles(VARIANTS, props, styles),
    [props, styles]
  );
  const customTextStyles = useCallback(
    () => getCustomStyles(VARIANTS, props, styles, 'Content'),
    [props, styles]
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
      testID={title ? title : ''}
      onPress={onPress}
      android_ripple={androidRipple || defaultAndroidRipple}
      style={({ pressed }: { pressed: boolean }) => [
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
                onPrimary={otherProps.primary}
                onSecondary={otherProps.secondary}
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
