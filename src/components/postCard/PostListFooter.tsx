import React from "react";
import { View } from "react-native";
import { mainStyles } from "../../styles/main";
import { LogoDisabled } from "../../assets/images/logo";
import { offsetsStyles } from "../../styles/Offsets";
import { TextCustom } from "../shared/text/TextCustom";
import { textStyles } from "../shared/text/TextStyles";
import { $space_xl } from "../../constants/Spaces";
export const PostListFooter = () => {
  return (
    <View style={[{ marginTop: $space_xl * 2 }, mainStyles.center]}>
      <LogoDisabled style={offsetsStyles.offsetBottomXl} />
      <TextCustom
        title="Up to date"
        // eslint-disable-next-line react-native/no-inline-styles
        style={[textStyles.center, { maxWidth: 175 }]}
        color="colorGray4"
        size="h4"
      />
    </View>
  );
};
