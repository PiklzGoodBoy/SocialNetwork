import { createSlice } from '@reduxjs/toolkit'

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        pageSize: 5,
        totalUsersCount: 21,
        currentPage: 2

    },
    reducers: {
        follow: (state, action) => {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.payload) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        },
        unfollow: (state, action) => {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.payload) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        },
        set_users: (state, action) => {
            return {
                ...state,
                users: [...action.payload]
            }
        },
        set_current_page: (state, action) => {
            return {
                ...state,
                currentPage: [action.payload]
            }
        },
        set_total_users_count: (state, action) => {
            return {
                ...state,
                totalUsersCount: [action.payload]
            }
        }
    }
});

export const { follow, unfollow, set_users, set_current_page, set_total_users_count } = usersSlice.actions;
export default usersSlice.reducer;
