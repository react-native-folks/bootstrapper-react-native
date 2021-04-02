import React from 'react';
import { View } from 'react-native';
import i18next from 'i18next';
import { Text } from 'app/components';

import styles from './styles';

function SecondScreen() {
  return (
    <View testID="onboarding-second-screen" style={styles.container}>
      <Text testID="second-screen-message-text" center white>
        {i18next.t('ONBOARDING:SECOND_SCREEN')}
      </Text>
    </View>
  );
}

export default SecondScreen;
