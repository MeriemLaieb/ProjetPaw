import { useState } from "react";
import ToDoList from "./ToDoList";
import { FaTrashAlt } from "react-icons/fa";
import Notes from "./Notes";
import Books from "./Books";
import Nouv from "./Nouv";
import DateComponent from "./Date";
import { FaBook } from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import { FaRegNoteSticky } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import ShoppingList from "./Shopping";
function Backg() {
    const [activeSection, setActiveSection] = useState('todo');

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <div className='bckg'>
            <span className="sidebar">
                <div className='sid'>
                <button
                        type="button"
                        onClick={() => handleSectionChange('todo')}
                        className={`sid-btn ${activeSection === 'todo' ? 'active' : ''}`}
                    >
                        <h3 className="sid-titre" ><BiTask /> My Day</h3>
                    </button>
                    <button
                        type="button"
                        onClick={() => handleSectionChange('notes')}
                        className={`sid-btn ${activeSection === 'notes' ? 'active' : ''}`}
                    >
                       <h3 className="sid-titre"><FaRegNoteSticky /> Notes</h3> 
                    </button>
                    <button
                        type="button"
                        onClick={() => handleSectionChange('books')}
                        className={`sid-btn ${activeSection === 'books' ? 'active' : ''}`}
                    >
                       <h3 className="sid-titre"> <FaBook /> Books</h3>
                    </button>
                    <button
                        type="button"
                        onClick={() => handleSectionChange('nouv')}
                        className={`sid-btn ${activeSection === 'nouv' ? 'active' : ''}`}
                    >
                       <h3 className="sid-titre"><TiShoppingCart /> Shopping</h3>
                    </button>
                    
                </div>
            </span>

            {activeSection === 'todo' ? (
                <main>
                    <h1 style={{ textAlign: 'center', marginTop: '20px' }}><BiTask /> Daily Tasks</h1>
                    <DateComponent />
                    <ToDoList title="Sport" backgroundColor="#CBEFB6" />
                    <ToDoList title="Study" backgroundColor=" #B6D8F2" />
                    <ToDoList title="Work" backgroundColor="#CACACA" />
                    <ToDoList title="Health" backgroundColor="#F3E7DA" />
                    <ToDoList title="Personnal" backgroundColor="#F5DF4D" />
                    <ToDoList title="Others" backgroundColor="#F4A261" />
                </main>
            ) : null}
            {activeSection === 'notes' ? (
                <main>
                    <h1 className="note-title" ><FaRegNoteSticky />Notes</h1>
                    <DateComponent />
                <Notes title="Notes" backgroundColor="#FFEB69"/>
                <Notes title="Ideas" backgroundColor="#F4A261" />
                
                </main>
            ) : null}

            {activeSection === 'books' ? (
                <main>
                    <h1 className="section-title"><FaBook /> Books To Read</h1>
                    <DateComponent />
                    <Books title="Novel" backgroundColor="#F3E7DA" />
                    <Books title="Personal Development" backgroundColor="#b2e57b" />
                    <Books title="Science" backgroundColor="#c7e8f3" />
                    <Books title="Religious" backgroundColor="#ffd966" />
                    <Books title="Others" backgroundColor="#F4A261" />
                </main>
            ) : null}

            {activeSection === 'nouv' ? (
                <main>
                    <h1><TiShoppingCart /> Shopping List</h1>
                    <DateComponent/>
                <ShoppingList title="For Kitchen" backgroundColor="#b2e57b" />
                <ShoppingList title="For Home" backgroundColor="#B6D8F2"/>
                <ShoppingList title="For Me" backgroundColor="#F3E7DA" />
                <ShoppingList title="Others" backgroundColor="#F4A261" />
                </main>
            ) : null}
        </div>
    );
}

export default Backg;
