import React, { useState ,useEffect  } from "react";
import Formulaire from "./Formulaire";
import NavigationBar from "./Navigationbar";
import Backg from "./backgrnd";

function PageLogin() {
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [showToDoList, setShowToDoList]= useState(false);
  const [showDays, setShowDays] = useState(false);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ email: '', pass: '' , fname:'' ,tasksList:[]});
  useEffect(() => {
    // Récupérer les données du localStorage au chargement initial
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
    //localStorage.clear();
  }, []);
  const handleEmailChange = (e) => {
    setUser({ ...user, email: e.target.value });
  };

  const handlePassChange = (e) => {
    setUser({ ...user, pass: e.target.value });
  };

  const handleSignUpClick = () => {
    setShowSignUpForm(true);
  };

  const handleToDoClick = () =>{
    
    console.log('Attempting login:', user);

    const foundUser = users.find((ui) => {
      return ui.email === user.email && ui.pass === user.pass;
    });

    console.log('Users Array:', users);
    console.log('User Object:', user);
    console.log('Found User:', foundUser);

    if (foundUser) {
      console.log('User authenticated:', foundUser);
      setUser({ ...foundUser });
      setShowToDoList(true);
      
    } else {
      console.log("Authentication failed. Check your credentials.");
    }
  }

 
  return (
    <div className="formInput">
      <NavigationBar/>
      {showToDoList ? (
      <Backg user={user} setUser={setUser} users={users} setUsers={setUsers} />) : (
      showSignUpForm ? (
        <Formulaire users={users} setUsers={setUsers} user={user} setUser={setUser} />
      ) : (
        <form className="formu">
          <h2 style={{color:" white"}}>Log In</h2>
          <label  style={{color:" #ffbd59"}} htmlFor="mail">Email :</label>
          <input className="inpt"
            type="email"
            id="mail"
            name="email"
            required
            value={user.email}
            onChange={handleEmailChange}
          />
          <br />
          <label style={{color:" #ffbd59"}} htmlFor="pass">Password :</label>
          <input className="inpt"
            type="password"
            id="pass"
            name="password"
            required
            value={user.pass}
            onChange={handlePassChange}
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