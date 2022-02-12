import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import proxyExecute from 'proxy';
import { notification } from 'antd';

export const createUser = createAsyncThunk('createUser', async (variables) => {
    return proxyExecute({ method: 'createUser', variables });
})

const initialState = {
    currentUser: null,
    isFethching: false,
    error: false
}

const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUser: (state, action) => {

        },
        checkUser: (state, action) => {

        }
    },
    extraReducers: (builder) => {
        builder.addCase(createUser.rejected, (state, { payload }) => {
            notification.open({ type: "error", message: "This e-mail address may be registered in the system. Please try login or registering with a different email address.", placement: "bottomRight" });
        });
    }
})

export const { getUser, checkUser } = user.actions;
export default user.reducer;
