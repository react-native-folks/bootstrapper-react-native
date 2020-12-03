import { CustomButton } from 'app/components';
import React, { ReactElement } from 'react';
import {
  NativeModules,
  TouchableOpacityProps,
  TouchableOpacity
} from 'react-native';
import Config from 'react-native-config';

import styles from './styles';

const { RNTwitterSignIn } = NativeModules;

RNTwitterSignIn.init(
  Config.TWITTER_COMSUMER_KEY,
  Config.TWITTER_CONSUMER_SECRET
);

interface TwitterResponse {
  authToken?: string;
  authTokenSecret?: string;
  email?: string;
  name?: string;
  userID?: string;
  userName?: string;
}

// Custom Twitter button Manager using the Twitter API provided
const TwitterLoginManager = async (
  onSuccess: (token: any) => void,
  onError: (error: any) => void
) => {
  RNTwitterSignIn.logIn()
    .then((loginData: TwitterResponse) => {
      const { authToken, authTokenSecret } = loginData;
      if (authToken && authTokenSecret) {
        onSuccess(authToken);
      } else {
        onError('Login Error');
      }
    })
    .catch((error: any) => {
      console.log(error);
    });
};

// False Native Twitter button
const NativeTwitterButton = ({ onPress, ...buttonProps }: any) => {
  return (
    <CustomButton
      borderless
      blue
      radius={0}
      style={styles.button}
      textProps={{ small: true }}
      onPress={onPress}
      title="Login with Twitter"
      {...buttonProps}
    />
  );
};

interface TwitterButtonProps {
  onSuccess: (token: any) => void;
  onError: (data: any) => void;
  children?: ReactElement;
  buttonProps?: TouchableOpacityProps;
}

// Exported custom component for use native or custom Twitter login button
// * onSucces: callback to get current user access token
// * onError: callback that return a string with error message o null in case of canlleded state to add custom behaviour
const TwitterButton = ({
  onSuccess,
  onError,
  children,
  buttonProps
}: TwitterButtonProps) => {
  const onPress = () => TwitterLoginManager(onSuccess, onError);
  return children ? (
    <TouchableOpacity {...buttonProps} onPress={onPress}>
      {children}
    </TouchableOpacity>
  ) : (
    <NativeTwitterButton onPress={onPress} {...buttonProps} />
  );
};

export default TwitterButton;
