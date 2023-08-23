/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import { ActivityIndicator, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { mainStyles } from "../../../styles/main";
import { buttonStyles } from "./ButtonStyles";
import { TextComponentProps, TextCustom } from "../text/TextCustom";
import { $space_sm } from "../../../constants/Spaces";
import { borderRadiusStyle } from "../../../styles/BorderRadiusStyle";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  Icon?: React.FC;
  loading?: boolean;
  variant?: "default" | "gray" | "textBtn" | "red" | "green";
  colorBtn?: "red" | "blue";
  newerDisabled?: "yes";
  disabledWithoutStyle?: "yes";
  onPress: () => void;
}

export const Button = ({
  title,
  Icon,
  style,
  loading,
  size = "extra",
  weight = "semiBold",
  variant = "default",
  colorBtn,
  disabled,
  onPress,
  ...props
}: ButtonProps & TextComponentProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={loading || disabled}
      style={[mainStyles.center, buttonStyles.main, borderRadiusStyle.buttonRadius, buttonStyles[variant!], style]}
      {...props}
    >
      <View style={[{ position: "relative" }, Icon || loading ? mainStyles.row : undefined]}>
        <TextCustom
          weight={weight}
          size={size}
          title={title}
          style={[
            buttonStyles[`${variant!}Text`],
            colorBtn ? buttonStyles[`color${colorBtn}Text`] : undefined,
            Icon && { marginRight: $space_sm },
          ]}
        />
        {Icon && <Icon />}
        {loading && (
          <ActivityIndicator
            style={{
              position: "absolute",
              right: -25,
              top: 2,
            }}
            size="small"
            color={colorBtn ? buttonStyles[`color${colorBtn}Text`].color : "#ffffff"}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};
