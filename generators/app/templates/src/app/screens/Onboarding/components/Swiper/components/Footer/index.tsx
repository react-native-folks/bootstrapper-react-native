import React from 'react';
import { View } from 'react-native';
import { CustomButton } from 'app/components';

import { FooterProps } from './interface';
import { getScreensButtonsInfo } from './buttonsInfo';
import styles from './styles';

function Footer(props: FooterProps) {
  const { firstButton, secondButton } = getScreensButtonsInfo(props);
  return (
    <View testID="footer-buttons-container-view" style={styles.buttons}>
      {firstButton && (
        <CustomButton
          testID="footer-left-action-button"
          {...firstButton}
          white
          style={styles.buttonContainer}
          activeOpacity={0.7}
        />
      )}
      {secondButton && (
        <CustomButton
          testID="footer-right-action-button"
          {...secondButton}
          white
          style={styles.buttonContainer}
          activeOpacity={0.7}
        />
      )}
    </View>
  );
}

export default Footer;
