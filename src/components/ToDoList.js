import React, { useState } from "react";
import Logo2 from "./Logo2.png";
import Formulaire from "./Formulaire";
import NavigationBar from "./Navigationbar";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import PageLogin from "./PageLogin";
import Menu from "./Menu";

function ToDoList(props) {
  const [showInput, setShowInput] = useState(false);
  const [task, setTask] = useState("");
  const [tasksList, setTasksList] = useState([]);
  const [editTaskId, setEditTaskId] = useState(null);
  const [editedTask, setEditedTask] = useState("");

  const handleAddTask = () => {
    if (task.trim() !== "") {
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

  const handleEdit = (id) => {
    setEditTaskId(id);
    setEditedTask(tasksList.find((item) => item.id === id)?.task || "");
  };

  const handleSaveEdit = (id) => {
    const newTasksList = tasksList.map((item) =>
      item.id === id ? { ...item, task: editedTask } : item
    );
    setTasksList(newTasksList);
    setEditTaskId(null);
  };

  const handleDelete = (id) => {
    const newTasksList = tasksList.filter((item) => item.id !== id);
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
              {editTaskId === item.id ? (
                <div>
                  <input
                    type="text"
                    value={editedTask}
                    onChange={(e) => setEditedTask(e.target.value)}
                  />
                  <button onClick={() => handleSaveEdit(item.id)}>OK</button>
                </div>
              ) : (
                <span className={item.done ? "done" : ""}>{item.task}</span>
              )}
              {editTaskId !== item.id && (
                <>
                  <button type="button" onClick={() => handleEdit(item.id)}><CiEdit /></button>
                  <button onClick={() => handleDelete(item.id)}><MdDelete/></button>
                </>
              )}
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
            <br />
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
