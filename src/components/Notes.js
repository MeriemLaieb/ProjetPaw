import React, { useState, useEffect } from "react";
import Logo2 from "./Logo2.png";
import Formulaire from "./Formulaire";
import NavigationBar from "./Navigationbar";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import PageLogin from "./PageLogin";
import DateComponent from "./Date";
import { FaPlus } from "react-icons/fa";

function Notes(props) {
  const [showInput, setShowInput] = useState(false);
  const [note, setNote] = useState("");
  const [notesList, setNotesList] = useState([]);
  const [editNoteId, setEditNoteId] = useState(null);
  const [editedNote, setEditedNote] = useState("");

  const handleAddNote = () => {
    if (note.trim() !== "") {
      setNotesList([...notesList, { id: Date.now(), note, done: false }]);
      setNote("");
      setShowInput(false);
    }
  };

  const handleToggle = (id) => {
    const newNotesList = notesList.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item
    );
    setNotesList(newNotesList);
  };

  const handleEdit = (id) => {
    setEditNoteId(id);
    setEditedNote(notesList.find((item) => item.id === id)?.note || "");
  };

  const handleSaveEdit = (id) => {
    const newNotesList = notesList.map((item) =>
      item.id === id ? { ...item, note: editedNote } : item
    );
    setNotesList(newNotesList);
    setEditNoteId(null);
  };

  const handleDelete = (id) => {
    const newNotesList = notesList.filter((item) => item.id !== id);
    setNotesList(newNotesList);
  };

  return (
    <span className="ideas" style={{ backgroundColor: props.backgroundColor }}>
      <NavigationBar />
      <h3>{props.title}</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {notesList.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.done}
              onChange={() => handleToggle(item.id)}
            />
            {editNoteId === item.id ? (
              <div>
                <input
                  type="text"
                  value={editedNote}
                  onChange={(e) => setEditedNote(e.target.value)}
                />
                <button onClick={() => handleSaveEdit(item.id)}>OK</button>
              </div>
            ) : (
              <span className={item.done ? "done" : ""}>{item.note}</span>
            )}
            {editNoteId !== item.id && (
              <>
                <button
                  className="btn-add"
                  type="button"
                  onClick={() => handleEdit(item.id)}
                >
                  <CiEdit />
                </button>
                <button
                  className="btn-add"
                  onClick={() => handleDelete(item.id)}
                >
                  <MdDelete />
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
      {showInput ? (
        <div>
          <input
            type="text"
            placeholder="Enter note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            autoFocus
          />
          <br />
          <button onClick={handleAddNote}>OK</button>
        </div>
      ) : (
        <button className="btn-add" onClick={() => setShowInput(true)}>
          <FaPlus />
          Add Note
        </button>
      )}
    </span>
  );
}

export default Notes;
