// src/pages/AddBook.jsx
import React, { useState } from "react";

export default function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !author || !isbn) {
      alert("Please fill all fields");
      return;
    }

    const newBook = { id: Date.now(), title, author, isbn, borrowed: false };

    const stored = JSON.parse(localStorage.getItem("books")) || [];
    stored.push(newBook);
    localStorage.setItem("books", JSON.stringify(stored));

    alert("Book added successfully!");
    setTitle("");
    setAuthor("");
    setIsbn("");
  };

  return (
    <div className="max-w-md mx-auto mt-8 bg-white shadow-md p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Add a New Book</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="ISBN"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Book
        </button>
      </form>
    </div>
  );
}
