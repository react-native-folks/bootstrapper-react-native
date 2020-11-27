import React, { ReactElement, useEffect } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import {
  AppleButton,
  appleAuth
} from '@invertase/react-native-apple-authentication';

import styles from './styles';

async function onAppleButtonPress(
  onSuccess: (data: any) => void,
  onError: (error: any) => void
) {
  try {
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME]
    });
    // get current authentication state for user
    // This method must be tested on a real device. On the iOS simulator it always throws an error.
    const credentialState = await appleAuth.getCredentialStateForUser(
      appleAuthRequestResponse.user
    );
    if (credentialState === appleAuth.State.AUTHORIZED) {
      onSuccess(appleAuthRequestResponse.identityToken);
    } else {
      console.log('Unauthorized. State ID:', credentialState);
      throw new Error('Unauthorized');
    }
  } catch (error) {
    onError(error);
  }
}

const AppleNativeButton = ({ onPress }: { onPress: () => void }) => {
  return (
    <AppleButton
      buttonStyle={AppleButton.Style.BLACK}
      buttonType={AppleButton.Type.SIGN_IN}
      style={styles.appleButton}
      onPress={onPress}
    />
  );
};

interface CustomAppleButtonProps {
  onSuccess: (token: any) => void;
  onError: (data: any) => void;
  children?: ReactElement;
  buttonProps?: TouchableOpacityProps;
}

const CustomAppleButton = ({
  onSuccess,
  onError,
  children,
  buttonProps
}: CustomAppleButtonProps) => {
  const handleLogin = () => onAppleButtonPress(onSuccess, onError);
  useEffect(() => {
    if (appleAuth.isSupported)
      console.log('Apple sign in not supported on current device');
  }, []);
  return children ? (
    <TouchableOpacity {...buttonProps} onPress={handleLogin}>
      {children}
    </TouchableOpacity>
  ) : appleAuth.isSupported ? (
    <AppleNativeButton onPress={handleLogin} />
  ) : null;
};

export default CustomAppleButton;
