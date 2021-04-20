import React from 'react';
import { View } from 'react-native';
import { Text } from 'app/components';

import { translations } from '../../../../i18n';

import styles from './styles';

function ThirdScreen() {
  return (
    <View testID="onboarding-third-screen" style={styles.container}>
      <Text testID="third-screen-message-text" center white>
        {translations.THIRD_SCREEN()}
      </Text>
    </View>
  );
}

export default ThirdScreen;
