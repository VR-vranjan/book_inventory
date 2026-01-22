import { useState } from "react";

export default function BookForm({ books, setBooks }) {
  const [form, setForm] = useState({
    title: "",
    author: "",
    email: "",
    age: "",
    publisher: "",
    publishedDate: "",
    overview: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!form.title || !form.author) {
      alert("Title and Author are required");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      alert("Enter valid email");
      return;
    }

    if (isNaN(form.age) || form.age <= 0) {
      alert("Age must be a positive number");
      return;
    }

    // Add new book
    setBooks([...books, { ...form, id: Date.now() }]);

    // Reset form
    setForm({
      title: "",
      author: "",
      email: "",
      age: "",
      publisher: "",
      publishedDate: "",
      overview: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} />
      <input name="author" placeholder="Author" value={form.author} onChange={handleChange} />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <input name="age" placeholder="Age" value={form.age} onChange={handleChange} />
      <input name="publisher" placeholder="Publisher" value={form.publisher} onChange={handleChange} />
      <input name="publishedDate" placeholder="Published Date" value={form.publishedDate} onChange={handleChange} />
      <textarea name="overview" placeholder="Overview" value={form.overview} onChange={handleChange} />
      <button type="submit">Add Book</button>
    </form>
  );
}
