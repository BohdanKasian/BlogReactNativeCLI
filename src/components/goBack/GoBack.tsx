import * as React from "react";
import { Keyboard, StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeftIcon } from "../../assets/images/icons";
import { TextCustom } from "../shared/text/TextCustom";
import { mainStyles } from "../../styles/main";
import { offsetsStyles } from "../../styles/Offsets";
import Colors from "../../constants/Colors";

export const GoBack = ({ title = "Go Back" }: { title?: string }) => {
  const navigation = useNavigation();

  const onPress = () => {
    Keyboard.dismiss();
    navigation.goBack();
  };

  return (
    <View style={[mainStyles.grow1, mainStyles.mainBgColor, styles.container]}>
      <TouchableOpacity onPress={onPress} style={[mainStyles.row, mainStyles.alignCenter, offsetsStyles.offsetLeftSm]}>
        <ArrowLeftIcon style={offsetsStyles.offsetRightXs} />
        <TextCustom title={title} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { borderBottomColor: Colors.light.gray7, borderBottomWidth: 1, paddingBottom: 10, paddingTop: 10 },
});
