import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
  if (task.trim() === "") return;

  setTasks([...tasks, task]);
  setTask("");
  }



  return (
    <div>
      <h1>My To-Do List</h1>

      <input 
        type="text" 
        value={task}
        onChange= {(e) => setTask(e.target.value)}
        placeholder="Enter a task" 
        />

      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((t, index)=> (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;

