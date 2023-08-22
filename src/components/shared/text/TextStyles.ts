import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

export const textStyles = StyleSheet.create({
  center: {
    textAlign: "center",
  },
  colorBrand: {
    color: Colors.light.brandMain,
  },
  colorGray3: {
    color: Colors.light.gray3,
  },
  colorGray4: {
    color: Colors.light.gray4,
  },
  colorGray5: {
    color: Colors.light.gray5,
  },
  colorGray6: {
    color: Colors.light.gray6,
  },
  colorMain: {
    color: Colors.light.text,
  },
  colorRed: {
    color: Colors.light.red,
  },
  colorWhite: {
    color: Colors.light.textWhite,
  },
  extra: {
    fontSize: 18,
  },
  h1: {
    fontSize: 48,
    fontWeight: "600",
  },
  h2: {
    fontSize: 32,
    fontWeight: "600",
  },
  h3: {
    fontSize: 28,
    fontWeight: "600",
  },
  h4: {
    fontSize: 24,
    fontWeight: "600",
  },
  h5: {
    fontSize: 20,
    fontWeight: "600",
  },
  h6: {
    fontSize: 16,
    fontWeight: "600",
  },
  main: {
    fontFamily: "Jost",
  },
  medium: {
    fontWeight: "500",
  },
  normal: {
    fontSize: 16,
  },
  regular: {
    fontWeight: "400",
  },
  semiBold: {
    fontWeight: "600",
  },
  semiNormal: {
    fontSize: 14,
  },
  small: {
    fontSize: 12,
  },
  underline: {
    textDecorationLine: "underline",
  },
  upperCase: {
    textTransform: "uppercase",
  },
});
