import { createSlice } from "@reduxjs/toolkit";
import { AllPostsType } from "../../../types/allPosts";
import { EnumStatusTypes } from "../../../types/statusType";
import { createPost, deletePost, fetchPosts, updatePost } from "../../api/postsThunk";

const allPostsSlice = createSlice({
  name: "allPosts",
  initialState: {
    posts: [] as AllPostsType,
    status: EnumStatusTypes.idle,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = EnumStatusTypes.loading;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = EnumStatusTypes.succeeded;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = EnumStatusTypes.failed;
        state.error = action.error.message ?? "An error occurred.";
      })
      .addCase(createPost.pending, (state) => {
        state.status = EnumStatusTypes.loading;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.status = EnumStatusTypes.succeeded;
        state.posts.push(action.payload);
      })
      .addCase(createPost.rejected, (state, action) => {
        state.status = EnumStatusTypes.failed;
        state.error = action.error.message ?? "An error occurred.";
      })
      .addCase(updatePost.pending, (state) => {
        state.status = EnumStatusTypes.loading;
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.status = EnumStatusTypes.succeeded;
        const updatedPost = action.payload;
        const index = state.posts.findIndex((post) => post.id === updatedPost.id);
        if (index !== -1) {
          state.posts[index] = updatedPost;
        }
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.status = EnumStatusTypes.failed;
        state.error = action.error.message ?? "An error occurred.";
      })
      .addCase(deletePost.pending, (state) => {
        state.status = EnumStatusTypes.loading;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.status = EnumStatusTypes.succeeded;
        const postId = action.payload;
        state.posts = state.posts.filter((post) => post.id !== postId);
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.status = EnumStatusTypes.failed;
        state.error = action.error.message ?? "An error occurred.";
      });
  },
});

// Export the reducer
export default allPostsSlice.reducer;
