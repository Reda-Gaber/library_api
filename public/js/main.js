async function fetchBooks() {
  try {
    const res = await fetch("http://localhost:5000/api/books");
    const books = await res.json();

    const container = document.getElementById("books-container");

    books.forEach(book => {

      const card = document.createElement("div");
      card.className = "book-card";

      const title = document.createElement("h2");
      title.className = "book-title";
      title.textContent = book.name;

      const desc = document.createElement("p");
      desc.className = "book-desc";
      desc.textContent = book.description;

      const actions = document.createElement("div");
      actions.className = "book-actions";

      const readBtn = document.createElement("button");
      readBtn.className = "read-btn";
      readBtn.textContent = "قراءة";

      const editBtn = document.createElement("button");
      editBtn.className = "edit-btn";
      editBtn.textContent = "تعديل";

      const deleteBtn = document.createElement("button");
      deleteBtn.className = "delete-btn";
      deleteBtn.textContent = "حذف";

      actions.appendChild(readBtn);
      actions.appendChild(editBtn);
      actions.appendChild(deleteBtn);

      card.appendChild(title);
      card.appendChild(desc);
      card.appendChild(actions);

      container.appendChild(card);
    });
  } catch (err) {
    console.error("Error:", err);
  }
}

fetchBooks();