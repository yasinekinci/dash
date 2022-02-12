import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import proxyExecute from '../../proxy';

export const getRoutes = createAsyncThunk('/api/getRoutes', async () => {
    return proxyExecute({ method: "routes" });
})

const DASHBOARD_ID = 1;

const initialState = {
    pages: [],
    routes: [],
    activeTabId: DASHBOARD_ID,
}

const admin = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setPages: (state, { payload }) => {
            state.pages = payload;
        },
        addNewPage: (state, { payload }) => {
            state.pages = [...state.pages, payload];
            state.activeTabId = payload.uniqueId;
        },
        setActiveTabId: (state, { payload }) => {
            state.activeTabId = payload;
        },
        setInitialValues: (state, { payload }) => {
            const { uniqueId, initialValues } = payload;
            let page = state.pages.find(x => x.uniqueId == uniqueId);
            if (page) {
                page.initialValues = initialValues;
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getRoutes.fulfilled, (state, { payload }) => {
            state.routes = payload.data;
        })
    },
});

export const { setPages, addNewPage, setActiveTabId, setInitialValues } = admin.actions;
export default admin.reducer;