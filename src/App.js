//import logo from './logo.svg';
import './App.css';

import Login from './components/Login';
import { Routes, Route } from 'react-router-dom';
import { useState } from "react";
import Formulaire from './components/Formulaire';
import PageLogin from './components/PageLogin';


function App() {

  return (
    <div className="App">
     <Login/>
     
    </div>
  
  );
};

export default App;
