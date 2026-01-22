import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookForm from "../components/BookForm";
import BookTable from "../components/BookTable";
import { getBooks } from "../api/booksApi";

function Home() {
  const navigate = useNavigate();

  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ API INTEGRATION
  useEffect(() => {
    getBooks()
      .then((res) => {
        setBooks(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setLoading(false);
      });
  }, []);

  const handleSave = (book) => {
    if (book.id) {
      setBooks(books.map(b => (b.id === book.id ? book : b)));
    } else {
      setBooks([...books, { ...book, id: Date.now() }]);
    }
    setEditingBook(null);
  };

  const handleDelete = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading books...</p>;
  }

  return (
    <div>
      <BookForm onSave={handleSave} editingBook={editingBook} />

      <BookTable
        books={books}
        onView={(id) => navigate(`/book/${id}`)}
        onEdit={setEditingBook}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default Home;
