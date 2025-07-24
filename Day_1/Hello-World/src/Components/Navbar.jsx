import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-2xl font-bold tracking-wide text-yellow-400">
            <Link to="/">EAD</Link>
          </div>

          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-yellow-400 transition">
              Home
            </Link>
            <Link
              to="/hello_world"
              className="hover:text-yellow-400 transition"
            >
              Hello World
            </Link>
            <Link to="/counter" className="hover:text-yellow-400 transition">
              Counter
            </Link>
            <Link
              to="/mapping_list"
              className="hover:text-yellow-400 transition"
            >
              Mapping List
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block hover:text-yellow-400 transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block hover:text-yellow-400 transition"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block hover:text-yellow-400 transition"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
