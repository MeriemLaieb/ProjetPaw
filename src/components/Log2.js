import React, { Component } from 'react'
import { useState } from 'react'
import Formulaire from './Formulaire'
  function Log2 () {
    const [email,setEmail]=useState('')
    const [pass, setPass]=useState('')
    return (
      <div className="formInput">
        <form className="formu">
        <label htmlFor='mail'> email : </label>
            <input type='email' id='mail' name='email' required value={email} onChange={(e)=> setEmail(e.target.value)}/> 
            <br/>
            <label htmlFor='pass'> Password : </label>
            <input type='password' id='pass' name='password' required value={pass} onChange={(e)=> setPass(e.target.value)}/> 
        <br/>
        <button type='submit'>Log in</button>
        <span>You don't have account? <a href='Formulaire.js'>Sign in</a></span>
        </form>
      </div>
    );
  }


export default Log2
