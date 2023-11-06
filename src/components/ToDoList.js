import React, { useState } from "react";
import Logo2 from "./Logo2.png";
import Formulaire from "./Formulaire";
import NavigationBar from "./Navigationbar";

function App() {
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("");
  const [deadline, setDeadline] = useState("");
  const [tasksList, setTasksList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasksList([...tasksList, { task, category, deadline, done: false }]);
    setTask("");
    setCategory("");
    setDeadline("");
  };

  const handleToggle = (index) => {
    const newTasksList = [...tasksList];
    newTasksList[index].done = !newTasksList[index].done;
    setTasksList(newTasksList);
  };

  return (
    <div className="Todo">
    <NavigationBar></NavigationBar>
   
            
      
      <div className="content">
        <h2>Daily Tasks</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            autoFocus={true}
          />

          <input
            type="date"
            placeholder="Deadline"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />

          <button type="submit">Add Task</button>
        </form>
        <div className="tasks">
          {tasksList.map((task, index) => (
            <div key={index} className={`task ${task.done ? "done" : ""}`}>
              <div className="task-details">
                <h3>{task.task}</h3>
                <p>Category: {task.category}</p>
                <p>Deadline: {task.deadline}</p>
              </div>
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => handleToggle(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
