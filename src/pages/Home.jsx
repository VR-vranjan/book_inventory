import { useState } from "react";
import BookTable from "../components/BookTable";
import BookForm from "../components/BookForm";

export default function Home() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      email: "publisher@test.com",
      age: 5
    }
  ]);

  return (
    <div style={{ padding: "20px" }}>
      <BookForm books={books} setBooks={setBooks} />
      <BookTable books={books} setBooks={setBooks} />
    </div>
  );
}
