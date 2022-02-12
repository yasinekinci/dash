import { configureStore, combineReducers } from '@reduxjs/toolkit'
import all from './slices/';

const rootReducer = combineReducers(all);

const store = configureStore({
    reducer: rootReducer
});

export default store;
