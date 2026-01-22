import { useState } from "react";

export default function BookForm({ books, setBooks }) {
  const [form, setForm] = useState({
    title: "",
    author: "",
    email: "",
    age: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.author) {
      alert("All fields required");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      alert("Invalid email");
      return;
    }

    if (isNaN(form.age)) {
      alert("Age must be a number");
      return;
    }

    setBooks([...books, { ...form, id: Date.now() }]);
    setForm({ title: "", author: "", email: "", age: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} />
      <input name="author" placeholder="Author" value={form.author} onChange={handleChange} />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <input name="age" placeholder="Age" value={form.age} onChange={handleChange} />
      <button>Add Book</button>
    </form>
  );
}
