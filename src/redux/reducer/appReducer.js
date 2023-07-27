import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    todos: []
};

const appReducer = createSlice({
    name: "app",
    initialState,
    reducers: {
        setDataAction(state, action) {
            state.todos = action.payload;
        }
    }
})

export const {
    setDataAction
} = appReducer.actions;

export default appReducer.reducer;
// const SET_DATA = "SET_DATA";

// export const appReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case SET_DATA:
//             return { ...state, todos: [...state.todos, ...action.payload] };

//         default:
//             return state;
//     }
// }

// export const setDataAction = (payload) => ({ type: SET_DATA, payload })