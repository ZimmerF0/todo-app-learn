import React, { useState } from "react";

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
        <button onClick={handleClick} disabled={input.length < 1}>
          Add
        </button>
      </div>

      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            onClick={() => handleToggle(todo.id)}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};
