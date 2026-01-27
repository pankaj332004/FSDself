export default function SearchBar({ query, setQuery }) {
return (
<input
type="text"
placeholder="Search books..."
value={query}
onChange={(e) => setQuery(e.target.value)}
className="border p-2 rounded w-full md:w-1/2 mx-auto block mt-4"
/>
);
}