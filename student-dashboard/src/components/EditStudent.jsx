import { useState, useEffect } from "react";

export default function EditStudent({ student, onUpdate, onCancel }) {
  const [form, setForm] = useState({
    id: "",
    name: "",
    age: "",
    course: "",
    phone: "",
    email: "",
    address: "",
    image: ""
  });

  useEffect(() => {
    if (student) setForm({ ...student });
  }, [student]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.age || !form.course || !form.email || !form.address) {
      alert("Please fill all fields");
      return;
    }
    onUpdate(form);
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 rounded-lg shadow-sm bg-yellow-50">
      <h2 className="text-xl font-semibold mb-3">✏️ Edit Student</h2>

      <input className="border p-2 w-full mb-2 rounded" name="name" placeholder="Name" value={form.name} onChange={handleChange} />
      <input className="border p-2 w-full mb-2 rounded" name="age" type="number" placeholder="Age" value={form.age} onChange={handleChange} />
      <input className="border p-2 w-full mb-2 rounded" name="course" placeholder="Course" value={form.course} onChange={handleChange} />
      <input className="border p-2 w-full mb-2 rounded" name="phone" type="number" placeholder="Mobile Number" value={form.phone} onChange={handleChange} />
      <input className="border p-2 w-full mb-2 rounded" name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <input className="border p-2 w-full mb-2 rounded" name="address" placeholder="Address" value={form.address} onChange={handleChange} />

      <input type="file" accept="image/*" className="border p-2 w-full mb-3 rounded" onChange={handleImageChange} />

      {form.image && (
        <img src={form.image} alt="Preview" className="w-20 h-20 object-cover rounded-full mb-3 border" />
      )}

      <div className="flex gap-2">
        <button className="bg-green-600 text-white px-4 py-2 rounded w-full" type="submit">
          Update
        </button>
        <button type="button" onClick={onCancel} className="bg-gray-400 text-white px-4 py-2 rounded w-full">
          Cancel
        </button>
      </div>
    </form>
  );
}
