import React from 'react';
import { View } from 'react-native';
import i18next from 'i18next';
import { Text } from 'app/components';

import styles from './styles';

function ThirdScreen() {
  return (
    <View testID="onboarding-third-screen" style={styles.container}>
      <Text testID="third-screen-message-text" center white>
        {i18next.t('ONBOARDING:THIRD_SCREEN')}
      </Text>
    </View>
  );
}

export default ThirdScreen;
