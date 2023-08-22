import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

export const buttonStyles = StyleSheet.create({
  colorblueText: {
    color: Colors.light.blue,
  },
  colorredText: {
    color: Colors.light.red,
  },
  default: {
    backgroundColor: Colors.light.brandMain,
  },
  defaultText: {
    color: Colors.light.textWhite,
  },
  gray: {
    backgroundColor: Colors.light.gray1,
  },
  grayText: {
    color: Colors.light.text,
  },
  green: {
    backgroundColor: Colors.light.brandMain,
  },
  greenText: {
    color: Colors.light.textWhite,
  },
  main: {
    height: 56,
    width: "100%",
  },
  red: {
    backgroundColor: Colors.light.red,
  },
  redText: {
    color: Colors.light.textWhite,
  },
  textBtn: {
    backgroundColor: Colors.transparent,
  },
  textBtnText: {
    // variant textBtn text style
  },
});
