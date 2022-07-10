import { createSlice } from '@reduxjs/toolkit';
import { removeStoredAuthToken, storeAuthToken } from 'utils/authToken';

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
            storeAuthToken(payload.token.token);
        },
        logout: (state) => {
            state.user = null;
            removeStoredAuthToken();
        }
    }
})

export const { login, logout } = auth.actions;
export default auth.reducer;
