import React, { ReactElement } from 'react';
import { View, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import {
  GoogleSignin,
  statusCodes,
  GoogleSigninButton
} from '@react-native-community/google-signin';

import styles from './styles';

GoogleSignin.configure();

// Custom Google button Manager using the Google API provided
const GoogleLoginManager = async (
  onSuccess: (token: any) => void,
  onError: (error: any) => void
) => {
  try {
    // TODO - Add responses interface
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    onSuccess(userInfo.idToken);
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      onError('Cancelled');
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      onError('In progress');
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      onError('Google play is not available');
      // play services not available or outdated
    } else {
      onError(error.code);
    }
  }
};

// Native Google button
const NativeGoogleButton = ({ onPress, ...buttonProps }: any) => {
  return (
    <View style={styles.nativeButtonContainer}>
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Standard}
        color={GoogleSigninButton.Color.Dark}
        onPress={onPress}
        disabled={buttonProps.disabled}
      />
    </View>
  );
};

// Exported custom component for use native or custom Google login button
// * onSucces: callback to get current user access token
// * onError: callback that return a string with error message o null in case of canlleded state to add custom behaviour
interface GoogleButtonProps {
  onSuccess: (token: any) => void;
  onError: (data: any) => void;
  children?: ReactElement;
  buttonProps?: TouchableOpacityProps;
}

const GoogleButton = ({
  onSuccess,
  onError,
  children,
  buttonProps
}: GoogleButtonProps) => {
  const onPress = () => GoogleLoginManager(onSuccess, onError);
  return children ? (
    <TouchableOpacity {...buttonProps} onPress={onPress}>
      {children}
    </TouchableOpacity>
  ) : (
    <NativeGoogleButton onPress={onPress} {...buttonProps} />
  );
};

export default GoogleButton;
