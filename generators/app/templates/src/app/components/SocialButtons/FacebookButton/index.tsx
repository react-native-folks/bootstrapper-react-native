import React, { ReactElement } from 'react';
import { View, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import {
  LoginButton,
  AccessToken,
  LoginManager,
  LoginResult
} from 'react-native-fbsdk';

import styles from './styles';

// Custom facebook button Manager using the Facebook API provided
const FacebookLoginManager = (
  onSuccess: (token: any) => void,
  onError: (error: any) => void
) =>
  LoginManager.logInWithPermissions(['public_profile']).then(
    (result: LoginResult) => {
      if (result.isCancelled) {
        onError(null);
      } else {
        AccessToken.getCurrentAccessToken().then(data => {
          onSuccess(data?.accessToken?.toString());
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
  onSuccess: (token: any) => void;
  onError: (error: any) => void;
}) => {
  return (
    <View style={styles.nativeButtonContainer}>
      <LoginButton
        onLoginFinished={(error, result) => {
          if (error) {
            onError(error);
          } else if (result.isCancelled) {
            onError(null);
          } else {
            AccessToken.getCurrentAccessToken().then(data => {
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
  onSuccess: (token: any) => void;
  onError: (data: any) => void;
  children?: ReactElement;
  buttonProps?: TouchableOpacityProps;
  isLoggedIn?: boolean; // for custom purposes
}

const FacebookButton = ({
  onSuccess,
  onError,
  children,
  buttonProps,
  isLoggedIn
}: FacebookButtonProps) => {
  const onPress = () => {
    if (children) {
      isLoggedIn
        ? FacebookLogout(onSuccess)
        : FacebookLoginManager(onSuccess, onError);
    }
  };
  return children ? (
    <TouchableOpacity {...buttonProps} onPress={onPress}>
      {children}
    </TouchableOpacity>
  ) : (
    <NativeFacebookButton onSuccess={onSuccess} onError={onError} />
  );
};

export default FacebookButton;
