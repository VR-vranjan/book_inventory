import { Link } from "react-router-dom";

export default function BookTable({ books = [], setBooks }) {
  const deleteBook = (id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      setBooks(books.filter(book => book.id !== id));
    }
  };

  return (
    <div style={{ maxHeight: "300px", overflowY: "scroll", marginTop: "20px" }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#ddd" }}>
            <th>Title</th>
            <th>Author</th>
            <th>Email</th>
            <th>Publisher</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {books.length === 0 && (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                No books available
              </td>
            </tr>
          )}

          {books.map(book => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.email}</td>
              <td>{book.publisher}</td>
              <td>{book.age}</td>
              <td>
                <Link to={`/book/${book.id}`} style={{ marginRight: "10px" }}>
                  View
                </Link>
                <button onClick={() => deleteBook(book.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
