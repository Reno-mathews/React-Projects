import { useState } from "react";

function App() {
    const [query, setQuery] = useState("");

    const books = [
        "Harry Potter",
        "The Hobbit",
        "Dune",
        "1984",
        "Foundation",
    ];

    return (
        <div>
            <h1>Search App</h1>

            <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search books..."
            />

            <ul>
                {books
                    .filter((book) =>
                        book.toLowerCase().includes(query.toLowerCase())
                    )
                    .map((book, index) => (
                        <li key={index}>{book}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;




