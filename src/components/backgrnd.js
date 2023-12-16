import React, { useState } from "react";
import ToDoList from "./ToDoList";
import Notes from "./Notes";
import Books from "./Books";
//import Nouv from "./Nouv";
import ShoppingList from "./Shopping";
import DateComponent from "./Date";
import { FaBook } from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import { FaRegStickyNote } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";

function Backg({ user, setUser, users, setUsers }) {
  const [activeSection, setActiveSection] = useState("todo");
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="bckg">
      <span className="sidebar">
        <div className="sid">
          <h3 style={{ color: "#F5DF4D" }}> IT'S YOUR DAY {user.fname} !!</h3>
          <h2 style={{ color: "#F5DF4D" }}>Don't waste it</h2>
          <button
            type="button"
            onClick={() => handleSectionChange("todo")}
            className={`sid-btn ${activeSection === "todo" ? "active" : ""}`}
          >
            <h3 className="sid-titre">My Day </h3>
          </button>
          <button
            type="button"
            onClick={() => handleSectionChange("notes")}
            className={`sid-btn ${activeSection === "notes" ? "active" : ""}`}
          >
            <h3 className="sid-titre">
              {" "}
              <FaRegStickyNote></FaRegStickyNote>Notes
            </h3>
          </button>
          <button
            type="button"
            onClick={() => handleSectionChange("books")}
            className={`sid-btn ${activeSection === "books" ? "active" : ""}`}
          >
            <h3 className="sid-titre">
              {" "}
              <FaBook /> Books
            </h3>
          </button>
          <button
            type="button"
            onClick={() => handleSectionChange("nouv")}
            className={`sid-btn ${activeSection === "nouv" ? "active" : ""}`}
          >
            <h3 className="sid-titre">
              <TiShoppingCart /> Shopping{" "}
            </h3>
          </button>
        </div>
      </span>

      {activeSection === "todo" ? (
        <main>
          <h1>
            <BiTask /> Daily Tasks
          </h1>
          <DateComponent />
          <ToDoList
            title="Sport"
            backgroundColor="#CBEFB6"
            user={user}
            setUser={setUser}
            users={users}
            setUsers={setUsers}
          />
          <ToDoList
            title="Study"
            backgroundColor=" #B6D8F2"
            user={user}
            setUser={setUser}
            users={users}
            setUsers={setUsers}
          />
          <ToDoList
            title="Work"
            backgroundColor="#CACACA"
            user={user}
            setUser={setUser}
            users={users}
            setUsers={setUsers}
          />
          <ToDoList
            title="Health"
            backgroundColor="#F3E7DA"
            user={user}
            setUser={setUser}
            users={users}
            setUsers={setUsers}
          />
          <ToDoList
            title="Personnal"
            backgroundColor="#F5DF4D"
            user={user}
            setUser={setUser}
            users={users}
            setUsers={setUsers}
          />
          <ToDoList
           title="Others"
            backgroundColor="#F4A261" 
            user={user}
            setUser={setUser}
            users={users}
            setUsers={setUsers}
            />

        </main>
      ) : null}

      {activeSection === "notes" ? (
        <main>
          <h1 className="note-title" ><FaRegStickyNote />Notes</h1>
                    <DateComponent />
                <Notes title="Notes" backgroundColor="#FFEB69"/>
                <Notes title="Ideas" backgroundColor="#F4A261" />
        </main>
      ) : null}

      {activeSection === "books" ? (
        <main>
          <h1 className="book">
            <FaBook /> Books To Read
          </h1>
          <DateComponent />
          <Books title="Novel" backgroundColor="#aec6cf" />
          <Books title="Personal Development" backgroundColor="#b2e57b" />
          <Books title="Science" backgroundColor="#c7e8f3" />
          <Books title="Religious" backgroundColor="#ffd966" />
          <Books title="Others" backgroundColor="#F4A261" />
        </main>
      ) : null}

      {activeSection === "nouv" ? (
        <main>
          <h1>
            <TiShoppingCart /> Shopping List
          </h1>
          <DateComponent />
          <ShoppingList title="For Kitchen" backgroundColor="#b2e57b" />
          <ShoppingList title="For Home" backgroundColor="#B6D8F2" />
          <ShoppingList title="For Me" backgroundColor="#F3E7DA" />
          <ShoppingList title="Others" backgroundColor="#F4A261" />
        </main>
      ) : null}
    </div>
  );
}

export default Backg;
