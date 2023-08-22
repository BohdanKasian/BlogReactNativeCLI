/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import { RootStackScreenProps, ScreensList } from "../../navigation/types";
import { Layout } from "../../components/Layout";
import { TextCustom } from "../../components/shared/text/TextCustom";
import { offsetsStyles } from "../../styles/Offsets";

export const MainScreen = ({}: RootStackScreenProps<ScreensList.Root>) => {
  return (
    <>
      <Layout center>
        <TextCustom size="h3" color="colorMain" title="Main" style={offsetsStyles.offsetBottomSm} />
      </Layout>
    </>
  );
};
