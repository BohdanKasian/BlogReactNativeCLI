import * as React from "react";
import { StyleSheet, View } from "react-native";
import Tooltip from "rn-tooltip";
import { TextCustom } from "../text/TextCustom";
import { DeviceSize } from "../../../constants/Layout";
import { $space_lg } from "../../../constants/Spaces";
import { tooltipStyles } from "./TooltipStyles";
import Colors from "../../../constants/Colors";
import { IconSquare } from "../iconSquare/IconSquare";
import { InformationIcon } from "../../../assets/images/icons";
import { offsetsStyles } from "../../../styles/Offsets";

type CustomTooltipProps = {
  contentProps: TooltipContentProps;
};

export const CustomTooltip: React.FC<CustomTooltipProps> = ({ children, contentProps }) => (
  <Tooltip
    width={DeviceSize.window.width + 2 - $space_lg * 2}
    height="auto"
    actionType="press"
    popover={<TooltipContent {...contentProps} />}
    overlayColor="rgba(250, 250, 250, 0)"
    pointerColor={Colors.light.background}
    pointerStyle={tooltipStyles.pointerStyle}
    containerStyle={tooltipStyles.containerStyle}
    backgroundColor={Colors.light.background}
  >
    {children || <IconSquare Icon={InformationIcon} size={32} borderWidth={0} radius="xs" />}
  </Tooltip>
);

type TooltipContentProps = { title: string; tooltipContent: string | React.ReactElement | React.ReactElement<{}> };

const TooltipContent = ({ title, tooltipContent }: TooltipContentProps) => (
  <View style={tooltipContentStyles.container}>
    <TextCustom size="h5" weight="useSizeWeight" title={title} style={offsetsStyles.offsetBottomSm} />
    {typeof tooltipContent === "string" ? <TextCustom title={tooltipContent} /> : tooltipContent}
  </View>
);

const tooltipContentStyles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
