import { useState } from "react";

export default function BookForm({ onAddBook }) {
  const [form, setForm] = useState({
    title: "",
    author: "",
    email: "",
    publisher: "",
    age: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validations
    if (!form.title || !form.author) {
      alert("Title and Author are required");
      return;
    }

    if (form.email && !form.email.includes("@")) {
      alert("Please enter a valid email");
      return;
    }

    if (form.age && isNaN(form.age)) {
      alert("Age must be a number");
      return;
    }

    // Add book
    onAddBook({ ...form, id: Date.now() });

    // Reset form
    setForm({
      title: "",
      author: "",
      email: "",
      publisher: "",
      age: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
      />
      <input
        name="author"
        placeholder="Author"
        value={form.author}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <input
        name="publisher"
        placeholder="Publisher"
        value={form.publisher}
        onChange={handleChange}
      />
      <input
        name="age"
        placeholder="Age"
        value={form.age}
        onChange={handleChange}
      />
      <button type="submit">Add Book</button>
    </form>
  );
}
