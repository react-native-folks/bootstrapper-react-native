import React, { useCallback } from 'react';
import { View, TextInput } from 'react-native';
import { Controller } from 'react-hook-form';
import { getCustomStyles } from 'utils/styleUtils';
import { CustomText } from 'app/components';

import { CustomTextInputProps, VARIANTS } from './model';
import styles from './styles';

const CustomTextInput = ({
  control,
  name,
  defaultValue = '',
  rules = {},
  label = '',
  labelProps,
  style,
  errorMessage = '',
  inputProps,
  ...props
}: CustomTextInputProps) => {
  const customStyles = useCallback(
    () => getCustomStyles(VARIANTS, props, styles),
    [props]
  );
  return (
    <Controller
      control={control}
      render={({ onChange, onBlur, value }) => (
        <View style={styles.container}>
          {label !== '' && (
            <CustomText gray bold small {...labelProps}>
              {label}
            </CustomText>
          )}
          <TextInput
            onBlur={onBlur}
            onChangeText={newValue => onChange(newValue)}
            value={value}
            {...inputProps}
            style={[styles.base, customStyles(), style]}
          />
          {errorMessage !== '' && (
            <CustomText error xsmall>
              {errorMessage}
            </CustomText>
          )}
        </View>
      )}
      name={name}
      rules={rules}
      defaultValue={defaultValue}
    />
  );
};

export default CustomTextInput;
