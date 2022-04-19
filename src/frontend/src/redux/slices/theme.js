import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mode: "light"
}

const theme = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setMode: (state, { payload }) => {
            state.mode = payload;
        }
    }
})

export const { setMode } = theme.actions;
export default theme.reducer;
