import { StyleSheet } from "react-native";
import { $radius_lg, $radius_md, $radius_sm, $radius_xl, $radius_xs, $radius_xxl } from "../constants/BorderRadius";

export const borderRadiusStyle = StyleSheet.create({
  buttonRadius: {
    borderRadius: $radius_lg + $radius_xxl,
  },
  lg: {
    borderRadius: $radius_lg,
  },
  md: {
    borderRadius: $radius_md,
  },
  sm: {
    borderRadius: $radius_sm,
  },
  xl: {
    borderRadius: $radius_xl,
  },
  xs: {
    borderRadius: $radius_xs,
  },
});
