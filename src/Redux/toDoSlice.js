import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const toDoSlice = createSlice({
  name: "toDo",
  initialState: {
    todos: [
      { id: uuidv4(), task: "Learn ReactJS", isEdited: false, isDone: false },
    ],
    filter: "All",
  },
  reducers: {
    addToDo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    editToDo: (state, action) => {
      state.todos.map((el) =>
        el.id == action.payload ? (el.isEdited = !el.isEdited) : el.isEdited
      );
    },
    updateToDo: (state, action) => {
      state.todos.map((el) =>
        el.id == action.payload.id ? (el.task = action.payload.task) : el.task
      );
    },
    deleteToDo: (state, action) => {
      state.todos = state.todos.filter((el) => el.id != action.payload);
    },
    isDoneToDo: (state, action) => {
      state.todos.map((el) =>
        el.id == action.payload ? (el.isDone = !el.isDone) : el.isDone
      );
    },
    filterDone: (state) => {
      state.filter = "Done";
    },
    filterUndone: (state) => {
      state.filter = "UnDone";
    },
    filterAll: (state) => {
      state.filter = "All";
    },
  },
});

export default toDoSlice.reducer;
export const {
  addToDo,
  editToDo,
  deleteToDo,
  updateToDo,
  isDoneToDo,
  filterAll,
  filterDone,
  filterUndone,
} = toDoSlice.actions;
