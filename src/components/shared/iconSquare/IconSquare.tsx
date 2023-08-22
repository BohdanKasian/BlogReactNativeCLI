import React from "react";
import { TouchableOpacity, View, ViewStyle } from "react-native";
import { iconSquareStyles } from "./IconSquareStyles";
import { mainStyles } from "../../../styles/main";
import { borderRadiusStyle } from "../../../styles/BorderRadiusStyle";

interface IconSquareProps {
  Icon: React.FC;
  size?: number;
  style?: ViewStyle[] | ViewStyle;
  radius?: "xs" | "lg";
  disabled?: boolean;
  borderWidth?: number;
  onPress?: () => void;
}

export const IconSquare: React.FC<IconSquareProps> = ({
  Icon,
  size = 88,
  style,
  radius = "lg",
  disabled,
  borderWidth = 1,
  onPress,
}) => {
  const containerStyles = [
    iconSquareStyles.container,
    mainStyles.center,
    borderRadiusStyle[radius],
    { width: size, height: size, borderWidth: borderWidth },
    style,
  ];
  const content = <Icon />;
  onPress = disabled ? undefined : onPress;
  if (onPress) {
    return (
      <TouchableOpacity style={containerStyles} onPress={onPress}>
        {content}
      </TouchableOpacity>
    );
  }

  return <View style={containerStyles}>{content}</View>;
};
