import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteToDo,
  editToDo,
  isDoneToDo,
  updateToDo,
} from "../Redux/toDoSlice";

const Task = ({ task }) => {
  const [updatedTask, setUpdatedTask] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <div className="task">
        {!task.isDone ? (
          <button
            style={{ backgroundColor: "#ED2131", width: "30px" }}
            onClick={() => dispatch(isDoneToDo(task.id))}
          >
            <i className="fa-solid fa-check"></i>
          </button>
        ) : (
          <button
            style={{ backgroundColor: "#47c047", width: "30px" }}
            onClick={() => dispatch(isDoneToDo(task.id))}
          >
            <i className="fa-solid fa-check"></i>
          </button>
        )}
        {task.isEdited ? (
          <input
            type="text"
            defaultValue={task.task}
            onChange={(e) => setUpdatedTask(e.target.value)}
          />
        ) : (
          <span
            style={{ textDecoration: task.isDone ? "line-through" : "none" }}
          >
            {task.task}
          </span>
        )}
        <div className="btn">
          {!task.isEdited ? (
            <button
              className="edit"
              onClick={() => {
                dispatch(editToDo(task.id));
              }}
            >
              <i className="fas fa-edit"></i>
            </button>
          ) : (
            <button
              className="edit"
              onClick={() => {
                dispatch(updateToDo({ id: task.id, task: updatedTask }));
                dispatch(editToDo(task.id));
              }}
            >
              <i className="fas fa-save"></i>
            </button>
          )}
          <button
            className="delete"
            onClick={() => dispatch(deleteToDo(task.id))}
          >
            <i className="far fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
