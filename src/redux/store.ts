/* eslint-disable @typescript-eslint/ban-ts-comment */
import { AnyAction, CombinedState, combineReducers, configureStore } from "@reduxjs/toolkit";
import allPosts from "./reducers/allPosts";
import commentsByPost from "./reducers/commentsByPost";
import { AllPostsType } from "../../types/allPosts";
import { CommentType } from "../../types/comments";

const combinedReducer = combineReducers({
  allPosts: allPosts,
  commentsByPost: commentsByPost,
});

const rootReducer = (
  state:
    | CombinedState<{
        allPosts: { posts: AllPostsType };
        commentsByPost: { comments: CommentType[] };
      }>
    | undefined,
  action: AnyAction
) => {
  if (action.type === "user/logOut") {
    state = undefined;
  }
  return combinedReducer(state, action);
};

export const store = configureStore({
  // @ts-ignore
  reducer: rootReducer,
  // @ts-ignore
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type AppDispatch = typeof store.dispatch;

export type AppRootState = ReturnType<typeof store.getState>;
