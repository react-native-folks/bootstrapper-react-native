import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Routes from 'app/navigation/routes';
import { appScreensNavOptions } from 'app/navigation/config/screensOptions';
import { createStackNavigator } from '@react-navigation/stack';
import { RouteProp, useRoute } from '@react-navigation/core';
import { Navigation } from 'interfaces/navigation';
import { Text } from 'app/components';

import CameraActionButton from './components/CameraActionButton';
import CameraButton from './components/CameraButton';
import AnimatedCamera from './components/Camera';
import styles from './styles';

type CameraScreenRouteProp = {
  params: {
    recordAvailable?: boolean;
  };
};

// This feature includes take photo (back && front camera) and record a video.
// The return the uri path with the created file.
// If you want a more complex feature like barcodes, face recognition,
// check this repo -> https://github.com/reime005/react-native-camera-hooks#readme

let recordTimerIntervalID: NodeJS.Timeout;

function Camera({ navigation }: Navigation) {
  const route = useRoute<RouteProp<CameraScreenRouteProp, 'params'>>();

  const CameraRef = useRef<RNCamera>(null);
  const recordAvailable = route.params?.recordAvailable || true;

  // Camera Type hander
  const [cameraType, setCameraType] = useState(RNCamera.Constants.Type.back);
  const changeCameraType = () =>
    setCameraType(
      cameraType === RNCamera.Constants.Type.back
        ? RNCamera.Constants.Type.front
        : RNCamera.Constants.Type.back
    );

  // Flash hander
  const [flashMode, setFlashMode] = useState(RNCamera.Constants.FlashMode.off);
  const changeFlashMode = () =>
    setFlashMode((mode: typeof RNCamera.Constants.FlashMode) =>
      mode === RNCamera.Constants.FlashMode.on
        ? RNCamera.Constants.FlashMode.auto
        : mode === RNCamera.Constants.FlashMode.auto
        ? RNCamera.Constants.FlashMode.off
        : RNCamera.Constants.FlashMode.on
    );

  // Take photo or record video features
  const cameraPressOut = () => {
    if (!CameraRef?.current) {
      return;
    }
    if (isRecording) {
      CameraRef?.current?.stopRecording();
    }
  };
  const takePicture = async () => {
    if (!CameraRef?.current || isRecording) {
      return;
    }
    const { uri } = await CameraRef?.current?.takePictureAsync({
      pauseAfterCapture: true,
      base64: true
    });
    // Do something with this cached image url
    setTimeout(async () => {
      navigation.navigate(Routes.CameraPreview, {
        filePath: uri,
        fileType: 'photo'
      });
    }, 1400);
  };

  const [isRecording, setIsRecording] = useState(false);
  const recordAsync = async () => {
    if (!CameraRef?.current || isRecording) {
      return;
    }
    const { uri } = await CameraRef?.current?.recordAsync({
      maxDuration: 300
    });
    // Do something with this cached video url
    setTimeout(async () => {
      navigation.navigate(Routes.CameraPreview, {
        filePath: uri,
        fileType: 'video'
      });
    }, 1400);
  };

  const [secondsCounter, setSecondsCounter] = useState(0);
  const recordingStart = () => {
    setIsRecording(true);
    setSecondsCounter(0);
    recordTimerIntervalID = setInterval(
      () => setSecondsCounter(val => val + 1),
      1000
    );
  };
  const recordingEnd = () => {
    clearInterval(recordTimerIntervalID);
    setIsRecording(false);
  };
  function formatToTime(s: number) {
    return (s - (s %= 60)) / 60 + (s > 9 ? ':' : ':0') + s;
  }
  return (
    <View testID="screen-camera-container-view" style={styles.container}>
      {isRecording && (
        <Text medium white style={styles.counterText}>
          {formatToTime(secondsCounter)}
        </Text>
      )}
      <AnimatedCamera
        ref={CameraRef}
        type={cameraType}
        flashMode={flashMode}
        onRecordingStart={recordingStart}
        onRecordingEnd={recordingEnd}
      />
      <View testID="camera-commands-container" style={styles.commandsContainer}>
        <CameraActionButton
          testID="turn-flash-button"
          icon={
            flashMode === RNCamera.Constants.FlashMode.on
              ? 'flash'
              : flashMode === RNCamera.Constants.FlashMode.off
              ? 'flash-off'
              : 'flash-auto'
          }
          onPress={changeFlashMode}
        />
        <CameraButton
          recordAvailable={recordAvailable}
          onPress={takePicture}
          onPressOut={cameraPressOut}
          onLongPress={recordAsync}
        />
        <CameraActionButton
          testID="change-camera-button"
          icon="camera-party-mode"
          onPress={changeCameraType}
        />
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

const CameraScreen = () => (
  <Stack.Screen
    name={Routes.Camera}
    component={Camera}
    options={appScreensNavOptions[Routes.Camera]}
  />
);
export default CameraScreen;
