import React from 'react';
import { View } from 'react-native';
import { Text } from 'app/components';

import { translations } from '../../../../i18n';

import styles from './styles';

function SecondScreen() {
  return (
    <View testID="onboarding-second-screen" style={styles.container}>
      <Text testID="second-screen-message-text" center white>
        {translations.SECOND_SCREEN()}
      </Text>
    </View>
  );
}

export default SecondScreen;
