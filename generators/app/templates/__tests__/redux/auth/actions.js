import { authActions, authActionsTypes } from 'redux/auth';
import AuthService from 'services/auth';
import * as OnboardingService from 'services/onboarding';

import { store } from '../store';

describe('testing auth actions', () => {
  beforeEach(() => {
    store.clearActions();
  });
  test('call init should return AUTH_INIT action with payloads', async () => {
    jest.spyOn(AuthService, 'authSetup').mockImplementation(() => 'User');
    jest
      .spyOn(OnboardingService, 'getOnboardingAccess')
      .mockImplementation(() => true);
    const initActionResult = await store.dispatch(authActions.init({}));
    expect(initActionResult.payload).toEqual({
      currentUser: 'User',
      hasAccessOnboarding: true
    });
    expect(
      initActionResult.type.includes(authActionsTypes.AUTH_INIT)
    ).toBeTruthy();
  });

  // LOGIN FEATURE
  test('call login should return LOGIN action with payloads', async () => {
    jest.spyOn(AuthService, 'login').mockImplementation(() => ({
      data: 'userData'
    }));
    const loginActionResult = await store.dispatch(
      authActions.login({ email: 'user', password: '123' })
    );
    expect(loginActionResult.payload).toEqual({
      currentUser: 'userData'
    });
    expect(
      loginActionResult.type.includes(authActionsTypes.LOGIN)
    ).toBeTruthy();
  });

  test('call logout should return LOGOUT action with payloads', async () => {
    jest.spyOn(AuthService, 'logout').mockImplementation(() => ({
      data: null
    }));
    const logoutActionResult = await store.dispatch(authActions.logout());
    expect(logoutActionResult.payload).toEqual({
      currentUser: null
    });
    expect(
      logoutActionResult.type.includes(authActionsTypes.LOGOUT)
    ).toBeTruthy();
  });

  // SOCIALS WITH LOGIN
  test('call socialLogin with token should return SOCIAL_LOGIN action with current user payload', async () => {
    jest.spyOn(AuthService, 'login').mockImplementation(() => ({
      data: 'userData'
    }));
    const socialLoginActionResult = await store.dispatch(
      authActions.socialLogin('myToken')
    );
    expect(socialLoginActionResult.payload).toEqual({
      currentUser: 'userData'
    });
    expect(
      socialLoginActionResult.type.includes(authActionsTypes.SOCIAL_LOGIN)
    ).toBeTruthy();
  });

  // ONBOARDING
  test('call setHasAccessOnboarding with false should return HAS_ACCESS action with false param on payload', async () => {
    const onboardingActionResult = await store.dispatch(
      authActions.setHasAccessOnboarding(false)
    );
    expect(onboardingActionResult.payload).toEqual({
      hasAccessOnboarding: false
    });
    expect(
      onboardingActionResult.type.includes(authActionsTypes.HAS_ACCESS)
    ).toBeTruthy();
  });

  test('call setHasAccessOnboarding with true should return HAS_ACCESS action with true param on payload', async () => {
    const onboardingActionResult = await store.dispatch(
      authActions.setHasAccessOnboarding(true)
    );
    expect(onboardingActionResult.payload).toEqual({
      hasAccessOnboarding: true
    });
    expect(
      onboardingActionResult.type.includes(authActionsTypes.HAS_ACCESS)
    ).toBeTruthy();
  });
});
