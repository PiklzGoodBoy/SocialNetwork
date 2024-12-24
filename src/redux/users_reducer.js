import { createSlice } from '@reduxjs/toolkit'

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: []
    },
    reducers: {
        follow: (state, action) => {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
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
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        },
        set_users: (state, action) => {
            return {
                ...state,
                users: [...state.users, ...action.payload]
            }
        }
    }
});

export const { follow, unfollow, set_users } = usersSlice.actions;
export default usersSlice.reducer;
