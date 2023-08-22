import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";
import { $space_lg, $space_xs } from "../../../constants/Spaces";

export const tooltipStyles = StyleSheet.create({
  containerStyle: {
    alignItems: "flex-start",
    elevation: 24,
    paddingHorizontal: $space_lg,
    paddingVertical: $space_lg + $space_xs,
    shadowColor: Colors.light.shadowGray,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 16,
  },
  pointerStyle: {
    elevation: 24,
    shadowColor: Colors.light.shadowBlack,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 16,
  },
});
