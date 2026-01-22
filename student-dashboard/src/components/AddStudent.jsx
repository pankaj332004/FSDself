import { useState } from "react";

export default function AddStudent({ onAdd }) {
  const [form, setForm] = useState({
    name: "",
    age: "",
    course: "",
    email: "",
    address: "",
    image: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm((prev) => ({ ...prev, image: reader.result })); // store Base64
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
    onAdd(form);
    setForm({ name: "", age: "", course: "", email: "", address: "", image: "" , phone: ""});
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 rounded-lg shadow-sm bg-blue-50 w-auto  h-90">
      <h2 className="text-xl font-semibold mb-3">➕ Add Student</h2>

      <input
        className="border p-2 w-full mb-2 rounded"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        className="border p-2 w-full mb-2 rounded"
        name="age"
        type="number"
        placeholder="Age"
        value={form.age}
        onChange={handleChange}
      />
      <input
        className="border p-2 w-full mb-2 rounded"
        name="course"
        placeholder="Course"
        value={form.course}
        onChange={handleChange}
      />
      <input 
        className="border p-2 w-full mb-2 rounded"
        name="phone"
        placeholder="Mobile Number"
        value={form.phone}
        onChange={handleChange}
        type="text"
        />
      <input
        className="border p-2 w-full mb-2 rounded"
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <input
        className="border p-2 w-full mb-2 rounded"
        name="address"
        placeholder="Address"
        value={form.address}
        onChange={handleChange}
      />

      <input
        type="file"
        accept="image/*"
        className="border p-2 w-full mb-3 rounded"
        onChange={handleImageChange}
      />


      {form.image && (
        <img
          src={form.image}
          alt="Preview"
          className="w-20 h-20 object-cover rounded-full mb-3 border"
        />
      )}

      <button className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700">
        Add Student
      </button>
    </form>
  );
}

