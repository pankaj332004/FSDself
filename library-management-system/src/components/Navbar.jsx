// src/components/Navbar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const current = location.pathname;

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Books", path: "/books" },
    { name: "Borrowed", path: "/borrowed" },
    { name: "Add Book", path: "/addbook" },
  ];

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link to="/" className="text-lg font-semibold hover:text-gray-200">
          📚 Library System
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${
                current === item.path
                  ? "bg-white text-blue-600"
                  : "hover:bg-blue-500"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
