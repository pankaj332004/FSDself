export default function BorrowList({ books }) {
const borrowed = books.filter((b) => !b.available);
if (borrowed.length === 0)
return <p className="text-center text-gray-500">No borrowed books.</p>;


return (
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
{borrowed.map((book) => (
<div key={book.id} className="bg-white shadow p-4 rounded">
<h3 className="font-bold">{book.title}</h3>
<p className="text-gray-600">by {book.author}</p>
<p className="text-red-600 mt-2">Borrowed</p>
</div>
))}
</div>
);
}