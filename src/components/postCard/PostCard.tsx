import * as React from "react";
import { TouchableOpacity, TouchableWithoutFeedbackProps } from "react-native";
import { Surface } from "react-native-paper";
import { EditedContent, EditedContentProps } from "../editedContent/EditedContent";
import { PostType } from "../../../types/allPosts";
import { mainStyles } from "../../styles/main";
import { offsetsStyles } from "../../styles/Offsets";
import { borderRadiusStyle } from "../../styles/BorderRadiusStyle";
import { postCartStyles } from "./PostCartStyles";

type PostCardTypes = {
  index: number;
  onPress: () => void;
} & PostType &
  EditedContentProps &
  Omit<TouchableWithoutFeedbackProps, "id">;

export const PostCard = ({ index, onPress, onRemove, onEditDone, id, title, body }: PostCardTypes) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Surface
        style={[
          index ? undefined : offsetsStyles.offsetTopXl,
          offsetsStyles.offsetBottomSm,
          mainStyles.column,
          mainStyles.justifyBetween,
          borderRadiusStyle.lg,
          postCartStyles.container,
        ]}
      >
        <EditedContent id={id} body={body} title={title} onRemove={onRemove} onEditDone={onEditDone} />
      </Surface>
    </TouchableOpacity>
  );
};
