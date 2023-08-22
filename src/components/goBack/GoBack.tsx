import * as React from "react";
import { Keyboard, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeftIcon } from "../../assets/images/icons";
import { TextCustom } from "../shared/text/TextCustom";
import { mainStyles } from "../../styles/main";
import { offsetsStyles } from "../../styles/Offsets";

export const GoBack = ({ title = "Go Back" }: { title?: string }) => {
  const navigation = useNavigation();

  const onPress = () => {
    Keyboard.dismiss();
    navigation.goBack();
  };

  return (
    <View style={mainStyles.grow1}>
      <TouchableOpacity onPress={onPress} style={[mainStyles.row, mainStyles.alignCenter, offsetsStyles.offsetLeftSm]}>
        <ArrowLeftIcon style={offsetsStyles.offsetRightXs} />
        <TextCustom title={title} />
      </TouchableOpacity>
    </View>
  );
};
