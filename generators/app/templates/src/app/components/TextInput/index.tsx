import React, { useCallback } from 'react';
import { Controller } from 'react-hook-form';
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
      defaultValue = '',
      rules = {},
      style,
      errorMessage = '',
      ...inputProps
    }: TextInputProps,
    ref: React.Ref<NativeTextInput>
  ) => {
    const customStyles = useCallback(
      () => getCustomStyles(VARIANTS, inputProps, styles),
      [inputProps]
    );

    const hasErrors = () => errorMessage !== '';

    return (
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <>
            <PaperTextInput
              testID={testID || name}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              error={hasErrors()}
              style={[styles.base, customStyles(), style]}
              ref={ref}
              {...inputProps}
            />
            <HelperText testID={errorTestID} type="error" visible={hasErrors()}>
              {errorMessage}
            </HelperText>
          </>
        )}
        name={name}
        rules={rules}
        defaultValue={defaultValue}
      />
    );
  }
);

export default TextInput;
