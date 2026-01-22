import { useEffect, useState } from "react";
import BookForm from "../components/BookForm";
import BookTable from "../components/BookTable";
import { getBooks } from "../api/booksApi";

export default function Home() {
  const [books, setBooks] = useState([]);

  // Fetch books from API on mount
  useEffect(() => {
    getBooks()
      .then((data) => setBooks(data))
      .catch((err) => console.error("Error fetching books:", err));
  }, []);

  // Add new book (frontend only)
  const addBook = (book) => {
    setBooks([...books, { ...book, id: Date.now() }]);
  };

  return (
    <div className="container">
      <h1>Book Inventory Management System</h1>

      {/* Add/Edit Form */}
      <BookForm onAddBook={addBook} />

      {/* Book Table */}
      <BookTable books={books} setBooks={setBooks} />
    </div>
  );
}
