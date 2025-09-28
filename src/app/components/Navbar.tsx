import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <ul className="flex space-x-6">
        <li>
          <Link href="/" className="hover:text-yellow-400 transition">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-yellow-400 transition">
            About
          </Link>
        </li>
        <li>
          <Link href="/tasks" className="hover:text-yellow-400 transition">
            Tasks
          </Link>
        </li>
      </ul>
    </nav>
  );
}
