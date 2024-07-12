import React, { useState } from "react";
import "../App.css";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addToDo } from "../Redux/toDoSlice";
const AddToDo = () => {
  const dispatch = useDispatch();
  const [toDo, setToDo] = useState({
    id: 0,
    task: "",
    isEdited: false,
    isDone: false,
  });
  const addToDoHandler = (e) => {
    e.preventDefault();
    dispatch(addToDo(toDo));
    setToDo({ ...toDo, task: "" });
  };
  const onChangeHandler = (e) => {
    setToDo({ ...toDo, id: uuidv4(), [e.target.name]: e.target.value });
  };

  return (
    <>
      <div id="newtask">
        <form onSubmit={addToDoHandler}>
          <input
            type="text"
            name="task"
            value={toDo.task}
            placeholder="Task to be done.."
            onChange={onChangeHandler}
          />
          <button id="push" type="submit">
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default AddToDo;
