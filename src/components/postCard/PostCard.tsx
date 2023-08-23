import * as React from "react";
import { TouchableOpacity, TouchableWithoutFeedbackProps } from "react-native";
import { mainStyles } from "../../styles/main";
import { postCartStyles } from "./PostCartStyles";
import { offsetsStyles } from "../../styles/Offsets";
import { borderRadiusStyle } from "../../styles/BorderRadiusStyle";
import { Surface } from "react-native-paper";
import { PostType } from "../../../types/allPosts";
import { EditedContent, EditedContentProps } from "../editedContent/EditedContent";

type PostCardTypes = {
  index: number;
  onPress: () => void;
} & Omit<PostType, "id"> &
  EditedContentProps &
  TouchableWithoutFeedbackProps;

export const PostCard = ({ index, onPress, onEdit, onRemove, onEditDone, isEdit, title, body }: PostCardTypes) => {
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
        <EditedContent
          body={body}
          title={title}
          isEdit={isEdit}
          onEdit={onEdit}
          onRemove={onRemove}
          onEditDone={onEditDone}
        />
      </Surface>
    </TouchableOpacity>
  );
};
