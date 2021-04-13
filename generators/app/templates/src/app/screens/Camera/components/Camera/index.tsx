import React, { forwardRef } from 'react';
import { RNCamera, RNCameraProps } from 'react-native-camera';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  Easing,
  withTiming
} from 'react-native-reanimated';
import i18next from 'i18next';

import styles from './styles';

import './i18n';

// This feature includes take photo (back && front camera) and video recording.
// Finally user can see a preview dicard or save to camera roll.
// If you want a more complex feature like barcodes, face recognition,
// check this repo -> https://github.com/reime005/react-native-camera-hooks#readme

// Check https://github.com/react-native-camera/react-native-camera/blob/master/docs/RNCamera.md
// For more information about camera props and record/photo options like quality, etc...

const AnimatedCamera = Animated.createAnimatedComponent(RNCamera);

const Camera = forwardRef<RNCamera, RNCameraProps>(
  (
    { type, flashMode, onRecordingStart, onRecordingEnd }: RNCameraProps,
    ref
  ) => {
    const offset = useSharedValue(0);
    const animatedStyles = useAnimatedStyle(() => {
      return {
        margin: 0 + offset.value
      };
    });
    const pictureTaken = () => {
      offset.value = withTiming(40, {
        duration: 200,
        easing: Easing.out(Easing.exp)
      });
      setTimeout(() => {
        offset.value = withTiming(0, {
          duration: 200,
          easing: Easing.out(Easing.exp)
        });
      }, 1000);
    };
    return (
      <AnimatedCamera
        testID="camera-component"
        ref={ref}
        style={[styles.camera, animatedStyles]}
        type={type}
        flashMode={flashMode}
        onPictureTaken={pictureTaken}
        playSoundOnCapture
        playSoundOnRecord
        androidCameraPermissionOptions={{
          title: i18next.t('CAMERA:ANDROID_CAMERA_PERMISSIONS_TITLE'),
          message: i18next.t('CAMERA:ANDROID_CAMERA_PERMISSIONS_MESSAGE'),
          buttonPositive: i18next.t('CAMERA:ACCEPT_BUTTON'),
          buttonNegative: i18next.t('CAMERA:CANCEL_BUTTON')
        }}
        androidRecordAudioPermissionOptions={{
          title: i18next.t('CAMERA:ANDROID_AUDIO_PERMISSIONS_TITLE'),
          message: i18next.t('CAMERA:ANDROID_AUDIO_PERMISSIONS_MESSAGE'),
          buttonPositive: i18next.t('CAMERA:ACCEPT_BUTTON'),
          buttonNegative: i18next.t('CAMERA:CANCEL_BUTTON')
        }}
        onRecordingStart={onRecordingStart}
        onRecordingEnd={onRecordingEnd}
      />
    );
  }
);

export default Camera;
