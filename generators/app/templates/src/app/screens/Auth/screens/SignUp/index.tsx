import { isIos } from 'constants/platform';

import React, { useState } from 'react';
import {
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  View
} from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { createStackNavigator } from '@react-navigation/stack';
import { useForm } from 'react-hook-form';
import i18next from 'i18next';
import { CustomButton, CustomText, CustomTextInput } from 'app/components';
import { Navigation } from 'interfaces/navigation';
import { FIELDS, SIGNUP_INITIAL_VALUES } from 'app/screens/Auth/constants';
import authService from 'services/auth';
import {
  validationsWrapper,
  validateRequired,
  validateEmail,
  validateMinLength,
  validateOnlyText
} from 'utils/validations';
import './i18n';
import LoadingView from 'app/components/LoadableView';
import Routes from 'app/navigation/routes';
import { appScreensNavOptions } from 'app/navigation/config/screensOptions';

import styles from './styles';

function SignUp({ navigation }: Navigation) {
  const [loading, setLoading] = useState(false);
  const [signupError, setSignupError] = useState('');
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = async (data: any) => {
    setLoading(true);
    const response = await authService.signup(data);
    setLoading(false);
    if (response.ok) {
      navigation.goBack();
    } else {
      setSignupError(response.problem);
    }
    Keyboard.dismiss();
  };

  const hasSignUpError = Object.keys(errors).length > 0 || !!signupError;
  return (
    <LoadingView testID="signup-screen-container-view" isLoading={loading}>
      <ScrollView
        testID="scrollview-form-container"
        bounces={false}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
        style={styles.stretchAndFlex}>
        <TouchableWithoutFeedback
          testID="dismiss-keyboard-touchable"
          onPress={Keyboard.dismiss}>
          <View style={[styles.stretchAndFlex, styles.form]}>
            <CustomTextInput
              control={control}
              name={FIELDS.name}
              rules={{
                validate: validationsWrapper([
                  validateRequired,
                  validateOnlyText
                ])
              }}
              defaultValue={SIGNUP_INITIAL_VALUES[FIELDS.name]}
              label={i18next.t('SIGNUP:NAME')}
              error={errors[FIELDS.name]}
              errorMessage={errors[FIELDS.name]?.message}
              labelTestID="input-title-name"
              errorTestID="input-error-name"
            />
            <CustomTextInput
              control={control}
              name={FIELDS.surname}
              rules={{
                validate: validationsWrapper([
                  validateRequired,
                  validateOnlyText
                ])
              }}
              defaultValue={SIGNUP_INITIAL_VALUES[FIELDS.surname]}
              label={i18next.t('SIGNUP:SURNAME')}
              error={errors[FIELDS.surname]}
              errorMessage={errors[FIELDS.surname]?.message}
              labelTestID="input-title-surname"
              errorTestID="input-error-surname"
            />
            <CustomTextInput
              control={control}
              name={FIELDS.birthDate}
              rules={{ validate: validateRequired }}
              defaultValue={SIGNUP_INITIAL_VALUES[FIELDS.birthDate]}
              label={i18next.t('SIGNUP:BIRTH_DATE')}
              error={errors[FIELDS.birthDate]}
              errorMessage={errors[FIELDS.birthDate]?.message}
              inputProps={{
                placeholder: i18next.t('SIGNUP:BIRTH_DATE_PLACEHOLDER')
              }}
              labelTestID="input-title-birthdate"
              errorTestID="input-error-birthdate"
            />
            <CustomTextInput
              control={control}
              name={FIELDS.email}
              rules={{
                validate: validationsWrapper([validateRequired, validateEmail])
              }}
              defaultValue={SIGNUP_INITIAL_VALUES[FIELDS.email]}
              label={i18next.t('SIGNUP:MAIL')}
              error={errors[FIELDS.email]}
              errorMessage={errors[FIELDS.email]?.message}
              inputProps={{
                keyboardType: 'email-address',
                placeholder: i18next.t('SIGNUP:MAIL_PLACEHOLDER')
              }}
              labelTestID="input-title-email"
              errorTestID="input-error-email"
            />
            <CustomTextInput
              control={control}
              name={FIELDS.password}
              rules={{
                validate: validationsWrapper([
                  validateRequired,
                  validateMinLength(8)
                ])
              }}
              defaultValue={SIGNUP_INITIAL_VALUES[FIELDS.password]}
              label={i18next.t('SIGNUP:PASSWORD')}
              error={errors[FIELDS.password]}
              errorMessage={errors[FIELDS.password]?.message}
              inputProps={{ secureTextEntry: true }}
              labelTestID="input-title-pass"
              errorTestID="input-error-pass"
            />
            <CustomTextInput
              control={control}
              name={FIELDS.phoneNumber}
              defaultValue={SIGNUP_INITIAL_VALUES[FIELDS.phoneNumber]}
              label={i18next.t('SIGNUP:PHONE_NUMBER')}
              error={errors[FIELDS.phoneNumber]}
              errorMessage={errors[FIELDS.phoneNumber]?.message}
              inputProps={{
                keyboardType: 'phone-pad',
                placeholder: i18next.t('SIGNUP:PHONE_NUMBER_PLACEHOLDER')
              }}
              labelTestID="input-title-phone"
              errorTestID="input-error-phone"
            />
            {!!signupError && (
              <CustomText error center>
                {i18next.t('SIGNUP:SIGNUP_FAILURE')}
              </CustomText>
            )}
            <CustomButton
              primary
              testID="submit-signup-button"
              onPress={handleSubmit(onSubmit)}
              style={styles.formButton}
              title={i18next.t('SIGNUP:SIGN_UP')}
              disabled={hasSignUpError}
            />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
      {isIos && <KeyboardSpacer />}
    </LoadingView>
  );
}

const Stack = createStackNavigator();

const SignupScreen = () => (
  <Stack.Screen
    name={Routes.SignUp}
    component={SignUp}
    options={appScreensNavOptions[Routes.SignUp]}
  />
);

export default SignupScreen;
