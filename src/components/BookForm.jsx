import { useEffect, useState } from "react";

function BookForm({ onSave, editingBook }) {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publisher: "",
    publishedYear: "",
    description: ""
  });

  useEffect(() => {
    if (editingBook) {
      setFormData(editingBook);
    }
  }, [editingBook]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // ✅ REQUIRED

    // basic validation
    if (
      !formData.title ||
      !formData.author ||
      !formData.publisher ||
      !formData.publishedYear
    ) {
      alert("Please fill all required fields");
      return;
    }

    // ✅ THIS IS THE IMPORTANT PART
    onSave({
      ...formData,
      publishedYear: Number(formData.publishedYear)
    });

    // reset form
    setFormData({
      title: "",
      author: "",
      publisher: "",
      publishedYear: "",
      description: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{editingBook ? "Edit Book" : "Add Book"}</h3>

      <input
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
      />

      <input
        name="author"
        placeholder="Author"
        value={formData.author}
        onChange={handleChange}
      />

      <input
        name="publisher"
        placeholder="Publisher"
        value={formData.publisher}
        onChange={handleChange}
      />

      <input
        type="number"
        name="publishedYear"
        placeholder="Published Year"
        value={formData.publishedYear}
        onChange={handleChange}
      />

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />

      <button type="submit">
        {editingBook ? "Update Book" : "Add Book"}
      </button>
    </form>
  );
}

export default BookForm;
