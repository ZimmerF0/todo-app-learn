import React, { useState } from "react";
import { AiFillDelete, AiFillEdit, AiFillCheckCircle } from "react-icons/ai";

interface item {
  id: number;
  text: string;
  completed: boolean;
}

export const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<item[]>([
    { id: 1, text: "Learn Java Script", completed: false },
    { id: 2, text: "Build Todo List", completed: false },
  ]);

  const [input, setInput] = useState<string>("");

  const handleToggle = (id: number) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const handleClick = () => {
    const newTodo: item = { id: Date.now(), text: input, completed: false };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="main">
      <h1 className="title">My Todo List</h1>
      <div className="input-text">
        <input
          type="text"
          placeholder="Add todo item"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button
          className="btn"
          onClick={handleClick}
          disabled={input.length < 1}
        >
          Add
        </button>
      </div>
      <hr />
      <ul>
        {todos.map(todo => (
          <li
            className="item"
            key={todo.id}
            // onClick={() => handleToggle(todo.id)}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
            <div>
              <button onClick={()=>handleToggle(todo.id)} className="edit-btn" style={{ color: "green" }}>
                <AiFillCheckCircle />
              </button>
              <button className="edit-btn" style={{ color: "yellow" }}>
                <AiFillEdit />
              </button>
              <button onClick={()=>handleDelete(todo.id)} className="del-btn" style={{ color: "red" }}>
                <AiFillDelete />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
