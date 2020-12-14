import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from 'redux/auth';

import './i18n';
import Swiper from './components/Swiper';

function OnboardingContainer() {
  const dispatch = useDispatch();
  const handleSkipOnboarding = () =>
    dispatch(authActions.setHasAccessOnboarding(true));
  return <Swiper onSkip={handleSkipOnboarding} />;
}

export default memo(OnboardingContainer);
