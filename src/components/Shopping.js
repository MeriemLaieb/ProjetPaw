import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import NavigationBar from "./Navigationbar";

function ShoppingList(props) {
  const [showInput, setShowInput] = useState(false);
  const [item, setItem] = useState("");
  const [shoppingList, setShoppingList] = useState([]);
  const [editItemId, setEditItemId] = useState(null);
  const [editedItem, setEditedItem] = useState("");

  const handleAddItem = () => {
    if (item.trim() !== "") {
      setShoppingList([...shoppingList, { id: Date.now(), item, bought: false }]);
      setItem("");
      setShowInput(false);
    }
  };

  const handleToggle = (id) => {
    const newShoppingList = shoppingList.map((item) =>
      item.id === id ? { ...item, bought: !item.bought } : item
    );
    setShoppingList(newShoppingList);
  };

  const handleEdit = (id) => {
    setEditItemId(id);
    setEditedItem(shoppingList.find((item) => item.id === id)?.item || "");
  };

  const handleSaveEdit = (id) => {
    const newShoppingList = shoppingList.map((item) =>
      item.id === id ? { ...item, item: editedItem } : item
    );
    setShoppingList(newShoppingList);
    setEditItemId(null);
  };

  const handleDelete = (id) => {
    const newShoppingList = shoppingList.filter((item) => item.id !== id);
    setShoppingList(newShoppingList);
  };

  return (
    <div className="tout"  style={{ backgroundColor: props.backgroundColor }}>
      <NavigationBar />
      <h3>{props.title}</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {shoppingList.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.bought}
              onChange={() => handleToggle(item.id)}
            />
            {editItemId === item.id ? (
              <div>
                <input
                  type="text"
                  value={editedItem}
                  onChange={(e) => setEditedItem(e.target.value)}
                />
                <button onClick={() => handleSaveEdit(item.id)}>OK</button>
              </div>
            ) : (
              <span className={item.bought ? "bought" : ""}>{item.item}</span>
            )}
            {editItemId !== item.id && (
              <>
                <button className="btn-edit" onClick={() => handleEdit(item.id)}>
                  <CiEdit />
                </button>
                <button className="btn-delete" onClick={() => handleDelete(item.id)}>
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
            placeholder="Enter item"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            autoFocus
          />
          <br />
          <button onClick={handleAddItem}>OK</button>
        </div>
      ) : (
        <button className="btn-add" onClick={() => setShowInput(true)}>
          <FaPlus />Add Item
        </button>
      )}
    </div>
  );
}

export default ShoppingList;
