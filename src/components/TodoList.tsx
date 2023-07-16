import React, { useState } from "react";
import { AiFillDelete, AiFillEdit, AiFillCheckCircle } from "react-icons/ai";

interface Item {
  id: number;
  text: string;
  completed: boolean;
}

export const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Item[]>([
    { id: 1, text: "Learn Java Script", completed: false },
    { id: 2, text: "Build Todo List", completed: false },
  ]);

  const [input, setInput] = useState<string>("");
  const [editingItemId, setEditingItemId] = useState<number | null>(null);
  const [editingItemText, setEditingItemText] = useState<string>("");

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const handleClick = () => {
    const newTodo: Item = { id: Date.now(), text: input, completed: false };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id: number) => {
    const itemToEdit = todos.find((todo) => todo.id === id);
    if (itemToEdit) {
      setEditingItemId(id);
      setEditingItemText(itemToEdit.text);
    }
  };

  const handleSave = () => {
    if (editingItemId !== null) {
      setTodos(
        todos.map((todo) => {
          if (todo.id === editingItemId) {
            return { ...todo, text: editingItemText };
          }
          return todo;
        })
      );
      setEditingItemId(null);
      setEditingItemText("");
    }
  };

  return (
    <div className="main">
      <h1 className="title">My Todo List</h1>
      <div className="input-text">
        <input
          type="text"
          placeholder="Add todo item"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn" onClick={handleClick} disabled={input.length < 1}>
          Add
        </button>
      </div>
      <hr />
      <ul>
        {todos.map((todo) => (
          <li
            className="item"
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {editingItemId === todo.id ? (
              <input
                type="text"
                value={editingItemText}
                onChange={(e) => setEditingItemText(e.target.value)}
              />
            ) : (
              todo.text
            )}
            <div className="all-btn">
              {editingItemId === todo.id ? (
                <button onClick={handleSave} className="success-btn" style={{ color: "green" }}>
                  <AiFillCheckCircle />
                </button>
              ) : (
                <button
                  onClick={() => handleEdit(todo.id)}
                  className="edit-btn"
                  style={{ color: "yellow" }}
                >
                  <AiFillEdit />
                </button>
              )}
              <button
                onClick={() => handleDelete(todo.id)}
                className="del-btn"
                style={{ color: "red" }}
              >
                <AiFillDelete />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
