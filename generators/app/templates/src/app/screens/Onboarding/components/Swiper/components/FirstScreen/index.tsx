import React from 'react';
import { View } from 'react-native';
import { Text, LoadableImage } from 'app/components';

import { translations } from '../../../../i18n';

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
        {translations.FIRST_SCREEN()}
      </Text>
    </View>
  );
}

export default FirstScreen;
