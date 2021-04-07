import React from 'react';
import { View } from 'react-native';
import { Button } from 'app/components';

import { FooterProps } from './interface';
import { getScreensButtonsInfo } from './buttonsInfo';
import styles from './styles';

function Footer(props: FooterProps) {
  const { firstButton, secondButton } = getScreensButtonsInfo(props);
  return (
    <View testID="footer-buttons-container-view" style={styles.buttons}>
      {firstButton && (
        <Button
          mode={'outlined'}
          testID="footer-left-action-button"
          style={styles.buttonContainer}
          whiteLabel
          {...firstButton}
        />
      )}
      {secondButton && (
        <Button
          mode={'outlined'}
          testID="footer-right-action-button"
          style={styles.buttonContainer}
          whiteLabel
          {...secondButton}
        />
      )}
    </View>
  );
}

export default Footer;
