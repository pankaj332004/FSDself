// src/components/StudentList.jsx
export default function StudentList({ students, onEdit, onDelete }) {
  if (!students || students.length === 0) {
    return <p className="text-center text-gray-500 mt-4">No students found.</p>;
  }

  return (
    <ul className="mt-4">
      {students.map((s) => (
        <li
          key={s.id}
          className="flex justify-between items-center border-b py-2 px-2 hover:bg-gray-50 rounded"
        >
          <div>
            <p className="font-semibold">{s.name}</p>
            <p className="text-sm text-gray-600">
              Age: {s.age} | Course: {s.course}
            </p>
          </div>
          <div>
            <button
              onClick={() => onEdit(s)}
              className="bg-yellow-400 text-white px-3 py-1 rounded mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(s.id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
