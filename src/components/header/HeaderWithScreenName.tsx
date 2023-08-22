/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { useSelector } from "react-redux";
import { View } from "react-native";
import { useTranslation } from "react-i18next";
import { mainStyles } from "../../styles/main";
import { GoBack } from "../goBack/GoBack";
import { TextCustom } from "../shared/text/TextCustom";
import { headerStyles } from "./HeaderStyles";
import { NetworkErrorBar } from "../NetworkError/NetworkErrorBar";
import { AppRootState } from "../../redux/store";

type HeaderWithScreenNameProps = {
  screenTitle: string;
  goBackTitle: string;
};

export const HeaderWithScreenName = ({ goBackTitle, screenTitle }: HeaderWithScreenNameProps) => {
  const { t } = useTranslation();
  const { networkConnection } = useSelector((state: AppRootState) => state.utils);
  return (
    <>
      <View style={[mainStyles.row, mainStyles.alignCenter, mainStyles.justifyBetween, headerStyles.header]}>
        <GoBack title={goBackTitle} />
        <TextCustom title={t(screenTitle)} weight="medium" style={mainStyles.grow1} />

        {/*this block hide!!, its just centered another items*/}
        <View style={mainStyles.grow1}></View>
      </View>
      <View style={{ position: "relative" }}>{!networkConnection && <NetworkErrorBar />}</View>
    </>
  );
};
