import { createSlice } from "@reduxjs/toolkit";
import { usersAPI } from "../api/api";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgres: [],
  },
  reducers: {
    followSuccess(state, action) {
      state.users = state.users.map((u) => {
        if (u.id === action.payload) {
          return { ...u, followed: true };
        }
        return u;
      });
    },
    unfollowSuccess(state, action) {
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
    toogleIsFollowingProgres(state, action) {
      state.followingInProgres = action.payload.follow
        ? [...state.followingInProgres, action.payload.userId]
        : state.followingInProgres.filter((id) => id !== action.payload.userId);
    },
  },
});

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toogleIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    usersAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(toogleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    });
  };
};

export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toogleIsFollowingProgres({ follow: true, userId }));
    usersAPI.follow(userId).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(followSuccess(userId));
      }
      dispatch(toogleIsFollowingProgres({ follow: false, userId }));
    });
  };
};

export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toogleIsFollowingProgres({ follow: true, userId }));
    usersAPI.unfollow(userId).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
      }
      dispatch(toogleIsFollowingProgres({ follow: false, userId }));
    });
  };
};

export const {
  followSuccess,
  unfollowSuccess,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toogleIsFetching,
  toogleIsFollowingProgres,
} = usersSlice.actions;

export default usersSlice.reducer;
