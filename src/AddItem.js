import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./actions/listAction";

const AddItem = () => {
  const [textContent, setTextContent] = useState("");
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!textContent.trim()) {
      setTextContent("");
      return;
    }
    addTodo(dispatch)(textContent);
    setTextContent("");
  };

  return (
    <form className="addForm" onSubmit={handleAdd}>
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        ref={inputRef}
        id="addItem"
        type="text"
        placeholder="Add Item"
        required
        value={textContent}
        onChange={(e) => setTextContent(e.target.value)}
      />
      <button
        type="submit"
        aria-label="Add Item"
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
