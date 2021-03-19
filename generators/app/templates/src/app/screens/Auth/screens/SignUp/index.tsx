import { isIos } from 'constants/platform';

import i18next from 'i18next';
import React, { useRef, useState, createRef } from 'react';
import {
  Keyboard,
  TextInput as NativeTextInput,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { createStackNavigator } from '@react-navigation/stack';
import { useForm } from 'react-hook-form';
import { CustomButton, CustomText, TextInput } from 'app/components';
import { Navigation } from 'interfaces/navigation';
import {
  FIELDS,
  SIGNUP_INITIAL_VALUES,
  SIGNUP_FIELDS
} from 'app/screens/Auth/constants';
import authService from 'services/auth';
import LoadingView from 'app/components/LoadableView';
import Routes from 'app/navigation/routes';
import { appScreensNavOptions } from 'app/navigation/config/screensOptions';

import './i18n';
import styles from './styles';

function SignUp({ navigation }: Navigation) {
  const [loading, setLoading] = useState(false);
  const [signupError, setSignupError] = useState('');
  const { control, handleSubmit, errors } = useForm();

  const refs = useRef(SIGNUP_FIELDS.map(() => createRef<NativeTextInput>()));

  const handleTextInputSubmit = (next: number) => () => {
    const node = refs.current[next]!;
    node.current?.focus();
  };

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
      <KeyboardAwareScrollView
        testID="scrollview-form-container"
        bounces={false}
        keyboardShouldPersistTaps="handled"
        enableOnAndroid
        keyboardOpeningTime={0}
        contentContainerStyle={styles.container}
        extraHeight={200}
        style={styles.stretchAndFlex}
        scrollEnabled={false}>
        <TouchableWithoutFeedback
          testID="dismiss-keyboard-touchable"
          onPress={Keyboard.dismiss}
          accessible={false}>
          <View style={[styles.stretchAndFlex, styles.form]}>
            {SIGNUP_FIELDS.map(({ name, ...props }, i) => {
              const lastTextInput = i === SIGNUP_FIELDS.length - 1;
              return (
                <TextInput
                  key={name}
                  name={name}
                  control={control}
                  {...props}
                  defaultValue={SIGNUP_INITIAL_VALUES[name]}
                  error={errors[name]}
                  errorMessage={errors[FIELDS.name]?.message}
                  labelTestID={`input-title-${name.toLowerCase()}`}
                  errorTestID={`input-error-${name.toLowerCase()}`}
                  ref={refs.current[i]}
                  returnKeyType={lastTextInput ? 'done' : 'next'}
                  blurOnSubmit={lastTextInput}
                  onSubmitEditing={
                    !lastTextInput ? handleTextInputSubmit(i + 1) : undefined
                  }
                  autoCorrect={false}
                />
              );
            })}
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
      </KeyboardAwareScrollView>
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
