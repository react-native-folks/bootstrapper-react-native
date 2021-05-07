import React, { useCallback } from 'react';
import { useController } from 'react-hook-form';
import { getCustomStyles } from 'utils/style';
import { TextInput as PaperTextInput, HelperText } from 'react-native-paper';
import { TextInput as NativeTextInput } from 'react-native';

import { TextInputProps, VARIANTS } from './model';
import styles from './styles';

const TextInput = React.forwardRef(
  (
    {
      testID,
      errorTestID,
      control,
      name,
      defaultValue,
      rules = {},
      style,
      ...inputProps
    }: TextInputProps,
    ref: React.Ref<NativeTextInput>
  ) => {
    const customStyles = useCallback(
      () => getCustomStyles(VARIANTS, inputProps, styles),
      [inputProps]
    );

    const {
      field: { onChange, onBlur, value },
      fieldState: { error }
    } = useController({
      name,
      control,
      rules,
      defaultValue
    });

    return (
      <>
        <PaperTextInput
          testID={testID || name}
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          error={!!error}
          style={[styles.base, customStyles(), style]}
          ref={ref}
          {...inputProps}
        />
        <HelperText testID={errorTestID} type="error" visible={!!error}>
          {error?.message}
        </HelperText>
      </>
    );
  }
);

export default TextInput;
