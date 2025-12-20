import { useState } from "react";

function App() {
  const [task, setTask] = useState("");


  return (
    <div>
      <h1>My To-Do List</h1>

      <input 
      type="text" 
      value={task}
      onChange= {(e) => setTask(e.target.value)}
      placeholder="Enter a task" />

      <button>Add</button>
    </div>
  );
}
export default App;
