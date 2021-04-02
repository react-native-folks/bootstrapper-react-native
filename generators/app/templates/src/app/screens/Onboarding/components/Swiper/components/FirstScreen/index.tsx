import React from 'react';
import { View } from 'react-native';
import i18next from 'i18next';
import { Text, LoadableImage } from 'app/components';

import styles from './styles';

function FirstScreen() {
  return (
    <View testID="onboarding-first-screen" style={styles.container}>
      <LoadableImage
        testID="app-logo-loadable-image"
        size="small"
        url="https://www.mahisoft.com/img/logo.png"
      />
      <Text testID="first-screen-message-text" center white>
        {i18next.t('ONBOARDING:FIRST_SCREEN')}
      </Text>
    </View>
  );
}

export default FirstScreen;
