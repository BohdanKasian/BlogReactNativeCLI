/* eslint-disable @typescript-eslint/ban-ts-comment */
import { AnyAction, CombinedState, combineReducers, configureStore } from "@reduxjs/toolkit";
import allPosts from "./reducers/allPosts";
import { AllPostsType } from "../../types/allPosts";

const combinedReducer = combineReducers({
  allPosts: allPosts,
});

const rootReducer = (
  state:
    | CombinedState<{
        allPosts: { posts: AllPostsType };
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

export type AppRootState = ReturnType<typeof store.getState>;
