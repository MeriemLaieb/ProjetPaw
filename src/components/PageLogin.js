import React, { useState } from "react";
import Formulaire from "./Formulaire";
import NavigationBar from "./Navigationbar";


function PageLogin() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  const handleSignUpClick = () => {
    setShowSignUpForm(true);
  };

  return (
    <div className="formInput">
      
      {showSignUpForm ? (
        <Formulaire />
      ) : (
        <form className="formu">
          <h2>Log In</h2>
          <label htmlFor="mail">Email :</label>
          <input
            type="email"
            id="mail"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="pass">Password :</label>
          <input
            type="password"
            id="pass"
            name="password"
            required
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <br />
          <button type="submit">Log in</button>
          <div className="signup">
            <p>You don't have an account</p>
            <button onClick={handleSignUpClick}>Sign up</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default PageLogin;
