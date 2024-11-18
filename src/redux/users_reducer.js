import { createSlice } from '@reduxjs/toolkit'

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [
            {
                id: 1,
                photoURL: 'https://plus.unsplash.com/premium_photo-1728498509874-eb3a7438ccfc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                followed: true,
                fullName: "Andrey ",
                status: "I am a bose",
                location: {
                    city: "Rayzan",
                    country: "RussianFederation"
                }
            }
        ]
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
                users: [...state.users, ...action.users]
            }
        }

    }
});

export const { follow, unfollow, set_users } = usersSlice.actions;
export default usersSlice.reducer;
