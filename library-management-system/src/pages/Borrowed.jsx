import { useEffect, useState } from "react";
import BorrowList from "../components/BorrowList";
import { getBooks } from "../api/books";


export default function Borrowed() {
const [books, setBooks] = useState([]);


useEffect(() => {
setBooks(getBooks());
}, []);


return (
<div>
<BorrowList books={books} />
</div>
);
}