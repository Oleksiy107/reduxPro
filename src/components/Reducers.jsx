
import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",

  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateText1: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.text1 = action.payload.newText1;
      }
    },
    updateText2: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.text2 = action.payload.newText2;
      }
    },
    clearText1: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.text1 = "";
      }
    },
    clearText2: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.text2 = "";
      }
    },
  },
});
export const {
  addTodo,
  deleteTodo,
  updateText1,
  updateText2,
  clearText1,
  clearText2,
} = todosSlice.actions;
export default todosSlice.reducer;
