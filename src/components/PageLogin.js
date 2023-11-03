import { useState } from 'react'
import Formulaire from './Formulaire'
import { Link } from 'react-router-dom';
  function PageLogin () {
    const [email,setEmail]=useState('')
    const [pass, setPass]=useState('')
    return (
      <div className="formInput">
        <form className="formu">
            <h2>Log In</h2>
        <label htmlFor='mail'> email : </label>
            <input type='email' id='mail' name='email' required value={email} onChange={(e)=> setEmail(e.target.value)}/> 
            <br/>
            <label htmlFor='pass'> Password : </label>
            <input type='password' id='pass' name='password' required value={pass} onChange={(e)=> setPass(e.target.value)}/> 
        <br/>
        <button type='submit'>Log in</button>
        
        </form>
        </div>
    );
  }
export default PageLogin

