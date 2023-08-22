import * as React from "react";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { mainStyles } from "../../../styles/main";
import { paddingStyles } from "../../../styles/Padding";
import { offsetsStyles } from "../../../styles/Offsets";
import { IconSquare } from "../iconSquare/IconSquare";
import { TextCustom } from "../text/TextCustom";

export interface ListItemProps extends TouchableOpacityProps {
  text: string;
  leftIcon?: React.FC;
  arrLength?: number;
  index?: number;
  rightIcon?: any;
}

export const ListItem = ({
  text,
  index = 0,
  arrLength,
  leftIcon,
  rightIcon,
  onPress,
  style,
  ...rest
}: ListItemProps) => {
  const arrItemOffsetBottom = arrLength !== index + 1 ? offsetsStyles.offsetBottomLg : undefined;
  const itemOffsetBottom = !arrLength ? offsetsStyles.offsetBottomLg : arrItemOffsetBottom;

  return (
    <TouchableOpacity
      style={[
        mainStyles.row,
        mainStyles.justifyBetween,
        mainStyles.alignCenter,
        paddingStyles.paddingTopBottomSm,
        itemOffsetBottom,
        style,
      ]}
      onPress={onPress}
      {...rest}
    >
      <View style={[mainStyles.row, mainStyles.alignCenter]}>
        {leftIcon && (
          <IconSquare Icon={leftIcon} size={28} borderWidth={0} radius="xs" style={offsetsStyles.offsetRightSm} />
        )}
        <TextCustom title={text} />
      </View>
      {rightIcon && rightIcon}
    </TouchableOpacity>
  );
};
