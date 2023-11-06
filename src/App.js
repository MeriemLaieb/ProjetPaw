import "./App.css";
import ToDoList from "./components/ToDoList";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Formulaire from "./components/Formulaire";
import PageLogin from "./components/PageLogin";
import Logo from "./components/Logo";

function App() {
  return (
    <div className="App">
      <Logo></Logo>
      <ToDoList />
    </div>
  );
}

export default App;
