/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import { RootStackScreenProps, ScreensList } from "../../navigation/types";
import { Layout } from "../../components/Layout";
import { TextCustom } from "../../components/shared/text/TextCustom";
import { offsetsStyles } from "../../styles/Offsets";
import { InputCustom } from "../../components/shared/input/InputCustom";
import { Button } from "../../components/shared/button/Button";
import { EditedContent } from "../../components/editedContent/EditedContent";

export const PostOverviewScreen = ({ route }: RootStackScreenProps<ScreensList.PostOverview>) => {
  const { title, body } = route.params;

  return (
    <>
      <Layout>
        <TextCustom size="h2" title={title} style={[offsetsStyles.offsetTopLg, offsetsStyles.offsetBottomMd]} />
        <TextCustom size="h3" title={body} style={offsetsStyles.offsetBottomXxl} />
        <InputCustom label="New comment" style={offsetsStyles.offsetBottomXxl} />
        <Button title="Add new comment" onPress={() => undefined} style={offsetsStyles.offsetBottomXxl} />
        <TextCustom size="h2" title="Comments:" />
        <EditedContent
          onEdit={() => undefined}
          onRemove={() => undefined}
          onEditDone={() => undefined}
          title="comment title"
        />
      </Layout>
    </>
  );
};
