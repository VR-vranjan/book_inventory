import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#222", color: "#fff" }}>
      <h2>📚 Book Inventory</h2>
      <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
        Home
      </Link>
    </nav>
  );
}
