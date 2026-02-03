import { useState } from "react";
import SearchBar from "./assets/components/SearchBar/SearchBar";
import BookCard from "./assets/components/BookCard/BookCard";
import Shelf from "./assets/components/Shelf/Shelf";
import { searchBooks } from "./api";
import "../src/assets/globals/global.css";

export default function App() {
  const [results, setResults] = useState([]);
  const [shelf, setShelf] = useState(() => {
    const saved = localStorage.getItem("shelf");
    return saved ? JSON.parse(saved) : [];
  });

  const handleSearch = async (query) => {
    const books = await searchBooks(query);
    setResults(books);
  };

  const handleAdd = (book) => {
    const updated = [...shelf, book];
    setShelf(updated);
    localStorage.setItem("shelf", JSON.stringify(updated));
  };

  return (
    <div>
      <h1>Minha Estante</h1>
      <SearchBar onSearch={handleSearch} />

      <h2>Resultados</h2>
      <div style={{ display: "grid", gap: "12px", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}>
        {results.map((book) => (
          <BookCard key={book.id} book={book} onAdd={handleAdd} />
        ))}
      </div>

      <h2>Minha Estante</h2>
      <Shelf books={shelf} />
    </div>
  );
}
