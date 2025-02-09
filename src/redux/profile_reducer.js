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
    profile: null,
  },
  reducers: {
    addPost(state, action) {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      state.posts = [...state.posts, newPost];
      state.newPostText = "";
    },
    updateNewPostText(state, action) {
      state.newPostText = action.payload;
    },
    setUserProfile(state, action) {
      state.profile = action.payload;
    },
  },
});

export const { addPost, updateNewPostText, setUserProfile } =
  profileSlice.actions;
export default profileSlice.reducer;
