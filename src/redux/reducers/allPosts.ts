import { createSlice } from "@reduxjs/toolkit";
import { AllPostsType } from "../../../types/allPosts";

const allPostsSlice = createSlice({
  name: "allPosts",
  initialState: {
    posts: [] as AllPostsType,
  },
  reducers: {},
});
export const {} = allPostsSlice.actions;
export default allPostsSlice.reducer;
