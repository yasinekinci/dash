import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false
}

const proxy = createSlice({
    name: 'proxy',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    }
})

export const { setLoading } = proxy.actions;
export default proxy.reducer;
