import React, { ReactElement, ReactNode } from 'react';
import { ActivityIndicator, View, ViewStyle } from 'react-native';
import { useTheme } from 'hooks/theme';

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
}: Loader): ReactElement => {
  const theme = useTheme();
  return (
    <View testID={testID} style={style || styles.container}>
      {showChildren && children}
      {isLoading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator
            testID={testID ? `activity-indicator-${testID}` : undefined}
            size="large"
            color={theme.colors.accent}
          />
        </View>
      ) : null}
    </View>
  );
};

export default LoadingView;
