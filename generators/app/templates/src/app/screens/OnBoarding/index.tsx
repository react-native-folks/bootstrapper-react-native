import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from 'redux/auth';

import './i18n';
import Swiper from './components/Swiper';

function OnBoardingContainer() {
  const dispatch = useDispatch();
  const handleSkipOnBoarding = () =>
    dispatch(authActions.setHasAccessOnBoarding(true));
  return <Swiper onSkip={handleSkipOnBoarding} />;
}

export default memo(OnBoardingContainer);
