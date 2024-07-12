import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Task from "./Task";
import { filterAll, filterDone, filterUndone } from "../Redux/toDoSlice";

const taskList = () => {
  const dispatch = useDispatch();
  const { todos, filter } = useSelector((state) => state.todo);
  let doneTodos = todos.filter((el) => el.isDone === true);
  let undoneTodos = todos.filter((el) => el.isDone === false);
  return (
    <div>
      {todos.length == 0 ? (
        ""
      ) : (
        <>
          <div id="tasks">
            <div className="btn">
              <button
                onClick={() => {
                  dispatch(filterAll());
                }}
              >
                All
              </button>
              <button
                onClick={() => {
                  dispatch(filterDone());
                }}
              >
                Done
              </button>
              <button
                onClick={() => {
                  dispatch(filterUndone());
                }}
              >
                Undone
              </button>
            </div>
            <div>
              {(filter === "Done"
                ? doneTodos
                : filter === "UnDone"
                ? undoneTodos
                : todos
              ).map((el) => (
                <Task task={el} key={el.id} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default taskList;
