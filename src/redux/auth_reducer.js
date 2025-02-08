import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    email: null,
    id: null,
    login: null,
    isAuth: false,
    // isFetching: false,
  },
  reducers: {
    setAuthUserData(state, action) {
      state.email = action.payload.email;
      state.login = action.payload.login;
      state.id = action.payload.id;
      state.isAuth = true;
      // return { ...state, ...action.data };
    },
  },
});

export const { setAuthUserData } = authSlice.actions;
export default authSlice.reducer;
