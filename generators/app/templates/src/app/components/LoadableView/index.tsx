import { blue } from 'constants/colors';

import React, { ReactElement, ReactNode } from 'react';
import { ActivityIndicator, View, ViewStyle } from 'react-native';

import styles from './styles';

interface Loader {
  isLoading: boolean;
  showChildren?: boolean;
  children?: ReactNode | ReactNode[];
  style?: ViewStyle;
  testID?: string | undefined;
}

const LoadingView = ({
  testID,
  isLoading,
  showChildren = true,
  children,
  style
}: Loader): ReactElement => (
  <View testID={testID} style={style || styles.container}>
    {showChildren && children}
    {isLoading ? (
      <View style={styles.loaderContainer}>
        <ActivityIndicator
          testID={testID ? `activity-indicator-${testID}` : undefined}
          size="large"
          color={blue}
        />
      </View>
    ) : null}
  </View>
);

export default LoadingView;
