import * as React from "react";
import { TouchableOpacity, TouchableWithoutFeedbackProps, View } from "react-native";
import { TextCustom } from "../shared/text/TextCustom";
import { mainStyles } from "../../styles/main";
import { reminderCartStyles } from "./ReminderCartStyles";
import { offsetsStyles } from "../../styles/Offsets";
import { borderRadiusStyle } from "../../styles/BorderRadiusStyle";
import { Surface } from "react-native-paper";
import { FilterItem } from "../filterItem/FilterItem";
import { ReminderStatuses } from "../shared/reminder/ReminderStatuses";
import { ReminderImportance } from "../shared/reminder/ReminderImportance";
import { Reminders } from "../../graphql/generated/types";
import { initialImportance } from "../../utils/initialStorage/initialImportance";

type ReminderCardTypes = {
  index: number;
  onPress: () => void;
} & Reminders &
  TouchableWithoutFeedbackProps;

export const ReminderCard = ({ onPress, index, title, Theme, status, importance, notify }: ReminderCardTypes) => {
  const findImportance = initialImportance.find((imp) => imp.type === importance);

  return (
    <TouchableOpacity onPress={onPress}>
      <Surface
        style={[
          index ? undefined : offsetsStyles.offsetTopXl,
          offsetsStyles.offsetBottomSm,
          mainStyles.column,
          mainStyles.justifyBetween,
          borderRadiusStyle.lg,
          reminderCartStyles.container,
        ]}
      >
        <View style={[mainStyles.row, mainStyles.layoutPrivate]}>
          {!!Theme && (
            <FilterItem
              title={Theme?.name}
              textColor={Theme.textColor}
              // need new field bgColor on BE
              bgColor={Theme.bgColor}
              style={offsetsStyles.offsetBottomLg}
            />
          )}
        </View>
        <View style={[mainStyles.layoutPrivate, mainStyles.flex1, offsetsStyles.offsetBottomLg]}>
          <TextCustom size="extra" weight="semiBold" title={title} />
        </View>
        <View style={[mainStyles.row, mainStyles.justifyBetween, mainStyles.layoutPrivate]}>
          <ReminderStatuses status={status} repeat={notify} />
          {!!findImportance && <ReminderImportance importance={findImportance} />}
        </View>
      </Surface>
    </TouchableOpacity>
  );
};
