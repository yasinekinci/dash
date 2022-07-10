import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    auth: false,
    user: null
}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.auth = false;
            state.user = null;
        }
    }
})

export const { logout } = auth.actions;
export default auth.reducer;
