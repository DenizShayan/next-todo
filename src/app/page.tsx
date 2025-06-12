'use client';

import { useState } from 'react';

// Define the shape of a todo item
type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export default function Home() {
  const [input, setInput] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  // Add new todo
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newTodo: Todo = {
      id: Date.now(),
      text: input.trim(),
      done: false
    };

    setTodos([...todos, newTodo]);
    setInput('');
  };

  // Toggle done status
  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  // Delete a todo
  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <main className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Next Todo</h1>

      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
          className="border p-2 flex-grow rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </form>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between p-2 border rounded"
          >
            <span
              onClick={() => toggleTodo(todo.id)}
              className={`cursor-pointer flex-grow ${todo.done ? 'line-through text-gray-400' : ''
                }`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500 hover:text-red-700 ml-4"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
