import { blue } from 'constants/colors';

import React, { ReactElement, ReactNode } from 'react';
import { ActivityIndicator, View, ViewStyle } from 'react-native';

import styles from './styles';

interface Loader {
  isLoading: boolean;
  showChildren?: boolean;
  children?: ReactNode | ReactNode[];
  style?: ViewStyle;
}

const LoadingView = ({
  isLoading,
  showChildren = true,
  children,
  style
}: Loader): ReactElement => (
  <View style={style || styles.container}>
    {showChildren && children}
    {isLoading ? (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={blue} />
      </View>
    ) : null}
  </View>
);

export default LoadingView;
