import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import appReducer from './reducer/appReducer';

const store = combineReducers({
    app: appReducer
})

export default configureStore({
    reducer: store,
    middleware: [...getDefaultMiddleware()],
})