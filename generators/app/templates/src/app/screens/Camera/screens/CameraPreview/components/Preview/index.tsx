import React, { useRef } from 'react';
import { ImageBackground, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import Video from 'react-native-video';

import styles from './styles';

interface ImagePreviewProps {
  path: string;
  type: 'photo' | 'video';
  saveCallback: (save: boolean) => void;
}

const ImagePreview = ({ path, type, saveCallback }: ImagePreviewProps) => {
  if (type !== 'photo' && type !== 'video') {
    type = 'photo';
  }
  let VideoRef = useRef<Video>(null);
  const saveAfterPreview = () => {
    saveCallback(true);
  };
  const discartAfterPreview = () => {
    saveCallback(false);
  };
  const ButtonsContainer = (
    <View
      testID={`${type}-preview-buttons-container`}
      style={[
        styles.buttonsContainer,
        type === 'photo' && styles.photoButtonsContainer
      ]}>
      <IconButton
        testID={`${type}-preview-close-button`}
        icon="close"
        size={40}
        onPress={discartAfterPreview}
        color="white"
        style={styles.button}
      />
      <IconButton
        testID={`${type}-preview-save-button`}
        icon="check"
        size={40}
        onPress={saveAfterPreview}
        color="white"
        style={styles.button}
      />
    </View>
  );
  return type === 'video' ? (
    <>
      <Video
        testID="video-preview-component"
        source={{ uri: path }}
        ref={VideoRef}
        style={styles.container}
        controls
        resizeMode="cover"
        repeat
      />
      {ButtonsContainer}
    </>
  ) : (
    <ImageBackground
      testID={`${type}-preview-component`}
      source={{ uri: path }}
      style={styles.container}>
      {ButtonsContainer}
    </ImageBackground>
  );
};

export default ImagePreview;
