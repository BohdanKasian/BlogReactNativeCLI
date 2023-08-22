import { StyleSheet } from "react-native";
import { $space_lg, $space_xl } from "../constants/Spaces";
import Colors from "../constants/Colors";

export const mainStyles = StyleSheet.create({
  alignCenter: {
    alignItems: "center",
  },
  alignSelfEnd: {
    alignSelf: "flex-end",
  },
  alignSelfStart: {
    alignSelf: "flex-start",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  column: {
    flexDirection: "column",
  },
  flex1: {
    flex: 1,
  },
  flexWrap: {
    flexWrap: "wrap",
  },
  grow1: {
    flexGrow: 1,
  },
  justifyBetween: {
    justifyContent: "space-between",
  },
  justifyEnd: {
    justifyContent: "flex-end",
  },
  layout: {
    paddingHorizontal: $space_xl,
  },
  layoutPrivate: {
    paddingHorizontal: $space_lg,
  },
  mainBackground: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    width: "100%",
  },
  row: {
    flexDirection: "row",
  },
  snackBarCenter: {
    paddingTop: 4,
  },
  snackBarContainer: {
    marginBottom: 100,
    marginLeft: $space_lg,
    marginVertical: 0,
  },
  snackBarMain: {
    backgroundColor: Colors.light.lessBlack,
    borderRadius: 12,
    margin: 0,
  },
});
