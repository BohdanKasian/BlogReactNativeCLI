import React from "react";
import { mainStyles } from "../styles/main";
import { View, ViewProps } from "react-native";

interface LayoutProps extends ViewProps {
  center?: boolean;
  horizontalOffset?: "small" | "default";
}

const switchOffsets = (size?: "small" | "default") => {
  switch (size) {
    case "default":
      return mainStyles.layout;
    case "small":
      return mainStyles.layoutPrivate;
    default:
      return mainStyles.layout;
  }
};

export const Layout: React.FC<LayoutProps> = ({ style, center, horizontalOffset = "default", children }) => {
  const hOffset = switchOffsets(horizontalOffset);

  return <View style={[mainStyles.flex1, center ? mainStyles.center : undefined, hOffset, style]}>{children}</View>;
};
