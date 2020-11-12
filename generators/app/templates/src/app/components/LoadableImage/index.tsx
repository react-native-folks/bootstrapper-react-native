import React, { useState } from 'react';
import {
  ActivityIndicator,
  View,
  Image,
  ImageStyle,
  ViewStyle
} from 'react-native';
import { blue } from '@constants/colors';

import styles from './styles';

interface LoadableImageProps {
  size?: 'large' | 'small';
  style?: (ViewStyle & ImageStyle) | Array<ViewStyle & ImageStyle>;
  url?: string;
}

// Loadable image component for adding loading spinner to images from remote locations (no local assets)

const LoadableImage = ({ url, style, size = 'large' }: LoadableImageProps) => {
  const [loading, setLoading] = useState(false);
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
        onLoadStart={startLoading}
        onLoadEnd={endLoading}
        onError={errorLoading}
        style={style}
        source={{ uri: url }}
      />
      {loading && (
        <ActivityIndicator
          animating
          size={size}
          style={[style, styles.container]}
          color={blue}
        />
      )}
    </View>
  );
};

export default LoadableImage;
