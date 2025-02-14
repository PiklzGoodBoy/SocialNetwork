import { createSlice } from "@reduxjs/toolkit";
import { usersAPI } from "../api/api";

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

export const getAuthUserData = () => {
  return (dispatch) => {
    usersAPI.me().then((data) => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserData(data.data));
        let userId = data.data.id;
        usersAPI.getProfile(userId).then((data) => {
          dispatch(setAuthUserInfo(data));
        });
      }
    });
  };
};

export const { setAuthUserData, setAuthUserInfo } = authSlice.actions;
export default authSlice.reducer;
