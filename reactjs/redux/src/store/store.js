import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../reducer/TodoSlice.js";

export const store = configureStore({
  reducer: {
    todos: todoSlice,
  },
});

export default store;
