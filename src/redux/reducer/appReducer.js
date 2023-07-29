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
    },
    deleteTodoID(state, action) {
      state.todosIDs = state.todosIDs.filter(element => element !== action.payload);
    },
    addTodoID(state, action) {
      state.todosIDs = [...state.todosIDs, action.payload];
    }
  },
});

export const { setDataAction, setTodosIDs, updateModalOpened, deleteTodoID, addTodoID } =
  appReducer.actions;

export default appReducer.reducer;
