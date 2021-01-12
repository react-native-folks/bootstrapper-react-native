import AsyncStorage from '@react-native-async-storage/async-storage';

import * as OnboardingService from './onboarding';

describe('Auth service methods', () => {
  beforeEach(async () => {
    await AsyncStorage.clear();
  });

  it('Calling setOnboardingAccess service with true value should store access true on storage', async () => {
    await OnboardingService.setOnboardingAccess(true);
    expect(
      (await AsyncStorage.getItem('@Onboarding:hasAccess')) === 'true'
    ).toBeTruthy();
  });

  it('Calling setOnboardingAccess service with false value should store access false on storage', async () => {
    await OnboardingService.setOnboardingAccess(false);
    expect(
      (await AsyncStorage.getItem('@Onboarding:hasAccess')) === 'false'
    ).toBeTruthy();
  });

  it('Calling getOnboardingAccess service should return stored access value', async () => {
    await AsyncStorage.setItem('@Onboarding:hasAccess', JSON.stringify(true));
    expect(await OnboardingService.getOnboardingAccess()).toBeTruthy();
  });
});
