import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: false,
  },
  reducers: {
    follow(state, action) {
      state.users = state.users.map((u) => {
        if (u.id === action.payload) {
          return { ...u, followed: true };
        }
        return u;
      });
    },
    unfollow(state, action) {
      state.users = state.users.map((u) => {
        if (u.id === action.payload) {
          return { ...u, followed: false };
        }
        return u;
      });
    },
    set_users(state, action) {
      state.users = [...action.payload];
    },
    set_current_page(state, action) {
      state.currentPage = action.payload;
    },
    set_total_users_count(state, action) {
      state.totalUsersCount = action.payload;
    },
    toogle_is_fetching(state, action) {
      state.isFetching = action.payload;
    },
  },
});

export const {
  follow,
  unfollow,
  set_users,
  set_current_page,
  set_total_users_count,
  toogle_is_fetching,
} = usersSlice.actions;
export default usersSlice.reducer;
