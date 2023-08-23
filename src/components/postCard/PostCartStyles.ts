import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import { $space_lg, $space_xs } from "../../constants/Spaces";

export const postCartStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.background,
    borderColor: Colors.light.gray2,
    borderWidth: 1,
    marginHorizontal: 16,
    minHeight: 120,
    paddingBottom: $space_lg + $space_xs,
    paddingTop: $space_lg,
  },
});
