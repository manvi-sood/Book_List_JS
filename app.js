// Book Class : Represents a Book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

//UI class: Handle UI Tasks
class UI {
  static displayBooks() {
    const StoredBooks = [
      {
        title: "Stillness is the Key",
        author: "Ryan Holiday",
        isbn: "23546546",
      },
      {
        title: "Art of not Giving a Fu*k",
        author: "Mark Manson",
        isbn: "65767423",
      },
    ];

    const books = StoredBooks;
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector("#book-list");
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</td>
        `;

    list.appendChild(row);
  }

  static clearFields(){
      document.querySelector('#title').value ='';
      document.querySelector('#author').value ='';
      document.querySelector('#isbn').value ='';

  }
}
//Store Class : Handles Storage

// Event: Display Books
document.addEventListener("DOMContentLoaded", UI.displayBooks);

//Event: Add a Book
document.querySelector("#book-form").addEventListener("submit", (e) => {
  // Prevent actual submt
  e.preventDefault();
  //get values
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  // Instantiate book
  const book = new Book(title, author, isbn);

  // Add Book to UI
  UI.addBookToList(book);

  //Clear fields
  UI.clearFields();
});

//Event : Remove a Book
