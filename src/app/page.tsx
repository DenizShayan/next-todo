'use client';  // ۱. این فایل باید در سمت کلاینت اجرا شود چون از useState استفاده می‌کنیم

import { useState } from 'react';  // ۲. ایمپورت useState برای مدیریت state در کامپوننت

// ۳. تعریف نوع داده Todo
type Todo = {
  id: number;     // شناسه یکتا برای هر تسک
  text: string;   // متن تسک
  done: boolean;  // وضعیت انجام شدن تسک
};

export default function Home() {   // ۴. کامپوننت اصلی صفحه
  // ۵. تعریف state برای متن ورودی و لیست تسک‌ها
  const [input, setInput] = useState<string>('');  
  const [todos, setTodos] = useState<Todo[]>([]);

  // ۶. تابع اضافه کردن تسک جدید وقتی فرم ارسال می‌شود
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();           // جلوگیری از رفرش شدن صفحه
    if (!input.trim()) return;    // اگر ورودی خالی بود کاری نکن

    // ساختن تسک جدید با id یکتا
    const newTodo: Todo = {
      id: Date.now(),
      text: input.trim(),
      done: false
    };

    // اضافه کردن تسک جدید به آرایه todos
    setTodos([...todos, newTodo]);
    setInput('');  // پاک کردن ورودی
  };

  // ۷. تغییر وضعیت انجام شدن تسک (toggle)
  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  // ۸. حذف تسک از لیست
  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // ۹. JSX بازگشتی برای رندر UI
  return (
    <main className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Next Todo</h1>

      {/* ۱۰. فرم ورودی تسک */}
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

      {/* ۱۱. نمایش لیست تسک‌ها */}
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between p-2 border rounded"
          >
            <span
              onClick={() => toggleTodo(todo.id)}
              className={`cursor-pointer flex-grow ${
                todo.done ? 'line-through text-gray-400' : ''
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
