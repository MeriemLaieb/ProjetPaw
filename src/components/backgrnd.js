import { useState } from "react";
import ToDoList from "./ToDoList";
import Corbeille from "./Corbeille";
import { FaTrashAlt } from "react-icons/fa";
import Notes from "./Notes";
import Books from "./Books";
import Nouv from "./Nouv";
import DateComponent from "./Date";
import { FaBook } from "react-icons/fa";
import { BiTask } from "react-icons/bi";

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
                        onClick={() => handleSectionChange('notes')}
                        className={`sid-btn ${activeSection === 'notes' ? 'active' : ''}`}
                    >
                        Notes
                    </button>
                    <button
                        type="button"
                        onClick={() => handleSectionChange('books')}
                        className={`sid-btn ${activeSection === 'books' ? 'active' : ''}`}
                    >
                        <FaBook /> Books
                    </button>
                    <button
                        type="button"
                        onClick={() => handleSectionChange('nouv')}
                        className={`sid-btn ${activeSection === 'nouv' ? 'active' : ''}`}
                    >
                        Nouv
                    </button>
                    <button
                        type="button"
                        onClick={() => handleSectionChange('todo')}
                        className={`sid-btn ${activeSection === 'todo' ? 'active' : ''}`}
                    >
                        Ajouter une tâche
                    </button>
                </div>
            </span>

            {activeSection === 'todo' ? (
                <main>
                    <h1><BiTask /> Daily Tasks</h1>
                    <DateComponent />
                    <ToDoList title="Sport" backgroundColor="#CBEFB6" />
                    <ToDoList title="Study" backgroundColor=" #B6D8F2" />
                    <ToDoList title="Work" backgroundColor="#CACACA" />
                    <ToDoList title="Health" backgroundColor="#F3E7DA" />
                    <ToDoList title="Personnal" backgroundColor="#F5DF4D" />
                </main>
            ) : null}

            {activeSection === 'corbeille' ? (
                <Corbeille />
            ) : (
                <button onClick={() => handleSectionChange('corbeille')}>
                    <FaTrashAlt />
                </button>
            )}

            {activeSection === 'notes' ? (
                <Notes />
            ) : null}

            {activeSection === 'books' ? (
                <main>
                    <h1 className="book"><FaBook /> Books To Read</h1>
                    <Books title="Novel" backgroundColor="#aec6cf" />
                    <Books title="Personal Development" backgroundColor="#b2e57b" />
                    <Books title="Science" backgroundColor="#c7e8f3" />
                    <Books title="Religious" backgroundColor="#ffd966" />
                </main>
            ) : null}

            {activeSection === 'nouv' ? (
                <Nouv />
            ) : null}
        </div>
    );
}

export default Backg;
