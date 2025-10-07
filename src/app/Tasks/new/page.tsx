"use client";
import { useState } from "react";

export default function TaskForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tasks, setTasks] = useState<{ title: string; description: string }[]>([]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(!title) return;
        const newTask = { title, description };
        setTasks([...tasks, newTask]);
        setTitle("");
        setDescription("");
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto flex flex-col gap-4">
            <input
                type="text"
                placeholder="Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border p-2 rounded"
            />
            <textarea
                placeholder="Task Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border p-2 rounded"
                rows={4}
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Add Task
            </button>
        </form>
    );
}