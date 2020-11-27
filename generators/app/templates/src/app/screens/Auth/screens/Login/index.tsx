import React, { useCallback } from 'react';
import { Keyboard, TouchableWithoutFeedback, View, Alert } from 'react-native';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import i18next from 'i18next';
import CustomButton from '@components/CustomButton';
import CustomText from '@components/CustomText';
import Routes from '@constants/routes';
import { Navigation } from '@interfaces/navigation';
import { State } from '@interfaces/reduxInterfaces';
import { actionCreators as AuthActions } from '@redux/auth/actions';
import { FIELDS, LOGIN_INITIAL_VALUES } from '@screens/Auth/constants';
import CustomTextInput from '@app/components/CustomTextInput';
import LoadableImage from '@app/components/LoadableImage';
import FacebookButton from '@app/components/SocialButtons/FacebookButton';
import {
  validationsWrapper,
  validateRequired,
  validateEmail
} from '@utils/validations/validateUtils';

import './i18n';

import styles from './styles';

function Login({ navigation }: Navigation) {
  const dispatch = useDispatch();
  const { control, handleSubmit, errors } = useForm();
  const hasLoginError = useSelector<State, boolean>(
    (state: State) => !!state.auth.currentUserError
  );
  const handleLogin: (values: any) => void = useCallback(
    values => {
      Keyboard.dismiss();
      if (!Object.keys(errors).length) dispatch(AuthActions.login(values));
    },
    [dispatch, errors]
  );
  const handleGoToSignUp = () => navigation.navigate(Routes.SignUp);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.form}>
          <LoadableImage
            url={'https://www.mahisoft.com/img/logo.png'}
            style={styles.logo}
          />
          <CustomTextInput
            control={control}
            name={FIELDS.email}
            rules={{
              validate: validationsWrapper([validateRequired, validateEmail])
            }}
            defaultValue={LOGIN_INITIAL_VALUES[FIELDS.email]}
            label={i18next.t('LOGIN:MAIL')}
            inputProps={{
              placeholder: i18next.t('LOGIN:MAIL_PLACEHOLDER'),
              keyboardType: 'email-address'
            }}
            error={errors[FIELDS.email]}
            errorMessage={errors[FIELDS.email]?.message}
          />
          <CustomTextInput
            control={control}
            name={FIELDS.password}
            rules={{ validate: validateRequired }}
            defaultValue={LOGIN_INITIAL_VALUES[FIELDS.password]}
            label={i18next.t('LOGIN:PASSWORD')}
            inputProps={{ secureTextEntry: true }}
            errorMessage={errors[FIELDS.password]?.message}
          />
          {hasLoginError && (
            <CustomText error center>
              {i18next.t('LOGIN:LOGIN_FAILURE')}
            </CustomText>
          )}
        </View>
        <CustomButton
          green
          radius={3}
          onPress={handleSubmit(handleLogin)}
          style={styles.formButton}
          title={i18next.t('LOGIN:LOG_IN')}
          disabled={hasLoginError}
        />
        {/* TODO replace for template file here*/}
        <FacebookButton
          onSuccess={data => Alert.alert('logeado', data)}
          onError={error => Alert.alert('ERROR', error)}
        />
        <CustomButton
          borderless
          onPress={handleGoToSignUp}
          style={styles.formButton}
          title={i18next.t('LOGIN:SIGN_UP')}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Login;
