import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  todos: [],
  todosIDs: [],
  isModalOpened: false,
  isEdit: false
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
    },
    updateEditMode(state, action) {
      state.isEdit = action.payload;
    }
  },
});

export const { setDataAction, setTodosIDs, updateModalOpened, deleteTodoID, addTodoID, updateEditMode } =
  appReducer.actions;

export default appReducer.reducer;
