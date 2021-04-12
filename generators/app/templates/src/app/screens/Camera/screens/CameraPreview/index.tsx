import React from 'react';
import { View } from 'react-native';
import Routes from 'app/navigation/routes';
import { appScreensNavOptions } from 'app/navigation/config/screensOptions';
import { createStackNavigator } from '@react-navigation/stack';
import { RouteProp, useRoute } from '@react-navigation/core';
import { Navigation } from 'interfaces/navigation';
import { saveCacheMediaFile } from 'services/mediaFile';

import styles from './styles';
import ImagePreview from './components/ImagePreview';
import VideoPreview from './components/VideoPreview';

type CameraPreviewScreenRouteProp = {
  params: {
    filePath: string;
    fileType: 'photo' | 'video';
  };
};

function CameraPreview({ navigation }: Navigation) {
  const route = useRoute<RouteProp<CameraPreviewScreenRouteProp, 'params'>>();
  const filePath = route?.params?.filePath;
  const fileType = route?.params?.fileType || 'photo';

  const saveCallback = async (save: boolean) => {
    if (save) {
      await saveCacheMediaFile(filePath, fileType);
      navigation.navigate(Routes.Home);
    } else {
      navigation.goBack();
    }
  };
  return (
    <View testID="screen-camera-preview-container" style={styles.container}>
      {fileType === 'video' ? (
        <VideoPreview path={filePath} saveCallback={saveCallback} />
      ) : (
        <ImagePreview path={filePath} saveCallback={saveCallback} />
      )}
    </View>
  );
}

const Stack = createStackNavigator();

const CameraPreviewScreen = () => (
  <Stack.Screen
    name={Routes.CameraPreview}
    component={CameraPreview}
    options={appScreensNavOptions[Routes.CameraPreview]}
  />
);
export default CameraPreviewScreen;
