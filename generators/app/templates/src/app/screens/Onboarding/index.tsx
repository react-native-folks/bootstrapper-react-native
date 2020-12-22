import React from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from 'redux/auth';
import { createStackNavigator } from '@react-navigation/stack';
import { appScreensNavOptions } from 'app/navigation/config/screensOptions';
import Routes from 'app/navigation/routes';

import Swiper from './components/Swiper';
import './i18n';

function OnboardingContainer() {
  const dispatch = useDispatch();
  const handleSkipOnboarding = () =>
    dispatch(authActions.setHasAccessOnboarding(true));
  return <Swiper onSkip={handleSkipOnboarding} />;
}

const Stack = createStackNavigator();

const OnboardingScreen = () => (
  <Stack.Screen
    name={Routes.Onboarding}
    component={OnboardingContainer}
    options={appScreensNavOptions[Routes.Onboarding]}
  />
);

export default OnboardingScreen;
