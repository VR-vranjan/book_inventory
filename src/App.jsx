import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import Navbar from "./components/Navbar";
import { useState } from "react";
import './App.css';


function App() {
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
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home books={books} setBooks={setBooks} />} />
        <Route path="/book/:id" element={<BookDetails books={books} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
