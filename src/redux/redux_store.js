// import { combineReducers, createStore } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";
import usersReducer from "./users_reducer";
import authReducer from "./auth_reducer";

export const store = configureStore({
  reducer: {
    usersPage: usersReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
  },
});

window.store = store;

export default store;
