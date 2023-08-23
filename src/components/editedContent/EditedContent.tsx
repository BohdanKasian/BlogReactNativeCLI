import * as React from "react";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { InputCustom } from "../shared/input/InputCustom";
import { TextCustom } from "../shared/text/TextCustom";
import { CanselIcon, DoneIcon, EditIcon } from "../../assets/images/icons";
import { TrashIcon } from "../../assets/images/icons/TrashIcon";
import { PostFieldsEnum, PostType } from "../../../types/allPosts";
import { Optional } from "../../utils/setOptionalType";
import { mainStyles } from "../../styles/main";
import { offsetsStyles } from "../../styles/Offsets";

export type onEditDoneType = (post: Optional<PostType, "body">) => () => void;

enum handledActionEnum {
  remove = "remove",
  edit = "edit",
}

export type EditedContentProps = {
  isComment?: boolean;
  onRemove: (postId: number) => () => void;
  onEditDone: onEditDoneType;
} & Optional<PostType, "body">;

export const EditedContent = ({ id, title, body, isComment, onRemove, onEditDone }: EditedContentProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const [updatedPost, setUpdatedPost] = useState({
    id,
    title,
    body,
  });
  const onEdit = () => setIsEdit(!isEdit);
  const handleAction = (action: handledActionEnum) => () => {
    switch (action) {
      case handledActionEnum.remove: {
        onRemove(id)();
        break;
      }
      case handledActionEnum.edit: {
        onEditDone(updatedPost)();
        break;
      }
    }
    setIsEdit(false);
  };

  const onChange = (fieldName: PostFieldsEnum) => (val: string) => {
    setUpdatedPost({
      ...updatedPost,
      [fieldName]: val,
    });
  };

  return (
    <>
      <View
        style={[
          mainStyles.row,
          mainStyles.flex1,
          mainStyles.justifyBetween,
          mainStyles.layoutPrivate,
          offsetsStyles.offsetBottomLg,
        ]}
      >
        {isEdit ? (
          <InputCustom
            value={updatedPost.title}
            label="Title"
            onChangeText={onChange(PostFieldsEnum.title)}
            style={{ width: "50%", height: 35, minHeight: 35 }}
          />
        ) : (
          <TextCustom size="extra" weight="semiBold" title={title} />
        )}
        <View style={mainStyles.row}>
          {isEdit ? (
            <>
              <TouchableOpacity onPress={handleAction(handledActionEnum.edit)} style={offsetsStyles.offsetRightMd}>
                <DoneIcon />
              </TouchableOpacity>
              {isComment && (
                <TouchableOpacity onPress={onEdit} style={offsetsStyles.offsetRightMd}>
                  <CanselIcon />
                </TouchableOpacity>
              )}
            </>
          ) : (
            <TouchableOpacity onPress={onEdit} style={offsetsStyles.offsetRightMd}>
              <EditIcon />
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={handleAction(handledActionEnum.remove)}>
            <TrashIcon />
          </TouchableOpacity>
        </View>
      </View>
      {!!body && isComment && (
        <View style={[mainStyles.layoutPrivate, mainStyles.flex1, offsetsStyles.offsetBottomLg]}>
          {isEdit ? (
            <InputCustom
              value={updatedPost.body}
              onChangeText={onChange(PostFieldsEnum.body)}
              label="Body"
              style={{ width: "50%", height: 35, minHeight: 35 }}
            />
          ) : (
            <TextCustom size="semiNormal" title={body} />
          )}
        </View>
      )}
    </>
  );
};
