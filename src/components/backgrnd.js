import { useState } from "react";
import ToDoList from "./ToDoList";
import Corbeille from "./Corbeille";
import { FaTrashAlt } from "react-icons/fa";
import Notes from "./Notes";
import Books from "./Books";
import Nouv from "./Nouv";
function Backg(){
    const [corbeille, setCorbeille] = useState(false);
    const [todo, setTodo]= useState(true);
    const [books, setBooks]= useState(false);
    const [notes, setNotes]= useState(false);
    const [nouv, setNouv] = useState(false);
      const showCorbeille = () => {
        setCorbeille(true);
      }
      const dontShowCorbeille = () => {
        setCorbeille(false);
      }
      const showNouv = () => {
        setNouv(true);
      }
      const dontShowNouv = () => {
        setNouv(false);
      }
      const dontShowTodo = () => {
        setTodo(false);
      }
      const showBooks = () => {
        setBooks(true);
      }
      const dontShowBooks = () => {
        setBooks(false);
      }
      const showNotes = () => {
        setNotes(true);
      } 
      const dontShowNotes = () => {
        setNotes(false);
      } 
      const handleNouv = () => {
        showNouv();
        dontShowBooks();
        dontShowCorbeille();
        dontShowNotes();
        dontShowTodo();
      } 
      const handleCorbeille = () => {
        showCorbeille();
        dontShowTodo();
        dontShowBooks();
        dontShowNotes();
        dontShowNouv();
      };
      const handleNotes = () => {
        showNotes();
        dontShowTodo();
        dontShowCorbeille();
        dontShowBooks();
        dontShowNouv();
      };
      const handleBooks = () => {
        showBooks();
        dontShowTodo();
        dontShowCorbeille();
        dontShowNotes();
        dontShowNouv();
      }
      const handleTodo = () => {
        setTodo(true);
        dontShowCorbeille();
        dontShowBooks();
        dontShowNotes();
        dontShowNouv();
      };
    return(
        <div className="bckg">
           
        <span className="sidebar" >
        <aside className="sid">
        {notes ?
        (<Notes/>)
        :
        (
            <button onClick={handleNotes} className="sid-btn">Notes</button>
        )
        }
        {books ?
        (<main>
          <h1>Books To Read</h1>
        <Books title="Novel" backgroundColor="#aec6cf" />
        <Books title="Personal Development"  backgroundColor="  #b2e57b"/>
        <Books title="Science" backgroundColor="#c7e8f3" />
        <Books title="Religious" backgroundColor="#ffd966"/>
        </main>
        )
        :
        (
         <button type="button" onClick={handleBooks} className="sid-btn">Books</button>
        )
        }

        {nouv ?
        (<Nouv/>)
        :
        (
          <button className="sid-btn" onClick={handleNouv}>Nouv</button>
        )

        }
        <button type="button" className="sid-btn" onClick={handleTodo}>Ajouter une tâche</button>
        </aside>
        </span>
        {todo ?(
        <main>
            <h1>Daily Tasks</h1>
        
        <ToDoList title="Sport" backgroundColor="#CBEFB6" />
        <ToDoList title="Study"  backgroundColor=" #B6D8F2"/>
        <ToDoList title="Work" backgroundColor="#CACACA" />
        <ToDoList title="Health" backgroundColor="#F3E7DA"/>
        <ToDoList title="Personnal" backgroundColor="#F5DF4D"/>
       
      </main>
        ):("")}
         {corbeille ?
        (<Corbeille/>)
        :
        (
            <button onClick={handleCorbeille}><FaTrashAlt /></button>
        )
        }
        </div>
    )
}
export default Backg