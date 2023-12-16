import { useState } from "react";
import Backg from "./backgrnd";


const Formulaire =({ users, setUsers, user, setUser })=>{
    const [showToDoList, setShowToDoList]= useState(false);
    const handleSignUpClick = () =>{
        setShowToDoList(true);
        const updatedUsers = [...users, user];
        setUsers(updatedUsers);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
      };
      const handleEmailChange = (e) => {
        setUser({ ...user, email: e.target.value });
      };
    
      const handlefnameChange = (e) => {
        setUser({ ...user, fname: e.target.value });
      };
      const handlePassChange = (e) => {
        setUser({ ...user, pass: e.target.value });
      };
    return(
        <div className="formInput">
        {showToDoList ?(
            <Backg user={user} setUser={setUser} users={users} setUsers={setUsers}/>) : 
           (
        <form className="formu">
            <h2 style={{color:" white "}}>Sign In</h2>

            <label style={{color:" #ffbd59"}} htmlFor='nom'>Full Name :</label>
            <input className="inpt" type='text' id='nom' name='a' required value={user.fname} onChange={handlefnameChange}
            autoFocus={true}/> <br/>
            <label  style={{color:" #ffbd59"}} htmlFor='mail'> email : </label>
            <input className="inpt" type='email' id='mail' name='email' required value={user.email} onChange={handleEmailChange}/> 
            <br/>
            <label style={{color:" #ffbd59"}} htmlFor='pass'> Password : </label>
            <input className="inpt" type='password' id='pass' name='password' required value={user.pass} onChange={handlePassChange}/> 
        <br/>
        <button onClick={handleSignUpClick} className="lo" type='submit'>Sign Up</button>
        </form>)
        }
        </div>
    );
}
export default Formulaire;