export default function Home() {
  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Todo App</h1>

      {/* Form for adding new todos */}
      <form>
        <input
          type="text"
          placeholder="Add a new task..."
          className="border p-2 w-full mb-4"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add
        </button>
      </form>

      {/* List of todos */}
      <ul>
        {/* Each todo item will go here */}
      </ul>
    </main>
  );
}
