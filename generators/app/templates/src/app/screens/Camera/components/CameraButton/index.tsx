import React from 'react';
import { Pressable } from 'react-native';
import { Easing, withTiming } from 'react-native-reanimated';
import Animated, {
  useSharedValue,
  useAnimatedStyle
} from 'react-native-reanimated';

import styles from './styles';

function CameraButton({
  onPress,
  onLongPress,
  onPressOut,
  recordAvailable
}: {
  onPressOut: () => void;
  onPress: () => void;
  onLongPress: () => void;
  recordAvailable: boolean;
}) {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: 0 + offset.value }]
    };
  });

  const longPress = () => {
    if (recordAvailable) {
      onLongPress();
      offset.value = withTiming(1, {
        duration: 400,
        easing: Easing.out(Easing.exp)
      });
    }
  };

  const pressOut = () => {
    onPressOut();
    if (recordAvailable) {
      offset.value = withTiming(0, {
        duration: 200,
        easing: Easing.out(Easing.exp)
      });
    }
  };

  return (
    <Pressable
      testID="camera-button"
      onPress={onPress}
      onPressOut={pressOut}
      onLongPress={longPress}
      style={styles.outsideLine}>
      <Animated.View style={[styles.recordBubble, animatedStyles]} />
    </Pressable>
  );
}

export default CameraButton;
