import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { URL } from "./api";
import { CommentType } from "../../types/comments";

// Define the async thunk to fetch Comments
export const fetchComments = createAsyncThunk("comments/fetchComments", async (postId: number) => {
  const response = await axios.get(`${URL}comments`);
  return { data: response.data, postId };
});

// Define the async thunk to create a new Comment
export const createComment = createAsyncThunk(
  "comments/createComment",
  async (newComment: Omit<CommentType, "comments">) => {
    const response = await axios.post(`${URL}comments`, newComment);
    return response.data;
  }
);

// Define the async thunk to update (patch) a Comment
export const updateComment = createAsyncThunk(
  "comments/updateComment",
  async (updatedComment: Partial<CommentType>) => {
    const { id, ...rest } = updatedComment;
    const response = await axios.patch(`${URL}comments/${id}`, rest);
    return response.data;
  }
);

// Define the async thunk to delete a Comment
export const deleteComment = createAsyncThunk("Comments/deleteComment", async (commentId: number) => {
  await axios.delete(`${URL}comments/${commentId}`);
  return commentId;
});
