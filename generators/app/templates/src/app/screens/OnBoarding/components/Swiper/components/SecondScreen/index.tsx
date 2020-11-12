import React from 'react';
import { View } from 'react-native';
import i18next from 'i18next';
import CustomText from '@components/CustomText';

import styles from './styles';

function SecondScreen() {
  return (
    <View style={styles.container}>
      <CustomText center white>{i18next.t('ONBOARDING:SECOND_SCREEN')}</CustomText>
    </View>
  );
}

export default SecondScreen;
