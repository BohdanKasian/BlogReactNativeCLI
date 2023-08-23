import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { URL } from "./api";
import { PostType } from "../../types/allPosts";

// Define the async thunk to fetch posts
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(`${URL}posts`);
  return response.data;
});

// Define the async thunk to create a new post
export const createPost = createAsyncThunk("posts/createPost", async (newPost: Omit<PostType, "comments">) => {
  const response = await axios.post(`${URL}posts`, newPost);
  return response.data;
});

// Define the async thunk to update (patch) a post
export const updatePost = createAsyncThunk("posts/updatePost", async (updatedPost: Partial<PostType>) => {
  const { id, ...rest } = updatedPost;
  const response = await axios.patch(`${URL}posts/${id}`, rest);
  return response.data;
});

// Define the async thunk to delete a post
export const deletePost = createAsyncThunk("posts/deletePost", async (postId: number) => {
  await axios.delete(`${URL}posts/${postId}`);
  return postId;
});
