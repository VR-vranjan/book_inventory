import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>📚 Book Inventory</h2>
      <Link to="/">Home</Link>
    </nav>
  );
}
