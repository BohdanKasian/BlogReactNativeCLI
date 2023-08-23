import { createSlice } from "@reduxjs/toolkit";
import { EnumStatusTypes } from "../../../types/statusType";
import { CommentType } from "../../../types/comments";
import { createComment, deleteComment, fetchComments, updateComment } from "../../api/commentsThunk";

const allPostsSlice = createSlice({
  name: "commentsByPost",
  initialState: {
    comments: [] as CommentType[],
    status: EnumStatusTypes.idle,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.status = EnumStatusTypes.loading;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.status = EnumStatusTypes.succeeded;
        const { data, postId } = action.payload;
        state.comments = data.filter((item: CommentType) => item.postId === postId);
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.status = EnumStatusTypes.failed;
        console.log("ID", action.error.message);
        state.error = action.error.message ?? "An error occurred.";
      })
      .addCase(createComment.pending, (state) => {
        state.status = EnumStatusTypes.loading;
      })
      .addCase(createComment.fulfilled, (state, action) => {
        state.status = EnumStatusTypes.succeeded;
        state.comments.push(action.payload);
      })
      .addCase(createComment.rejected, (state, action) => {
        state.status = EnumStatusTypes.failed;
        state.error = action.error.message ?? "An error occurred.";
      })
      .addCase(updateComment.pending, (state) => {
        state.status = EnumStatusTypes.loading;
      })
      .addCase(updateComment.fulfilled, (state, action) => {
        state.status = EnumStatusTypes.succeeded;
        const updatedComment = action.payload;
        const index = state.comments.findIndex((post) => post.id === updatedComment.id);
        if (index !== -1) {
          state.comments[index] = updatedComment;
        }
      })
      .addCase(updateComment.rejected, (state, action) => {
        state.status = EnumStatusTypes.failed;
        state.error = action.error.message ?? "An error occurred.";
      })
      .addCase(deleteComment.pending, (state) => {
        state.status = EnumStatusTypes.loading;
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.status = EnumStatusTypes.succeeded;
        const postId = action.payload;

        state.comments = state.comments.filter((post) => post.id !== postId);
      })
      .addCase(deleteComment.rejected, (state, action) => {
        state.status = EnumStatusTypes.failed;
        state.error = action.error.message ?? "An error occurred.";
      });
  },
});

// Export the reducer
export default allPostsSlice.reducer;
