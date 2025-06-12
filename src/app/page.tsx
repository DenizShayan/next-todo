'use client';

import { useState } from "react";

type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newTodo: Todo = {
      id: Date.now(),
      text: input.trim(),
      done: false,
    };

    setTodos([...todos, newTodo]);
    setInput("");
  };

  // ✅ toggle: تغییر وضعیت done
  const toggleTodo = (id: number) => {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updated);
  };

  // ❌ remove: حذف کردن تسک
  const removeTodo = (id: number) => {
    const filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  };

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Todo App</h1>

      {/* فرم اضافه‌کردن تسک جدید */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 w-full mb-4"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add
        </button>
      </form>

      {/* لیست تسک‌ها */}
      <ul className="mt-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex justify-between items-center mb-2 border-b pb-2 ${
              todo.done ? "text-gray-400 line-through" : ""
            }`}
          >
            <span onClick={() => toggleTodo(todo.id)} className="cursor-pointer">
              {todo.text}
            </span>
            <button
              onClick={() => removeTodo(todo.id)}
              className="text-red-500 font-bold ml-4"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
