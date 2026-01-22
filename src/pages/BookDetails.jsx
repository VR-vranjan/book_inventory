import { useParams, useNavigate } from "react-router-dom";

export default function BookDetails({ books }) {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find book by ID
  const book = books.find((b) => b.id === Number(id));

  if (!book) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Book not found</h2>
        <button onClick={() => navigate("/")}>Back to Home</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>Book Details</h2>
      <p><b>Title:</b> {book.title}</p>
      <p><b>Author:</b> {book.author}</p>
      <p><b>Email:</b> {book.email}</p>
      <p><b>Publisher:</b> {book.publisher}</p>
      <p><b>Published Date:</b> {book.publishedDate}</p>
      <p><b>Age:</b> {book.age}</p>
      <p><b>Overview:</b> {book.overview}</p>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}
