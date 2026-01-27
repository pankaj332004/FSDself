export default function BookList({ books, onDelete, onToggle }) {
if (books.length === 0)
return <p className="text-center text-gray-500">No books available.</p>;


return (
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
{books.map((book) => (
<div key={book.id} className="bg-white shadow p-4 rounded">
<h3 className="font-bold text-lg">{book.title}</h3>
<p className="text-gray-600">by {book.author}</p>
<p className="mt-2">
Status: {" "}
<span className={book.available ? "text-green-600" : "text-red-600"}>
{book.available ? "Available" : "Borrowed"}
</span>
</p>
<div className="flex gap-2 mt-3">
<button
onClick={() => onToggle(book.id)}
className="bg-yellow-500 text-white px-2 py-1 rounded"
>
{book.available ? "Borrow" : "Return"}
</button>
<button
onClick={() => onDelete(book.id)}
className="bg-red-600 text-white px-2 py-1 rounded"
>
Delete
</button>
</div>
</div>
))}
</div>
);
}