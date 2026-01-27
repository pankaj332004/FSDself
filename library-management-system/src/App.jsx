import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Borrowed from "./pages/Borrowed";
import AddBook from "./pages/AddBook";


export default function App() {
return (
<div className="min-h-screen bg-gray-50">
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/books" element={<Books />} />
<Route path="/borrowed" element={<Borrowed />} />
<Route path="/addbook" element={<AddBook />} />
</Routes>
</div>
);
}