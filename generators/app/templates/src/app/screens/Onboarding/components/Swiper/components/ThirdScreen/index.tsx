import React from 'react';
import { View } from 'react-native';
import i18next from 'i18next';
import { CustomText } from 'app/components';

import styles from './styles';

function ThirdScreen() {
  return (
    <View testID="onboarding-third-screen" style={styles.container}>
      <CustomText center white>
        {i18next.t('ONBOARDING:THIRD_SCREEN')}
      </CustomText>
    </View>
  );
}

export default ThirdScreen;
