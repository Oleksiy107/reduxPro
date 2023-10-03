import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./Reducers";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },

  devTools: process.env.NODE_ENV !== "production",
});
