import React from 'react';
import { View } from 'react-native';
import { CustomButton } from 'app/components';

import { FooterProps } from './interface';
import { getScreensButtonsInfo } from './buttonsInfo';
import styles from './styles';

function Footer(props: FooterProps) {
  const { firstButton, secondButton } = getScreensButtonsInfo(props);
  return (
    <View style={styles.buttons}>
      {firstButton && (
        <CustomButton
          {...firstButton}
          white
          style={styles.buttonContainer}
          activeOpacity={0.7}
        />
      )}
      {secondButton && (
        <CustomButton
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
