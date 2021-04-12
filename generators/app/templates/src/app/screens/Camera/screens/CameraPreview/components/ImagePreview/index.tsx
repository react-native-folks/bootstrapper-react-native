import React from 'react';
import { ImageBackground, View } from 'react-native';
import { IconButton } from 'react-native-paper';

import styles from './styles';

interface ImagePreviewProps {
  path: string;
  saveCallback: (save: boolean) => void;
}

const ImagePreview = ({ path, saveCallback }: ImagePreviewProps) => {
  const saveAfterPreview = () => {
    saveCallback(true);
  };
  const discartAfterPreview = () => {
    saveCallback(false);
  };
  return (
    <ImageBackground source={{ uri: path }} style={styles.container}>
      <View style={styles.buttonsContainer}>
        <IconButton
          icon="close"
          size={40}
          onPress={discartAfterPreview}
          color="white"
          style={styles.button}
        />
        <IconButton
          icon="check"
          size={40}
          onPress={saveAfterPreview}
          color="white"
          style={styles.button}
        />
      </View>
    </ImageBackground>
  );
};

export default ImagePreview;
