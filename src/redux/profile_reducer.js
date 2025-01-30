import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: 12 },
      { id: 2, message: "It's my first post", likesCount: 11 },
      { id: 3, message: "Blabla", likesCount: 11 },
      { id: 4, message: "Dada", likesCount: 11 },
    ],
    newPostText: "it-kamasutra.com",
  },
  reducers: {
    add_post_creator(state, action) {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      state.posts = [...state.posts, newPost];
      state.newPostText = "";
    },
    update_new_post_creator(state, action) {
      state.newPostText = action.payload;
    },
  },
});

export const { add_post_creator, update_new_post_creator } =
  profileSlice.actions;
export default profileSlice.reducer;
