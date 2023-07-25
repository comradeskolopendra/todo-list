import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import appReducer from "./reducers/appReducer";

export default configureStore({
    reducer: appReducer,
    middleware: [...getDefaultMiddleware()]
})