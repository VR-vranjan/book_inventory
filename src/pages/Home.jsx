import { useState } from "react";
import BookTable from "../components/BookTable";
import BookForm from "../components/BookForm";

export default function Home() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      email: "publisher@books.com",
      age: 5,
      publisher: "Penguin",
      publishedDate: "2018",
      overview: "A practical guide to building good habits."
    }
  ]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Book Inventory Management</h1>
      <p>Manage your book collection easily</p>

      {/* Add Book Form */}
      <BookForm books={books} setBooks={setBooks} />

      {/* Book Table */}
      <BookTable books={books} setBooks={setBooks} />
    </div>
  );
}
