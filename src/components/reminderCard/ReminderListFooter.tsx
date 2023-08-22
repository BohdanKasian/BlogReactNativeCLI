import React from "react";
import { View } from "react-native";
import { mainStyles } from "../../styles/main";
import { LogoDisabled } from "../../assets/images/logo";
import { offsetsStyles } from "../../styles/Offsets";
import { TextCustom } from "../shared/text/TextCustom";
import { useTranslation } from "react-i18next";
import { textStyles } from "../shared/text/TextStyles";
import { $space_xl } from "../../constants/Spaces";
export const ReminderListFooter = () => {
  const { t } = useTranslation();

  return (
    <View style={[{ marginTop: $space_xl * 2 }, mainStyles.center]}>
      <LogoDisabled style={offsetsStyles.offsetBottomXl} />
      <TextCustom
        title={t("screens.reminders.all-data")}
        // eslint-disable-next-line react-native/no-inline-styles
        style={[textStyles.center, { maxWidth: 175 }]}
        color="colorGray4"
        size="h4"
      />
    </View>
  );
};
