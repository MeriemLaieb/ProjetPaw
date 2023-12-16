import React, { useState } from "react";
import Formulaire from "./Formulaire";
import NavigationBar from "./Navigationbar";
import Backg from "./backgrnd";

function PageLogin() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [showToDoList, setShowToDoList]= useState(false);
  const [showDays, setShowDays] = useState(false);

  const handleSignUpClick = () => {
    setShowSignUpForm(true);
  };

  const handleToDoClick = () =>{
    setShowToDoList(true);
  }

  const [aboutActive, setAboutActive] = useState(false);

  const handleAboutClick = () => {
    setAboutActive(true);
  };
  return (
    <div className="formInput">
      <NavigationBar/>
      {showToDoList ? 
      (
     <Backg  />   
      ) : (
      showSignUpForm ? (
        <Formulaire />
      ) : (
        <form className="formu">
          <h2  style={{color:"white"}}>Log In</h2>
          <label  style={{color:" #ffbd59"}} htmlFor="mail">Email :</label>
          <input
            type="email"
            id="mail"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)} className="inpt"
          />
          <br />
          <label  style={{color:" #ffbd59"}} htmlFor="pass">Password :</label>
          <input
            className="inpt"
            type="password"
            id="pass"
            name="password"
            required
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <br />
          <button className="lo" type="submit" onClick={handleToDoClick}>Log in</button>
          
          <div className="signup">
            <p>You don't have an account</p>
            <button className="lo" onClick={handleSignUpClick}>Sign up</button>
          </div>
        </form>
        
      )
      )
}
    
    </div>
  );
 
}

export default PageLogin;
