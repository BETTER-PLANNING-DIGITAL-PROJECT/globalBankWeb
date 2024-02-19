import { combineReducers,} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import {Reducer} from "./reducer";


const reducers = combineReducers({
    reducer: Reducer
});


export const store = configureStore({ reducer: reducers, middleware: (getDefaultMiddleware) => getDefaultMiddleware() });
