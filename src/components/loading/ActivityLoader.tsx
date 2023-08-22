import * as React from "react";
import { useEffect } from "react";
import Animated, {
  cancelAnimation,
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { LoadingIcon } from "../../assets/images/icons";

export const ActivityLoader = ({ size }: { size?: number }) => {
  const rotation = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateZ: `${rotation.value}deg`,
        },
      ],
    };
  }, [rotation.value]);

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, {
        duration: 850,
        easing: Easing.linear,
      }),
      0
    );
    return () => cancelAnimation(rotation);
  }, []);

  return (
    <Animated.View style={animatedStyles}>
      <LoadingIcon size={size} />
    </Animated.View>
  );
};
