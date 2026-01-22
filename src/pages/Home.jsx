import { useEffect, useState } from "react";
import { getBooks } from "../api/booksApi";
import BookTable from "../components/BookTable";
import BookForm from "../components/BookForm";

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then(res => setBooks(res.data));
  }, []);

  return (
    <div className="container">
      <BookForm setBooks={setBooks} books={books} />
      <BookTable books={books} setBooks={setBooks} />
    </div>
  );
}
