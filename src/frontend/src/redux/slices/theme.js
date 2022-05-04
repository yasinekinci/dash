import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mode: "dark",
    mobileOpen: false,
    sideBarSmallSize: false
}

const theme = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setMode: (state, { payload }) => {
            state.mode = payload;
        },
        setMobileOpen: (state, { payload }) => {
            state.mobileOpen = payload;
        },
        setSideBarSmallSize: (state, { payload }) => {
            state.sideBarSmallSize = payload;
        }
    }
})

export const { setMode, setMobileOpen, setSideBarSmallSize } = theme.actions;
export default theme.reducer;
