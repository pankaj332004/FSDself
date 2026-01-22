import { useState } from "react";


export default function BookForm({ onAdd }) {
const [title, setTitle] = useState("");
const [author, setAuthor] = useState("");


const handleSubmit = (e) => {
e.preventDefault();
if (!title || !author) return;
onAdd({ id: Date.now(), title, author, available: true });
setTitle("");
setAuthor("");
};


return (
<form
onSubmit={handleSubmit}
className="max-w-md mx-auto bg-white p-4 rounded shadow"
>
<h2 className="text-xl font-semibold mb-3">Add New Book</h2>
<input
type="text"
placeholder="Title"
value={title}
onChange={(e) => setTitle(e.target.value)}
className="border p-2 w-full mb-2 rounded"
/>
<input
type="text"
placeholder="Author"
value={author}
onChange={(e) => setAuthor(e.target.value)}
className="border p-2 w-full mb-3 rounded"
/>
<button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
Add Book
</button>
</form>
);
}