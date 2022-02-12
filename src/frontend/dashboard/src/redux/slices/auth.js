import { createSlice } from '@reduxjs/toolkit';
import { createUser } from './user'

const initialState = {
    auth: false,
    user: null
}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.auth = true;
            state.user = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createUser.fulfilled, (state, { payload }) => {
            if (payload.isSuccess) {
                state.auth = true;
                state.user = payload.data;
            }
        });
    }
})

export const { login, logout } = auth.actions;
export default auth.reducer;
