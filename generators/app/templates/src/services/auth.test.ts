import AsyncStorage from '@react-native-async-storage/async-storage';
import api from 'config/api';

import authService from './auth';

describe('Auth service methods', () => {
  const loginData = {
    email: 'testman@test.com',
    password: '123123'
  };
  const fakeUser = {
    user: { name: 'tester', lastname: 'man', username: 'testerman' },
    sessionToken: 'sessiontoken123'
  };

  beforeEach(async () => {
    await AsyncStorage.clear();
  });

  it('Calling setCurrentUser with user params should set api header session token', async () => {
    await authService.setCurrentUser(fakeUser);
    expect(
      api.headers.Authorization.includes(fakeUser.sessionToken)
    ).toBeTruthy();
  });

  it('Calling setCurrentUser with user params should store user on local data', async () => {
    await authService.setCurrentUser(fakeUser);
    expect(await AsyncStorage.getItem('@Auth:currentUser')).not.toBeNull();
  });

  it('Calling getCurrentUser should return user on stored on local data', async () => {
    await authService.setCurrentUser(fakeUser);
    expect(await authService.getCurrentUser()).not.toBeNull();
  });

  it('Calling getCurrentUser when there is no stored user should return null', async () => {
    expect(await authService.getCurrentUser()).toBeNull();
  });

  it('Stored user should be null after calling removeCurrentUser', async () => {
    await authService.setCurrentUser(fakeUser);
    await authService.removeCurrentUser();
    expect(await AsyncStorage.getItem('@Auth:currentUser')).toBeNull();
  });

  it('Authorization header should be settead if user exist after call authSetup', async () => {
    await AsyncStorage.setItem('@Auth:currentUser', JSON.stringify(fakeUser));
    await authService.authSetup();
    expect(
      api.headers.Authorization.includes(fakeUser.sessionToken)
    ).toBeTruthy();
  });

  it('Authorization header should be empty string if user does not exist after call authSetup', async () => {
    api.setHeader('Authorization', '');
    await authService.authSetup();
    expect(api.headers.Authorization === '').toBeTruthy();
  });

  // Login feature - Update this tests after update auth login and logout services with your businesss rules
  it('Calling Login service should return user data', async () => {
    const response = await authService.login(loginData);
    expect(response.data).not.toBeNull();
  });

  it('Calling Logout service should response ok on success logout', async () => {
    const response = await authService.logout();
    expect(response.ok).toBeTruthy();
  });

  it('Calling Signup service should response ok on success signup', async () => {
    const userData = {
      name: 'User',
      surname: 'Test',
      birthDate: '11/11/1990',
      sex: 'female',
      email: 'test@test.com',
      password: '123123',
      phoneNumber: '1122331233'
    };
    const response = await authService.signup(userData);
    expect(response.ok).toBeTruthy();
  });
});
