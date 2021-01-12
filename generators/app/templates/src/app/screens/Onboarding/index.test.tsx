import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import * as ReactRedux from 'react-redux';

import { OnboardingContainer } from './';
import './i18n';

describe('Onboarding Screen', () => {
  let dispatchFunction: any;

  beforeEach(() => {
    dispatchFunction = jest.fn();
    jest.spyOn(ReactRedux, 'useDispatch').mockReturnValue(dispatchFunction);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  // Onboarding Container should match with snapshot on render
  it('dispatch should be called when first onboarding button is pressed', async () => {
    const { getByTestId } = render(<OnboardingContainer />);
    const leftFooterButton = getByTestId('firstButton');
    fireEvent.press(leftFooterButton);
    expect(dispatchFunction).toHaveBeenCalled();
  });

  it('dispatch should be called after button pressed of the last screen', async () => {
    const { getByTestId } = render(<OnboardingContainer />);
    const rightFooterButton = getByTestId('secondButton');
    fireEvent.press(rightFooterButton); // first to second screen
    fireEvent.press(rightFooterButton); // second to third screen
    fireEvent.press(rightFooterButton); // third to skip
    expect(dispatchFunction).toHaveBeenCalled();
  });

  it('dispatch should be called after go to to second screen and then back to first and skip onboarding', async () => {
    const { getByTestId } = render(<OnboardingContainer />);
    const leftFooterButton = getByTestId('firstButton');
    const rightFooterButton = getByTestId('secondButton');
    fireEvent.press(rightFooterButton); // first to second screen
    fireEvent.press(leftFooterButton); // second to first screen
    fireEvent.press(leftFooterButton); // left button to skip
    expect(dispatchFunction).toHaveBeenCalled();
  });
});
