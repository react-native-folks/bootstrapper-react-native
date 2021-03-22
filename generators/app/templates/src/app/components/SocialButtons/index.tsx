import React from 'react';
import { socialNetworks } from 'interfaces/socials';
import SocialButtonComponents from './constants';

interface SocialButtonProps {
  useNativeButton?: boolean;
  socialNetwork: socialNetworks;
  onSuccess: (token: string) => void;
  onError: (error: any) => void;
  isLoggedIn?: boolean;
}

const SocialButton = ({
  useNativeButton = false,
  socialNetwork,
  onSuccess,
  onError,
  isLoggedIn
}: SocialButtonProps) => {
  const SocialButtonComponent = SocialButtonComponents[socialNetwork];
  return (
    <SocialButtonComponent.button
      useNativeButton={useNativeButton}
      onSuccess={onSuccess}
      onError={onError}
      isLoggedIn={isLoggedIn}
    />
  );
};

export default SocialButton;
