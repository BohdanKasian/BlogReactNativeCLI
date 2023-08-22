/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import { RootStackScreenProps, ScreensList } from "../../navigation/types";
import { Layout } from "../../components/Layout";
import { TextCustom } from "../../components/shared/text/TextCustom";
import { offsetsStyles } from "../../styles/Offsets";

export const PostOverviewScreen = ({}: RootStackScreenProps<ScreensList.PostOverview>) => {
  return (
    <>
      <Layout center>
        <TextCustom size="h3" color="colorMain" title="PostOverview" style={offsetsStyles.offsetBottomSm} />
      </Layout>
    </>
  );
};
