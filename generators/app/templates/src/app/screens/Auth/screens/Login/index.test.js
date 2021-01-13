import React from 'react';
import * as reactRedux from 'react-redux';
import * as reduxHook from 'hooks/redux';
import { fireEvent, render, act } from 'react-native-testing-library';
import { Login } from 'app/screens/Auth/screens/Login';

const EMAIL_INPUT_ID = 'email';
const PASS_INPUT_ID = 'password';
const SIGN_UP_BUTTON = 'signup-button';
const ERROR_MESSAGE_ID = 'login-error-message';
const INPUT_ERROR_EMAIL_ID = 'input-error-email';
const INPUT_ERROR_PASS_ID = 'input-error-pass';
const SUBMIT_BUTTON_ID = 'submit-button';

const INVALID_EMAIL = 'hello';
const VALID_EMAIL = 'email@email.com';
const VALID_PASSWORD = 'HelloWord1234';

describe('Login Screen', () => {
  let useDispatchMock = jest.fn();
  const useDispatchSpy = jest.spyOn(reactRedux, 'useDispatch');
  useDispatchSpy.mockImplementation(() => useDispatchMock);
  const navMock = {
    navigate: jest.fn()
  };

  const loginComponent = (props: any = {}) => (
    <Login navigation={navMock} {...props} />
  );

  beforeEach(() => {
    useDispatchMock.mockClear();
    navMock.navigate.mockClear();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Basic Login Snapshot', () => {
    const login = render(loginComponent()).toJSON();
    expect(login).toMatchSnapshot();
  });

  test('Login Error Snapshot', async () => {
    const selectorHookSpy = jest.spyOn(reduxHook, 'useSelector');
    selectorHookSpy.mockReturnValueOnce(false).mockReturnValueOnce(true);
    const login = render(loginComponent());
    expect(login.toJSON()).toMatchSnapshot();
    selectorHookSpy.mockClear();
  });

  test('error message should be displayed if screen receive error from store', async () => {
    const selectorHookSpy = jest.spyOn(reduxHook, 'useSelector');
    selectorHookSpy.mockReturnValueOnce(false).mockReturnValueOnce(true);
    const { queryByTestId } = render(loginComponent());
    const generalMessageError = queryByTestId(ERROR_MESSAGE_ID);
    expect(generalMessageError).not.toBeNull();
  });

  test('After submit without complete fields an error should be displayed on each field', async () => {
    const { getByTestId, queryByTestId } = render(loginComponent());
    const submitButton = getByTestId(SUBMIT_BUTTON_ID);
    // Sanity expectation
    expect(queryByTestId(INPUT_ERROR_EMAIL_ID)).toBeNull();
    expect(queryByTestId(INPUT_ERROR_PASS_ID)).toBeNull();
    await act(async () => {
      fireEvent.press(submitButton);
    });
    expect(getByTestId(INPUT_ERROR_EMAIL_ID)).not.toBeNull();
    expect(getByTestId(INPUT_ERROR_PASS_ID)).not.toBeNull();
  });

  test('Enter invalid email should display a error message on the email field', async () => {
    const { getByTestId, queryByTestId } = render(loginComponent());
    const submitButton = getByTestId(SUBMIT_BUTTON_ID);
    const emailInput = getByTestId(EMAIL_INPUT_ID);
    const passInput = getByTestId(PASS_INPUT_ID);
    await act(async () => {
      fireEvent.changeText(emailInput, INVALID_EMAIL);
      fireEvent.changeText(passInput, VALID_PASSWORD);
      fireEvent.press(submitButton);
    });
    expect(getByTestId(INPUT_ERROR_EMAIL_ID)).not.toBeNull();
    // Sanity expectation
    expect(queryByTestId(INPUT_ERROR_PASS_ID)).toBeNull();
  });

  test('After complete field with valid params, login dispatch should be called', async () => {
    const { getByTestId } = render(loginComponent());
    const submitButton = getByTestId(SUBMIT_BUTTON_ID);
    const emailInput = getByTestId(EMAIL_INPUT_ID);
    const passInput = getByTestId(PASS_INPUT_ID);
    await act(async () => {
      fireEvent.changeText(emailInput, VALID_EMAIL);
      fireEvent.changeText(passInput, VALID_PASSWORD);
      fireEvent.press(submitButton);
    });
    expect(useDispatchMock).toHaveBeenCalledTimes(1);
  });

  test('After correct error on field, login dispatch should be called', async () => {
    const { getByTestId } = render(loginComponent());
    const submitButton = getByTestId(SUBMIT_BUTTON_ID);
    const emailInput = getByTestId(EMAIL_INPUT_ID);
    const passInput = getByTestId(PASS_INPUT_ID);
    await act(async () => {
      fireEvent.changeText(emailInput, INVALID_EMAIL);
      fireEvent.changeText(passInput, VALID_PASSWORD);
      fireEvent.press(submitButton);
      fireEvent.changeText(emailInput, VALID_EMAIL);
      fireEvent.press(submitButton);
    });
    expect(useDispatchMock).toHaveBeenCalledTimes(1);
  });

  test('After press signup button, navigation should be called', async () => {
    const { getByTestId } = render(loginComponent());
    const signupButton = getByTestId(SIGN_UP_BUTTON);
    fireEvent.press(signupButton);
    expect(navMock.navigate).toHaveBeenCalled();
  });
});
