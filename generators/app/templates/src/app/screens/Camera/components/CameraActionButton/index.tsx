import React from 'react';
import { IconButton } from 'react-native-paper';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  Easing,
  withTiming
} from 'react-native-reanimated';

function CameraActionButton({
  icon,
  onPress,
  testID
}: {
  testID: string;
  icon: string;
  onPress: () => void;
}) {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: 1 - offset.value,
      transform: [{ scale: 1 + offset.value }]
    };
  });

  const pressIn = () => {
    offset.value = withTiming(0.5, {
      duration: 300,
      easing: Easing.out(Easing.exp)
    });
  };

  const pressOut = () => {
    offset.value = withTiming(0, {
      duration: 200,
      easing: Easing.out(Easing.exp)
    });
  };

  return (
    <Animated.View style={animatedStyles}>
      <IconButton
        testID={testID || `camera-action-button-${icon}`}
        icon={icon}
        onPress={onPress}
        onPressIn={pressIn}
        onPressOut={pressOut}
        size={30}
        color="white"
      />
    </Animated.View>
  );
}

export default CameraActionButton;
