import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  todos: [],
  todosIDs: [],
  isModalOpened: false,
};

const appReducer = createSlice({
  name: "app",
  initialState,
  reducers: {
    setDataAction(state, action) {
      state.todos = action.payload;
    },
    setTodosIDs(state, action) {
      state.todosIDs = action.payload;
    },
    updateModalOpened(state, action) {
      state.isModalOpened = action.payload;
    }
  },
});

export const { setDataAction, setTodosIDs, updateModalOpened } =
  appReducer.actions;

export default appReducer.reducer;
