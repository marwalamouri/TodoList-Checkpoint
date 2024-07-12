import "./App.css";
import AddToDo from "./Components/AddToDo";
import TaskList from "./Components/TaskList";

function App() {
  return (
    <>
      <div className="container">
        <AddToDo />
        <TaskList />
      </div>
    </>
  );
}

export default App;
