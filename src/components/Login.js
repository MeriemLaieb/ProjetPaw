
//import React, { Component } from 'react';
import React, {useState} from 'react';
import Formulaire from './Formulaire';
//import image from './image.png';
import Logo2 from './Logo2.png';

function Login(){
    return (
      <div className='header'>
       <nav><img src={Logo2} /></nav> 
       <form>
     <Formulaire />
     </form>
       </div>
       ); 
       }
    export default Login;


