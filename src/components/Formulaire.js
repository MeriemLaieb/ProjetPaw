import { useState } from "react";

const Formulaire =()=>{
    const [fname, setName]=useState('')
    const [email, setEmail]=useState('')
    const [pass, setPass]=useState('')
    
    return(
        <div className="formInput">
        <form className="formu">
            <h2>Sign In</h2>

            <label htmlFor='nom'>Full Name :</label>
            <input type='text' id='nom' name='a' required value={fname} onChange={(e)=> setName(e.target.value)}/> <br/>
            <label htmlFor='mail'> email : </label>
            <input type='email' id='mail' name='email' required value={email} onChange={(e)=> setEmail(e.target.value)}/> 
            <br/>
            <label htmlFor='pass'> Password : </label>
            <input type='password' id='pass' name='password' required value={pass} onChange={(e)=> setPass(e.target.value)}/> 
        <br/>
        <button type='submit'>Sign Up</button>
        </form>
        </div>
    );
}
export default Formulaire;