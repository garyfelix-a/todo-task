import { useEffect, useState } from "react";
import "./App.css";
import ViewTask from "./ViewTask";

function App() {
  const [task, setTask] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskType, setTaskType] = useState("");

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if(Array.isArray(storedTasks)){
      setTasks(storedTasks);
    }else{
      setTasks([]);
    }

    // setTasks(storedTasks);
  }, []);


  function handleSubmit(e) {
    e.preventDefault();

    if (!task.trim() || !taskDescription.trim() || !taskType.trim()) {
      alert("Fill out all the fields");
      return;
    }

    const newTask = { id: Date.now(), task, taskDescription, taskType };

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);

    localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // localstorage accepts only strings, so arrays/objects are converted to strings

    setTask("");
    setTaskDescription("");
    setTaskType("");
  }

  function handleDelete(taskId) {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  return (
    <div>
      <h2>Todo App</h2>
      <form onSubmit={handleSubmit}>
        <label>Task: </label>
        <input
          type="text"
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />
        <br />
        <label>Task Description: </label>
        <input
          type="text"
          onChange={(e) => setTaskDescription(e.target.value)}
          value={taskDescription}
        />
        <br />
        <label>Task Type: </label>
        <input
          type="text"
          onChange={(e) => setTaskType(e.target.value)}
          value={taskType}
        />
        <br />
        <button type="submit">Submit Task</button>
      </form>
      <ViewTask tasks={tasks} onDelete={handleDelete} />
    </div>
  );
}

export default App;
