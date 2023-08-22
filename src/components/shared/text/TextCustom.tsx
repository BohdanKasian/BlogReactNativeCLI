import * as React from "react";
import { TextProps, Text } from "react-native";
import { textStyles } from "./TextStyles";

const USE_SIZE_WEIGHT = "useSizeWeight";

export interface TextComponentProps extends TextProps {
  title: string;
  size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "extra" | "normal" | "semiNormal" | "small";
  color?:
    | "colorGray6"
    | "colorGray5"
    | "colorGray4"
    | "colorGray3"
    | "colorMain"
    | "colorWhite"
    | "colorBrand"
    | "colorRed";
  weight?: "semiBold" | "regular" | "medium" | typeof USE_SIZE_WEIGHT;
}

export const TextCustom = ({
  title,
  size = "normal",
  color = "colorMain",
  weight = USE_SIZE_WEIGHT,
  style,
  onPress,
}: TextComponentProps) => (
  <Text
    onPress={onPress}
    style={[
      textStyles.main,
      textStyles[size],
      weight === USE_SIZE_WEIGHT ? undefined : textStyles[weight],
      textStyles[color],
      style,
    ]}
  >
    {title}
  </Text>
);
