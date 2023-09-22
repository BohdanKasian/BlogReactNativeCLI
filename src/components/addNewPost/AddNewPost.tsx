import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../api/postsThunk";
import { Layout } from "../Layout";
import { Button } from "../shared/button/Button";
import { InputCustom } from "../shared/input/InputCustom";
import { createRandomId } from "../../utils/createRandomId";
import { PostFieldsEnum } from "../../../types/allPosts";
import { offsetsStyles } from "../../styles/Offsets";

export const AddNewPost = () => {
  const [newPost, setNewPost] = useState({ [PostFieldsEnum.title]: "", [PostFieldsEnum.body]: "" });
  const dispatch = useDispatch();

  const onChange = (fieldName: PostFieldsEnum) => (val: string) => {
    setNewPost({ ...newPost, [fieldName]: val });
  };

  const onCreatePost = () => {
    dispatch(createPost({ ...newPost, id: createRandomId() }));
  };
  return (
    <Layout style={{ flex: 0 }}>
      <InputCustom
        label="Title"
        accessibilityLabel="Title"
        value={newPost.title}
        onChangeText={onChange(PostFieldsEnum.title)}
      />
      <InputCustom accessibilityLabel="Body" multilineLabel="Body" value={newPost.body} multiline onChangeText={onChange(PostFieldsEnum.body)} />
      <Button
        title="Create new post"
        onPress={onCreatePost}
        style={[offsetsStyles.offsetTopLg, offsetsStyles.offsetBottomXxl]}
      />
    </Layout>
  );
};
