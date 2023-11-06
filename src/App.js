import "./App.css";
import ToDoList from "./components/ToDoList";
import Logo from "./components/Logo";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Formulaire from "./components/Formulaire";
import PageLogin from "./components/PageLogin";

function App() {
  return (
    <div className="App">
      <Logo></Logo>
      <ToDoList />
    </div>
  );
}

export default App;
