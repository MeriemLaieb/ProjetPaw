//import logo from './logo.svg';
import './App.css';
import ToDoList from './components/ToDoList';
import Login from './components/Login';
import { Routes, Route } from 'react-router-dom';
import { useState } from "react";
import Formulaire from './components/Formulaire';
import PageLogin from './components/PageLogin';


function App() {

  return (
    <div className="App">
      
     <Login/>
    <ToDoList/>
    
    </div>
  
  );
};

export default App;
