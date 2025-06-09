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
    setInput(""); // پاک کردن input بعد از اضافه‌کردن
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
          <li key={todo.id} className="flex justify-between items-center mb-2 border-b pb-2">
            <span>{todo.text}</span>
            <span>{todo.done ? "✅" : "⬜"}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
