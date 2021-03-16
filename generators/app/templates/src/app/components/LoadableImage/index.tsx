import React, { useState } from 'react';
import {
  ActivityIndicator,
  View,
  Image,
  ImageStyle,
  ViewStyle,
  ImageProps
} from 'react-native';
import { useTheme } from 'hooks/theme';

import styles from './styles';

interface LoadableImageProps {
  size?: 'large' | 'small';
  style?: (ViewStyle & ImageStyle) | Array<ViewStyle & ImageStyle>;
  loaderStyle?: (ViewStyle & ImageStyle) | Array<ViewStyle & ImageStyle>;
  url?: string;
  imageProps?: ImageProps;
  shouldLoad?: boolean;
  testID?: string | undefined;
}

// Loadable image component for adding loading spinner to images from remote locations (no local assets)

const LoadableImage = ({
  testID,
  url,
  style,
  loaderStyle,
  size = 'large',
  imageProps,
  shouldLoad = false
}: LoadableImageProps) => {
  const [loading, setLoading] = useState(false);
  const theme = useTheme();

  const startLoading = () => setLoading(true);
  const endLoading = () => setLoading(false);
  const errorLoading = () => {
    if (loading) setLoading(false);
    console.log('Error loading image from url');
    // TODO - Do something
  };

  return (
    <View>
      <Image
        testID={testID}
        resizeMode="contain"
        onLoadStart={startLoading}
        onLoadEnd={endLoading}
        onError={errorLoading}
        style={[styles.defaultSize, style]}
        source={{ uri: url }}
        {...imageProps}
      />
      {(shouldLoad || loading) && (
        <ActivityIndicator
          testID={testID ? `activity-indicator-${testID}` : undefined}
          animating
          size={size}
          style={[styles.container, loaderStyle]}
          color={theme.colors.accent}
        />
      )}
    </View>
  );
};

export default LoadableImage;
