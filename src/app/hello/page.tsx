"use client";
import { useState } from "react";

export default function HelloReact() {
    const [message, setMessage] = useState("Hello React!");

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold mb-4">{message}</h1>
            <button
                onClick={() => setMessage("You clicked the button! 🎉")}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
                Click Me
            </button>
        </div>
    );
}
