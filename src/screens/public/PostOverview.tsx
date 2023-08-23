/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Layout } from "../../components/Layout";
import { TextCustom } from "../../components/shared/text/TextCustom";
import { Button } from "../../components/shared/button/Button";
import { InputCustom } from "../../components/shared/input/InputCustom";
import { EditedContent, onEditDoneType } from "../../components/editedContent/EditedContent";
import { createComment, deleteComment, fetchComments, updateComment } from "../../api/commentsThunk";
import { Loading } from "../../components/loading/Loading";
import { createRandomId } from "../../utils/createRandomId";
import { RootStackScreenProps, ScreensList } from "../../navigation/types";
import { EnumStatusTypes } from "../../../types/statusType";
import { AppRootState } from "../../redux/store";
import { offsetsStyles } from "../../styles/Offsets";

export const PostOverviewScreen = ({ route }: RootStackScreenProps<ScreensList.PostOverview>) => {
  const { title, body, id } = route.params;
  const dispatch = useDispatch();
  const [newComment, setNewComment] = useState("");
  const { comments, status, error } = useSelector((state: AppRootState) => state.commentsByPost);
  useEffect(() => {
    dispatch(fetchComments(id));
  }, []);

  const onCreateComment = () => {
    setNewComment("");
    dispatch(createComment({ id: createRandomId(), title: newComment, postId: id }));
  };

  const onChange = (val: string) => {
    setNewComment(val);
  };

  const onDelete = (commentId: number) => () => {
    dispatch(deleteComment(commentId));
  };

  const onUpdateComment: onEditDoneType = (comment) => () => {
    dispatch(updateComment(comment));
  };

  return (
    <>
      <Layout>
        <TextCustom size="h2" title={title} style={[offsetsStyles.offsetTopLg, offsetsStyles.offsetBottomMd]} />
        <TextCustom size="h3" title={body} style={offsetsStyles.offsetBottomXxl} />
        <InputCustom
          label="New comment"
          value={newComment}
          style={offsetsStyles.offsetBottomXxl}
          onChangeText={onChange}
        />
        <Button title="Add new comment" onPress={onCreateComment} style={offsetsStyles.offsetBottomXxl} />
        <TextCustom size="h2" title="Comments:" style={offsetsStyles.offsetBottomXxl} />
        <ScrollView>
          {comments.map((comment) => (
            <EditedContent
              key={comment.id + comment.postId}
              id={comment.id}
              title={comment.title}
              isComment
              onRemove={onDelete}
              onEditDone={onUpdateComment}
            />
          ))}
        </ScrollView>
      </Layout>
      {status === EnumStatusTypes.loading && <Loading />}
      {error && <TextCustom size="h1" title={error || "Error"} />}
    </>
  );
};
