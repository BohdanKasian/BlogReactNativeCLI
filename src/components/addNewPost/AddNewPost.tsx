import { InputCustom } from "../shared/input/InputCustom";
import { Layout } from "../Layout";
import { Button } from "../shared/button/Button";
import { useState } from "react";
import { offsetsStyles } from "../../styles/Offsets";

const POST_FIELD_TITLE = "title";
const POST_FIELD_BODY = "body";

export const AddNewPost = () => {
  const [newPost, setNewPost] = useState({ [POST_FIELD_TITLE]: "", [POST_FIELD_BODY]: "" });

  const onChange = (fieldName: typeof POST_FIELD_TITLE | typeof POST_FIELD_BODY) => (val: string) => {
    setNewPost({ ...newPost, [fieldName]: val });
  };

  const onCreatePost = () => {};
  return (
    <Layout style={{ flex: 0 }}>
      <InputCustom label="Title" value={newPost.title} onChangeText={onChange(POST_FIELD_TITLE)} />
      <InputCustom multilineLabel="Body" value={newPost.body} multiline onChangeText={onChange(POST_FIELD_BODY)} />
      <Button
        title="Create new post"
        onPress={onCreatePost}
        style={[offsetsStyles.offsetTopLg, offsetsStyles.offsetBottomXxl]}
      />
    </Layout>
  );
};
