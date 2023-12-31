import { createSlice } from "@reduxjs/toolkit";
import Cookie from 'js-cookie'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        loggedUser: Cookie.get('profile') ? JSON.parse(Cookie.get('profile')) : null,
        isFetching: false,
        error: null
    },
    reducers: {
        start: (state) => { state.isFetching = true; state.error = null },
        end: (state) => { state.isFetching = false; state.error = false },
        error: (state, action) => { state.isFetching = false; state.error = action.payload },

        registerReducer: (state) => {
            return state
        },
        loginReducer: (state, action) => {
            state.loggedUser = action.payload
        },
        logoutReducer: (state, action) => {
            state.loggedUser = null
        }
    }
})

export const { start, end, error, registerReducer, loginReducer, logoutReducer } = userSlice.actions
export default userSlice.reducer