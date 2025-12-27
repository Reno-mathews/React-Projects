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
            />
        </div>
    )
}




