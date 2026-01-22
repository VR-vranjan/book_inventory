import { useParams } from "react-router-dom";

export default function BookDetails() {
  const { id } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Book Details</h2>
      <p><b>Book ID:</b> {id}</p>
      <p>Author Name</p>
      <p>Publisher</p>
      <p>Published Date</p>
      <p>Overview of the book...</p>
    </div>
  );
}
