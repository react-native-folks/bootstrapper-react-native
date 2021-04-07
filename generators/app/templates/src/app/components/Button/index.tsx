import React, { useCallback, memo } from 'react';
import { getCustomStyles } from 'utils/style';
import { Button as PaperButton } from 'react-native-paper';
import { useTheme } from 'hooks/theme';

import { VARIANTS, ButtonProps } from './model';
import createStyles from './styles';

const Button = ({
  children,
  labelStyle,
  mode = 'contained',
  style,
  testID,
  title,
  ...props
}: ButtonProps) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const customStyles = useCallback(
    () => getCustomStyles(VARIANTS, props, styles),
    [props, styles]
  );

  const labelStyles = useCallback(
    () => getCustomStyles(VARIANTS, props, styles, 'Label'),
    [props, styles]
  );

  return (
    <PaperButton
      testID={testID || title || children}
      mode={mode}
      style={[customStyles(), style]}
      labelStyle={[labelStyles(), labelStyle]}
      {...props}>
      {title || children}
    </PaperButton>
  );
};

export default memo(Button);
