import AsyncStorage from '@react-native-async-storage/async-storage';

import * as onboardingService from './onboarding';

describe('Auth service methods', () => {
  beforeEach(async () => {
    await AsyncStorage.clear();
  });

  it('Calling setOnboardingAccess service with true value should store access true on storage', async () => {
    await onboardingService.setOnboardingAccess(true);
    expect(
      (await AsyncStorage.getItem('@Onboarding:hasAccess')) === 'true'
    ).toBeTruthy();
  });

  it('Calling setOnboardingAccess service with false value should store access false on storage', async () => {
    await onboardingService.setOnboardingAccess(false);
    expect(
      (await AsyncStorage.getItem('@Onboarding:hasAccess')) === 'false'
    ).toBeTruthy();
  });

  it('Calling getOnboardingAccess service should return stored access value', async () => {
    await AsyncStorage.setItem('@Onboarding:hasAccess', JSON.stringify(true));
    expect(await onboardingService.getOnboardingAccess()).toBeTruthy();
  });
});
