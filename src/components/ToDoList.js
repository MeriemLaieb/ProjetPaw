import React, { useState, useEffect } from "react";
import NavigationBar from "./Navigationbar";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
function ToDoList({ users, setUsers, user, setUser, title, ...props }) {
  const [showInput, setShowInput] = useState(false);
  const [task, setTask] = useState("");
  // const [user.tasksList, setUser] = useState([]);
  const [editTaskId, setEditTaskId] = useState(null);
  const [editedTask, setEditedTask] = useState("");

  const handleAddTask = () => {
    if (task.trim() !== "") {
      setUser({
        ...user,
        tasksList: [
          ...user.tasksList,
          { id: Date.now(), task, done: false, title },
        ],
      });
      setTask("");
      setShowInput(false);
    }
  };
  useEffect(() => {
    // Copiez la liste des utilisateurs existants
    const updatedUsers = [...users];

    // Recherchez l'index de l'utilisateur dans la liste
    const userIndex = updatedUsers.findIndex((u) => u.id === user.id);

    // Si l'utilisateur existe déjà dans la liste, mettez à jour ses données
    if (userIndex !== -1) {
      updatedUsers[userIndex] = user;

      // Mettez à jour l'état des utilisateurs
      setUsers(updatedUsers);

      // Mettez à jour le stockage local si nécessaire
      localStorage.setItem("users", JSON.stringify(updatedUsers));
    }
  }, [user]);

  const handleToggle = (id) => {
    const newTaskList =
      user.tasksList &&
      user.tasksList.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      );
    setUser({ ...user, tasksList: newTaskList });
  };

  const handleEdit = (id) => {
    setEditTaskId(id);
    setEditedTask(user.tasksList.find((item) => item.id === id)?.task || "");
  };

  const handleSaveEdit = (id) => {
    const newTaskList =
      user.tasksList &&
      user.tasksList.map((item) =>
        item.id === id ? { ...item, task: editedTask } : item
      );
    setUser({ ...user, tasksList: newTaskList });
    setEditTaskId(null);
  };

  const handleDelete = (id) => {
    const newTaskList = user.tasksList.filter((item) => item.id !== id);
    setUser({ ...user, tasksList: newTaskList });
  };

  return (
    <span className="tout" style={{ backgroundColor: props.backgroundColor }}>
      <NavigationBar />

      <h3>{title}</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {user.tasksList &&
          user.tasksList
            .filter((item) => item.title === title)
            .map((item) => (
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
                    <button
                      className="btn-add"
                      type="button"
                      onClick={() => handleEdit(item.id)}
                    >
                      <CiEdit />
                    </button>
                    <button
                      className="btn-add"
                      onClick={() => handleDelete(item.id)}
                    >
                      <MdDelete />
                    </button>
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
        <button className="btn-add" onClick={() => setShowInput(true)}>
          <FaPlus />
          Add Task
        </button>
      )}
    </span>
  );
}

export default ToDoList;
