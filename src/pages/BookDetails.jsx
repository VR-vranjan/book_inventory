import { useParams } from "react-router-dom";

export default function BookDetails() {
  const { id } = useParams();

  return (
    <div className="details">
      <h2>Book Details</h2>
      <p><b>Book ID:</b> {id}</p>
      <p>Author, Publisher, Date, Overview can be shown here</p>
    </div>
  );
}
