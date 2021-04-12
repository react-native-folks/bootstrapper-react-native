import React, { useRef } from 'react';
import { View } from 'react-native';
import { IconButton } from 'react-native-paper';
import Video from 'react-native-video';

import styles from './styles';

interface VideoPreviewProps {
  path: string;
  saveCallback: (save: boolean) => void;
}

const VideoPreview = ({ path, saveCallback }: VideoPreviewProps) => {
  const VideoRef = useRef<Video>(null);
  const saveAfterPreview = () => {
    saveCallback(true);
  };
  const discartAfterPreview = () => {
    saveCallback(false);
  };
  return (
    <>
      <Video
        source={{ uri: path }}
        ref={VideoRef}
        style={styles.container}
        controls
        resizeMode="cover"
        repeat
      />
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
    </>
  );
};

export default VideoPreview;
