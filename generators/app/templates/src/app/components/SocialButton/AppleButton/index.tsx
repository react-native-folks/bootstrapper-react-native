import React, { useEffect } from 'react';
import {
  AppleButton as NativeAppleButton,
  appleAuth,
  AppleRequestResponse
} from '@invertase/react-native-apple-authentication';
import { socialNetworks } from 'interfaces/socials';

import Button from '../Button';

import styles from './styles';

async function onAppleButtonPress(
  onSuccess: (data: string) => void,
  onError: (error: any) => void
) {
  try {
    const appleAuthRequestResponse: AppleRequestResponse = await appleAuth.performRequest(
      {
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME]
      }
    );
    // TODO - Add response interface
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
    <NativeAppleButton
      buttonStyle={NativeAppleButton.Style.BLACK}
      buttonType={NativeAppleButton.Type.SIGN_IN}
      style={styles.appleButton}
      onPress={onPress}
    />
  );
};

interface AppleButtonProps {
  onSuccess: (token: any) => void;
  onError: (error: any) => void;
  useNativeButton?: boolean;
}

const AppleButton = ({
  onSuccess,
  onError,
  useNativeButton
}: AppleButtonProps) => {
  const handleLogin = () => onAppleButtonPress(onSuccess, onError);
  useEffect(() => {
    if (!appleAuth.isSupported) {
      console.warn('Apple sign in not supported on current device');
    }
  }, []);
  return appleAuth.isSupported ? (
    !useNativeButton ? (
      <Button onPress={handleLogin} social={socialNetworks.APPLE} />
    ) : (
      <AppleNativeButton onPress={handleLogin} />
    )
  ) : null;
};

export default AppleButton;
