import * as React from "react";
import { StyleSheet, View } from "react-native";
import { mainStyles } from "../../styles/main";
import Colors from "../../constants/Colors";
import { TextCustom } from "../shared/text/TextCustom";
import { useTranslation } from "react-i18next";
import { Portal } from "react-native-paper";
import { ActivityLoader } from "./ActivityLoader";

export const Loading = () => {
  const { t } = useTranslation();

  return (
    <Portal>
      <View style={[mainStyles.flex1, loadingStyles.container]}></View>
      <View style={[mainStyles.flex1, mainStyles.center]}>
        <ActivityLoader />
        <TextCustom title={t("loading.load")} weight="medium" size="extra" color="colorWhite" />
      </View>
    </Portal>
  );
};

const loadingStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.text,
    height: "100%",
    opacity: 0.6,
    position: "absolute",
    width: "100%",
  },
});
