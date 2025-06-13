'use client'

import React, { useState, useEffect } from 'react'

type Task = {
  id: number
  title: string
  completed: boolean
}

export default function Page() {
  const [task, setTask] = useState<string>("")
  const [tasks, setTasks] = useState<Task[]>([])

  // Load tasks from localStorage on first render
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks")
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks))
    }
  }, [])

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  // Add new task
  const handleAddTask = () => {
    if (!task.trim()) return
    const newTask: Task = {
      id: Date.now(),
      title: task,
      completed: false,
    }
    setTasks([...tasks, newTask])
    setTask("")
  }

  // Toggle task completion
  const toggleTask = (id: number) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )
    setTasks(updatedTasks)
  }

  // Delete a task
  const deleteTask = (id: number) => {
    const filteredTasks = tasks.filter(task => task.id !== id)
    setTasks(filteredTasks)
  }

  // Clear all tasks
  const clearAllTasks = () => {
    if (confirm("Are you sure you want to delete all tasks?")) {
      setTasks([])
    }
  }

  return (
    <main className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">ToDo List</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a new task..."
          className="flex-grow p-2 border rounded"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      {tasks.length > 0 && (
        <>
          <ul className="space-y-2 mb-4">
            {tasks.map((task, index) => (
              <li
                key={task.id}
                className="flex items-center justify-between border p-2 rounded"
              >
                <span
                  onClick={() => toggleTask(task.id)}
                  className={`flex-grow cursor-pointer ${task.completed ? "line-through text-gray-500" : ""
                    }`}
                >
                  {index + 1}. {task.title}
                </span>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="ml-2 text-red-500 hover:text-red-700"
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>

          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>{tasks.length} task{tasks.length > 1 && "s"} total</span>
            <button
              onClick={clearAllTasks}
              className="text-red-600 hover:underline"
            >
              Clear all
            </button>
          </div>
        </>
      )}

      {tasks.length === 0 && (
        <p className="text-gray-500">No tasks yet. Add one!</p>
      )}
    </main>
  )
}
