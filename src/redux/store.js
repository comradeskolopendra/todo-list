import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from "./reducer";

export default configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware()]
})