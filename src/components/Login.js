
//import React, { Component } from 'react';
import React, {useState} from 'react';
import Formulaire from './Formulaire';
//import image from './image.png';
import Logo2 from './Logo2.png';
import Log2 from './Log2';
function Login(){
    return (

      <div className='header'>
       <nav><img src={Logo2} /></nav> 
       <form>
       <Logo2/>
     <Formulaire />
     </form>
       </div>
       ); 
       }
    export default Login

