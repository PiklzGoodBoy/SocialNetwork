import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
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
    setUsers(state, action) {
      state.users = [...action.payload];
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setTotalUsersCount(state, action) {
      state.totalUsersCount = action.payload;
    },
    toogleIsFetching(state, action) {
      state.isFetching = action.payload;
    },
  },
});

export const {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toogleIsFetching,
} = usersSlice.actions;
export default usersSlice.reducer;
