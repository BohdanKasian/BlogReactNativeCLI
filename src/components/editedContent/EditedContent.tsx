import * as React from "react";
import { TouchableOpacity, View } from "react-native";
import { mainStyles } from "../../styles/main";
import { offsetsStyles } from "../../styles/Offsets";
import { InputCustom } from "../shared/input/InputCustom";
import { TextCustom } from "../shared/text/TextCustom";
import { DoneIcon, EditIcon } from "../../assets/images/icons";
import { TrashIcon } from "../../assets/images/icons/TrashIcon";
import { PostType } from "../../../types/allPosts";
import { Optional } from "../../utils/setOptionalType";

export type EditedContentProps = {
  isEdit?: boolean;
  onEdit: () => void;
  onRemove: () => void;
  onEditDone: () => void;
} & Optional<Omit<PostType, "id">, "body">;

export const EditedContent = ({ title, body, isEdit, onEdit, onRemove, onEditDone }: EditedContentProps) => (
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
        <InputCustom value={title} label="Title" style={{ width: "50%", height: 35, minHeight: 35 }} />
      ) : (
        <TextCustom size="extra" weight="semiBold" title={title} />
      )}
      <View style={mainStyles.row}>
        {isEdit ? (
          <TouchableOpacity onPress={onEditDone} style={offsetsStyles.offsetRightMd}>
            <DoneIcon />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={onEdit} style={offsetsStyles.offsetRightMd}>
            <EditIcon />
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={onRemove}>
          <TrashIcon />
        </TouchableOpacity>
      </View>
    </View>
    {!!body && (
      <View style={[mainStyles.layoutPrivate, mainStyles.flex1, offsetsStyles.offsetBottomLg]}>
        {isEdit ? (
          <InputCustom value={body} label="Body" style={{ width: "50%", height: 35, minHeight: 35 }} />
        ) : (
          <TextCustom size="semiNormal" title={body} />
        )}
      </View>
    )}
  </>
);
