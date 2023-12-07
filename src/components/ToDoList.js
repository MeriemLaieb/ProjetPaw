import React, { useState } from "react";
import Logo2 from "./Logo2.png";
import Formulaire from "./Formulaire";
import NavigationBar from "./Navigationbar";
import PageLogin from "./PageLogin";

function ToDoList(props) {
    const [showInput, setShowInput] = useState(false);
    const [task, setTask] = useState("");
    const [tasksList, setTasksList] = useState([]);
   
    const handleAddTask = () => {
      if (task.trim() !== "") { // pour verifier si la tache n'est pas un champs vide
        setTasksList([...tasksList, { id: Date.now(), task, done: false }]);
        setTask("");
        setShowInput(false);
      }
    };
    const handleToggle = (id) => {
      const newTasksList = tasksList.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      );
      setTasksList(newTasksList);
    };
  
    return (
     
      <>
      
      <div className="tout" style={{ backgroundColor: props.backgroundColor }}>
      <NavigationBar></NavigationBar>
        <h3>{props.title}</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {tasksList.map((item) => (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={item.done}
                onChange={() => handleToggle(item.id)}
              />
              <span className={item.done ? "done" : ""}>{item.task}</span>
            </li>
          ))}
        </ul>
        {showInput ? (
          <div>
            <input
              type="text"
              placeholder="Enter task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              autoFocus
            />
            <br/>
            <button onClick={handleAddTask}>OK</button>
          </div>
        ) : (
          <button onClick={() => setShowInput(true)}>Add Task</button>
        )}
      </div>
      </>
    );
  }
  
  export default ToDoList;