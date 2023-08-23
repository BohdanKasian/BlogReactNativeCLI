/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import { RootStackScreenProps, ScreensList } from "../../navigation/types";
import { mainStyles } from "../../styles/main";
import { PostListFooter } from "../../components/postCard/PostListFooter";
import { Loading } from "../../components/loading/Loading";
import { FlatList, View } from "react-native";
import { PostCard } from "../../components/postCard/PostCard";
import { PostType } from "../../../types/allPosts";
import { EmptyList } from "../../components/shared/EmptyList/EmptyList";
import { AddNewPost } from "../../components/addNewPost/AddNewPost";
import { useNavigation } from "@react-navigation/native";

const data = [{ id: "1", title: "First", body: "body text" }];

export const MainScreen = ({}: RootStackScreenProps<ScreensList.Root>) => {
  const navigation = useNavigation();
  const onPressPost = (post: PostType) => () => {
    navigation.navigate(ScreensList.PostOverview, post);
  };

  const renderPostsItems = (item: { item: PostType; index: number }) => {
    return (
      <PostCard
        onEdit={() => {}}
        onRemove={() => {}}
        onEditDone={() => {}}
        onPress={onPressPost(item.item)}
        index={item.index}
        {...item.item}
      />
    );
  };

  return (
    <>
      <AddNewPost />
      <View style={[mainStyles.justifyBetween, mainStyles.flex1]}>
        <FlatList
          data={data}
          renderItem={renderPostsItems}
          // style={screenStyles.remindersList}
          contentContainerStyle={{
            justifyContent: data?.length ? "flex-start" : "center",
            flex: data?.length ? 0 : 1,
          }}
          keyExtractor={(item) => item?.id + item.title}
          onEndReachedThreshold={0.3}
          ListFooterComponent={data?.length ? <PostListFooter /> : undefined}
          ListEmptyComponent={<EmptyList />}
        />
        <View></View>
      </View>
      {false && <Loading />}
    </>
  );
};
