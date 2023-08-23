/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import { useCallback, useEffect } from "react";
import { FlatList, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootStackScreenProps, ScreensList } from "../../navigation/types";
import { useNavigation } from "@react-navigation/native";
import { deletePost, updatePost } from "../../api/postsThunk";
import { fetchPosts } from "../../api/postsThunk";
import { PostListFooter } from "../../components/postCard/PostListFooter";
import { Loading } from "../../components/loading/Loading";
import { PostCard } from "../../components/postCard/PostCard";
import { EmptyList } from "../../components/shared/EmptyList/EmptyList";
import { AddNewPost } from "../../components/addNewPost/AddNewPost";
import { TextCustom } from "../../components/shared/text/TextCustom";
import { PostType } from "../../../types/allPosts";
import { AppRootState } from "../../redux/store";
import { EnumStatusTypes } from "../../../types/statusType";
import { onEditDoneType } from "../../components/editedContent/EditedContent";
import { mainStyles } from "../../styles/main";

export const MainScreen = ({}: RootStackScreenProps<ScreensList.Main>) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector((state: AppRootState) => state.allPosts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const onDelete = (postId: number) => () => {
    dispatch(deletePost(postId));
  };

  const onUpdatePost: onEditDoneType = (post) => () => {
    dispatch(updatePost(post));
  };

  const onPressPost = (post: PostType) => () => {
    navigation.navigate(ScreensList.PostOverview, post);
  };

  const renderPostsItems = useCallback(
    (item: { item: PostType; index: number }) => (
      <PostCard
        onRemove={onDelete}
        onEditDone={onUpdatePost}
        onPress={onPressPost(item.item)}
        index={item.index}
        {...item.item}
      />
    ),
    []
  );
  return (
    <>
      <AddNewPost />
      <View style={[mainStyles.justifyBetween, mainStyles.flex1]}>
        <FlatList
          data={posts}
          renderItem={renderPostsItems}
          contentContainerStyle={{
            justifyContent: posts?.length ? "flex-start" : "center",
            flex: posts?.length ? 0 : 1,
          }}
          keyExtractor={(item) => item?.id + item.title}
          onEndReachedThreshold={0.3}
          ListFooterComponent={posts?.length ? <PostListFooter /> : undefined}
          ListEmptyComponent={<EmptyList />}
        />
        <View></View>
      </View>
      {status === EnumStatusTypes.loading && <Loading />}
      {error && <TextCustom size="h1" title={error || "Error"} />}
    </>
  );
};
