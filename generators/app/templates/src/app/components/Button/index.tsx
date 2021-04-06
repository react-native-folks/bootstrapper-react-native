import React, { useCallback, memo } from 'react';
import { getCustomStyles } from 'utils/style';
import { Button } from 'react-native-paper';
import { useTheme } from 'hooks/theme';

import { VARIANTS, ButtonProps } from './model';
import createStyles from './styles';

const PaperButton = ({
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
    <Button
      testID={testID || title || children}
      mode={mode}
      style={[customStyles(), style]}
      labelStyle={[labelStyles(), labelStyle]}
      {...props}>
      {title || children}
    </Button>
  );
};

export default memo(PaperButton);
