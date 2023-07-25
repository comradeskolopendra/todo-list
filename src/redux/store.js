import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { appReducer } from "./reducer";

export default configureStore({
    reducer: { appReducer },
    middleware: [...getDefaultMiddleware()]
})