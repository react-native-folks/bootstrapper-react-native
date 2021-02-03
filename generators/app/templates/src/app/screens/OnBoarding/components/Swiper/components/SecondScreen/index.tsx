import React from 'react';
import { View } from 'react-native';
import i18next from 'i18next';
import { CustomText } from 'app/components';

import styles from './styles';

function SecondScreen() {
  return (
    <View testID="onboarding-second-screen" style={styles.container}>
      <CustomText testID="second-screen-message-text" center white>
        {i18next.t('ONBOARDING:SECOND_SCREEN')}
      </CustomText>
    </View>
  );
}

export default SecondScreen;
