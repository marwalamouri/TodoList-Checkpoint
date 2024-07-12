import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "./toDoSlice";

const store = configureStore({
  reducer: { todo: toDoReducer },
});

export default store;
