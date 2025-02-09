import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    email: null,
    id: null,
    login: null,
    isAuth: false,
    photoSmall: null,
    // isFetching: false,
  },
  reducers: {
    setAuthUserData(state, action) {
      state.email = action.payload.email;
      state.login = action.payload.login;
      state.id = action.payload.id;
      state.isAuth = true;
    },
    setAuthUserInfo(state, action) {
      state.photoSmall = action.payload.photos.small;
    },
  },
});

export const { setAuthUserData, setAuthUserInfo } = authSlice.actions;
export default authSlice.reducer;
