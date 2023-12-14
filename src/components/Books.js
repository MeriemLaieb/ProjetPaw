import React, { useState } from "react";
import Logo2 from "./Logo2.png";
import Formulaire from "./Formulaire";
//import NavigationBar from "./Navigationbar";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import PageLogin from "./PageLogin";

function Books(props) {
  const [showInput, setShowInput] = useState(false);
  const [book, setBook] = useState("");
  const [booksList, setBooksList] = useState([]);
  const [editBookId, setEditBookId] = useState(null);
  const [editedBook, setEditedBook] = useState("");

  const handleAddBook = () => {
    if (book.trim() !== "") {
      setBooksList([...booksList, { id: Date.now(), book, read: false }]);
      setBook("");
      setShowInput(false);
    }
  };

  const handleToggle = (id) => {
    const newBooksList = booksList.map((item) =>
      item.id === id ? { ...item, read: !item.read } : item
    );
    setBooksList(newBooksList);
  };

  const handleEdit = (id) => {
    setEditBookId(id);
    setEditedBook(booksList.find((item) => item.id === id)?.book || "");
  };

  const handleSaveEdit = (id) => {
    const newBooksList = booksList.map((item) =>
      item.id === id ? { ...item, book: editedBook } : item
    );
    setBooksList(newBooksList);
    setEditBookId(null);
  };

  const handleDelete = (id) => {
    const newBooksList = booksList.filter((item) => item.id !== id);
    setBooksList(newBooksList);
  };

  return (
    <span className="book">
      <div className="tout" style={{ backgroundColor: props.backgroundColor }}>
        
        <h3>{props.title}</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {booksList.map((item) => (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={item.read}
                onChange={() => handleToggle(item.id)}
              />
              {editBookId === item.id ? (
                <div>
                  <input
                    type="text"
                    value={editedBook}
                    onChange={(e) => setEditedBook(e.target.value)}
                  />
                  <button onClick={() => handleSaveEdit(item.id)}>OK</button>
                </div>
              ) : (
                <span className={item.read ? "read" : ""}>{item.book}</span>
              )}
              {editBookId !== item.id && (
                <>
                  <button type="button" onClick={() => handleEdit(item.id)}><CiEdit /></button>
                  <button onClick={() => handleDelete(item.id)}><MdDelete/></button>
                </>
              )}
            </li>
          ))}
        </ul>
        {showInput ? (
          <div>
            <input
              type="text"
              placeholder="Enter book title"
              value={book}
              onChange={(e) => setBook(e.target.value)}
              autoFocus
            />
            <br />
            <button onClick={handleAddBook}>OK</button>
          </div>
        ) : (
          <button onClick={() => setShowInput(true)}>Add Book</button>
        )}
      </div>
    </span>
  );
}

export default Books;
