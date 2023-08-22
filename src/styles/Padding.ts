import { StyleSheet } from "react-native";
import { $space_lg, $space_md, $space_sm } from "../constants/Spaces";

export const paddingStyles = StyleSheet.create({
  paddingBottomLg: {
    paddingBottom: $space_lg,
  },
  paddingLeftMd: {
    paddingLeft: $space_md,
  },
  paddingLg: {
    paddingBottom: $space_lg,
    paddingLeft: $space_lg,
    paddingRight: $space_lg,
    paddingTop: $space_lg,
  },
  paddingTopBottomLg: {
    paddingBottom: $space_lg,
    paddingTop: $space_lg,
  },
  paddingTopBottomSm: {
    paddingBottom: $space_sm,
    paddingTop: $space_sm,
  },
});
