import { combineReducers, configureStore } from '@reduxjs/toolkit';
import appReducer from './reducer/appReducer';
import thunk from 'redux-thunk';

const store = configureStore({ reducer: appReducer, middleware: [thunk] })
export default store;