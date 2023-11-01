import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { useState } from "react";
import Formulaire from './components/Formulaire';
//import image from './components/image.png';
function App() {
  const [values, setValues]=useState({
    name:"",
    email:"",
    password:"",
});
const inputs =[
  {
    id: 1,
    name:"fullname",
    type:"text",
    label:"Full Name : "
  },
  {
    id: 2,
    name:"email",
    type:"email",
    label:"email : "
  },
  {
    id: 3,
    name:"fpassword",
    type:"password",
    label:"Password : "
  }
]
  return (
    <div className="App">
     <Login/>
     <form>
            {inputs.map((input)=>(
                <Formulaire key={input.id} {...input}/>
            ))}
            </form>
    </div>
  );
}

export default App;
