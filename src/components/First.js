import { useState } from "react"
import PageLogin from "./PageLogin";
import Logo2 from "./Logo2.png";
import NavigationBar from "./Navigationbar";
function First (){
    const  [showLogin, setShowLogin]= useState(false);
    const handlePageLogin = () =>{
        setShowLogin(true);
    }
    return(
        <div className="first"> 
            <NavigationBar/>
        {showLogin ? 
            (
                <PageLogin />
            )
            : 
            (    
            <>
                <span className="text">
                <h3>
                    <h1>To-Do List</h1>
                    "Taskilo - Your go-to destination for streamlined productivity! Elevate your task management experience with our intuitive To-Do List. Join us on the journey to efficiency and start conquering tasks effortlessly!"</h3>
                </span>
                <span className="box-start"><h3 style={{color:'white'}}>Ready for a new experience !</h3>
                <button onClick={handlePageLogin} class="btn">
    <span class="btn-text-one">Hover me</span>
    <span class="btn-text-two">Let's Go!</span>
        </button>
                </span>
                </>)
        }
    </div>
    );
    }
    export default First
  

