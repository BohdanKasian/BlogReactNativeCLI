import * as React from "react";
import { mainStyles } from "../../../styles/main";
import { StyleSheet, View } from "react-native";
import { TextCustom } from "../text/TextCustom";
import Colors from "../../../constants/Colors";
import { $space_lg, $space_xl } from "../../../constants/Spaces";
import { $radius_lg, $radius_xxl } from "../../../constants/BorderRadius";

export const BottomTab = ({
  focused,
  Icon,
  label,
  isCenterTab,
}: {
  focused: boolean;
  Icon?: React.FC<any>;
  label: string;
  isCenterTab?: boolean;
}) => {
  return (
    <View style={[mainStyles.center, isCenterTab ? bottomTabStyles.container : undefined]}>
      {Icon && <Icon fill={focused ? Colors.light.brandMain : Colors.light.text} />}
      <TextCustom
        color={focused ? "colorBrand" : "colorMain"}
        weight={isCenterTab ? "semiBold" : "medium"}
        title={label}
        size={isCenterTab ? "extra" : "semiNormal"}
        style={isCenterTab ? bottomTabStyles.text : undefined}
      />
    </View>
  );
};

const bottomTabStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.brandMain,
    borderRadius: $radius_xxl + $radius_lg,
    paddingHorizontal: $space_xl,
    paddingVertical: $space_lg,
  },
  text: {
    color: Colors.light.textWhite,
  },
});
