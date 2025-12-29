import { useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [message, setMessage] = useState("Olá, Mundo!");

  return (
    <div>
      <h1 className="text-red-500">Task Manager</h1>
      <AddTask />
      <Tasks />
    </div>
  );
}

export default App;
