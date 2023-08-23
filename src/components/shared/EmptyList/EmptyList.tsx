import * as React from "react";
import { View } from "react-native";
import { Chatillustration } from "../../../assets/images/Chatillustration";
import { TextCustom } from "../text/TextCustom";
import { offsetsStyles } from "../../../styles/Offsets";
import { mainStyles } from "../../../styles/main";

export const EmptyList = () => {
  return (
    <View style={[mainStyles.center, mainStyles.flex1]}>
      <Chatillustration style={offsetsStyles.offsetBottomXl} />
      <TextCustom size="h3" color="colorMain" title="Post is empty" style={offsetsStyles.offsetBottomSm} />
    </View>
  );
};
