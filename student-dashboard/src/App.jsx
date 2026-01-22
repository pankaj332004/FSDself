// src/App.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import AddStudent from "./components/AddStudent";
import EditStudent from "./components/EditStudent";

export default function App() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [editingStudent, setEditingStudent] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

  // ✅ JSON Server API
  const API_URL = "http://localhost:3000/students";

  // ✅ Fetch all students
  const fetchStudents = async () => {
    try {
      const res = await axios.get(API_URL);
      setStudents(res.data);
    } catch (err) {
      console.error("❌ Error fetching students:", err.message);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // ✅ Add student
  const handleAdd = async (student) => {
    try {
      await axios.post(API_URL, student);
      fetchStudents();
    } catch (err) {
      console.error("❌ Error adding student:", err.message);
      alert("Failed to add student. Check console for details.");
    }
  };

  // ✅ Delete student
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchStudents();
    } catch (err) {
      console.error("❌ Error deleting student:", err.message);
    }
  };

  // ✅ Edit student
  const handleEdit = (student) => setEditingStudent(student);

  // ✅ Update student
  const handleUpdate = async (updatedStudent) => {
    try {
      await axios.put(`${API_URL}/${updatedStudent.id}`, updatedStudent);
      setEditingStudent(null);
      fetchStudents();
    } catch (err) {
      console.error("❌ Error updating student:", err.message);
    }
  };

  // ✅ Filter & Sort
  const filteredStudents = Array.isArray(students)
    ? students
        .filter((s) => s.name.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => {
          if (sortBy === "name") return a.name.localeCompare(b.name);
          if (sortBy === "age") return a.age - b.age;
          if (sortBy === "course") return a.course.localeCompare(b.course);
          return 0;
        })
    : [];

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-600 text-white" : "bg-green-200 text-gray-900"
      } transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto p-6">
        {/* 🌙 Header + Dark Mode Toggle */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">🎓 Student Dashboard</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded text-white ${
              darkMode ? "bg-yellow-500" : "bg-gray-800"
            } hover:opacity-80`}
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        {/* 🔍 Search + Sort */}
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <input
            type="text"
            placeholder="🔍 Search students..."
            className="border p-2 rounded flex-1"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="name">Sort by Name</option>
            <option value="age">Sort by Age</option>
            <option value="course">Sort by Course</option>
          </select>
        </div>

        {/* ➕ Add / Edit Form */}
        {editingStudent ? (
          <EditStudent
            student={editingStudent}
            onUpdate={handleUpdate}
            onCancel={() => setEditingStudent(null)}
          />
        ) : (
          <AddStudent onAdd={handleAdd} />
        )}

        {/* 🧩 Student Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {filteredStudents.map((s) => (
            <div
              key={s.id}
              className={`border rounded-2xl shadow-md p-4 ${
                darkMode ? "bg-gray-400" : "bg-teal-200"
              } hover:shadow-lg transition-all`}
            >
              <div className="flex flex-col items-center text-center">
                {/* 👁️ Image preview */}
                <img
                  src={s.image || "https://via.placeholder.com/100"}
                  alt={s.name}
                  onClick={() => setPreviewImage(s.image)}
                  className="w-24 h-24 rounded-full object-cover border mb-3 cursor-pointer hover:scale-105 transition-transform"
                />
                <h2 className="text-lg font-semibold">{s.name}</h2>
                <p className="text-sm opacity-70">Course :-  {s.course}</p>
                <p className="text-sm"> Mobile No. :- {s.phone}</p>
                <p className="text-sm"> Age :- {s.age}</p>
                <p className="text-sm">E-mail :- {s.email}</p>
                <p className="text-sm">Address :- {s.address}</p>

                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => handleEdit(s)}
                    className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(s.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredStudents.length === 0 && (
          <p className="text-center text-gray-400 mt-6">No students found.</p>
        )}
      </div>

      {/* 🖼️ Image Preview Modal */}
      {previewImage && (
  <div
    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
    onClick={() => setPreviewImage(null)}  // 👈 Add this line
  >
    <div
      className="relative"
      onClick={(e) => e.stopPropagation()} // 👈 Prevent closing when clicking on image
    >
      <img
        src={previewImage}
        alt="Preview"
        className="max-w-xs sm:max-w-md md:max-w-lg rounded-xl shadow-lg"
      />
      <button
        onClick={() => setPreviewImage(null)}
        className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full"
      >
        ✖
      </button>
    </div>
  </div>
      )}
    </div>
  );
}
