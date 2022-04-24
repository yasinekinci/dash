import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mode: "light",
    mobileOpen: false
}

const theme = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setMode: (state, { payload }) => {
            state.mode = payload;
        },
        setMobileOpen: (state, { payload }) => {
            state.mobileOpen = payload;
        },
    }
})

export const { setMode, setMobileOpen } = theme.actions;
export default theme.reducer;
