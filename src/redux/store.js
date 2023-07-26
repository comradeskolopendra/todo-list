import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
import { appReducer } from './reducer/appReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    appReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;