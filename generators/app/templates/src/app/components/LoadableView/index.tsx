import React, { ReactElement } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { blue } from 'constants/colors';

import styles from './styles';

interface Loader {
  isLoading: boolean;
  showChildren?: boolean;
  children: ReactElement;
}

const LoadingView = ({
  isLoading,
  showChildren = true,
  children
}: Loader): ReactElement => (
  <View style={styles.container}>
    {showChildren && children}
    {isLoading ? (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={blue} />
      </View>
    ) : null}
  </View>
);

export default LoadingView;
