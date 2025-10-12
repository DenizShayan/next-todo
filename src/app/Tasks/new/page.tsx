"use client";
import { useState } from "react";

export default function TaskList() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState<{ title: string; description: string }[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // stops page refresh!
    if (!title) return;
    const newTask = { title, description };
    setTasks([...tasks, newTask]);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow flex flex-col gap-6">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded"
        />
        <textarea
          placeholder="Task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 rounded"
          rows={3}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add Task
        </button>
      </form>

      <ul className="flex flex-col gap-3">
        {tasks.map((task, index) => (
          <li key={index} className="p-3 border rounded shadow-sm">
            <h2 className="font-bold">{task.title}</h2>
            <p>{task.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
