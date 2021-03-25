import React from 'react';
import { View, ViewStyle } from 'react-native';
import {
  LoginButton,
  AccessToken,
  LoginManager,
  LoginResult
} from 'react-native-fbsdk';
import { socialNetworks } from 'interfaces/socials';

import Button from '../Button';

import styles from './styles';

// Custom facebook button Manager using the Facebook API provided
const FacebookLoginManager = (
  onSuccess: (token: string) => void,
  onError: (error: any) => void
) =>
  LoginManager.logInWithPermissions(['public_profile']).then(
    (result: LoginResult) => {
      if (result.isCancelled) {
        onError(null);
      } else {
        // TODO - Add data interface
        AccessToken.getCurrentAccessToken().then((data: AccessToken | null) => {
          onSuccess(data?.accessToken?.toString() || '');
        });
      }
    },
    onError
  );

const FacebookLogout = (onSucces: (data: any) => void) => {
  LoginManager.logOut();
  onSucces(null);
};

// Native facebook button
const NativeFacebookButton = ({
  onSuccess,
  onError
}: {
  onSuccess: (token: string) => void;
  onError: (error: any) => void;
}) => {
  return (
    <View style={styles.nativeButtonContainer}>
      <LoginButton
        onLoginFinished={(error: any, result: any) => {
          if (error) {
            onError(error);
          } else if (result.isCancelled) {
            onError(null);
          } else {
            AccessToken.getCurrentAccessToken().then((data: any) => {
              onSuccess(data?.accessToken?.toString());
            });
          }
        }}
      />
    </View>
  );
};

// Exported custom component for use native or custom facebook login button
// * onSucces: callback to get current user access token
// * onError: callback that return a string with error message o null in case of canlleded state to add custom behaviour
interface FacebookButtonProps {
  onSuccess: (token: string) => void;
  onError: (error: any) => void;
  useNativeButton?: boolean;
  style?: ViewStyle;
  isLoggedIn?: boolean; // for custom purposes
}

const FacebookButton = ({
  onSuccess,
  onError,
  useNativeButton,
  isLoggedIn
}: FacebookButtonProps) => {
  const onPress = () => {
    if (!useNativeButton) {
      isLoggedIn
        ? FacebookLogout(onSuccess)
        : FacebookLoginManager(onSuccess, onError);
    }
  };
  return !useNativeButton ? (
    <Button onPress={onPress} social={socialNetworks.FACEBOOK} />
  ) : (
    <NativeFacebookButton onSuccess={onSuccess} onError={onError} />
  );
};

export default FacebookButton;
