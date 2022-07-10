import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: null,
    user: null
}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, { payload }) => {
            state.user = payload.user;
            state.token = payload.token;
        },
        logout: (state) => {
            state.user = null;
        }
    }
})

export const { login, logout } = auth.actions;
export default auth.reducer;
