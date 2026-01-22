import { useEffect, useState } from "react";
import BookList from "../components/BookList";
import SearchBar from "../components/SearchBar";
import { getBooks, saveBooks } from "../api/books";


export default function Books() {
const [books, setBooks] = useState([]);
const [query, setQuery] = useState("");


useEffect(() => {
setBooks(getBooks());
}, []);


const handleDelete = (id) => {
const updated = books.filter((b) => b.id !== id);
setBooks(updated);
saveBooks(updated);
};


const toggleAvailability = (id) => {
const updated = books.map((b) =>
b.id === id ? { ...b, available: !b.available } : b
);
setBooks(updated);
saveBooks(updated);
};


const filtered = books.filter((b) =>
b.title.toLowerCase().includes(query.toLowerCase())
);


return (
<div>
<SearchBar query={query} setQuery={setQuery} />
<BookList
books={filtered}
onDelete={handleDelete}
onToggle={toggleAvailability}
/>
</div>
);
}