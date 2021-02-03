import React from 'react';
import { View } from 'react-native';
import i18next from 'i18next';
import { CustomText, LoadableImage } from 'app/components';

import styles from './styles';

function FirstScreen() {
  return (
    <View testID="onboarding-first-screen" style={styles.container}>
      <LoadableImage
        testID="app-logo-loadable-image"
        size="small"
        url="https://www.mahisoft.com/img/logo.png"
      />
      <CustomText testID="first-screen-message-text" center white>
        {i18next.t('ONBOARDING:FIRST_SCREEN')}
      </CustomText>
    </View>
  );
}

export default FirstScreen;
