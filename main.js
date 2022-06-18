function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = 0;
}

Book.prototype.changeRead = function () {
  this.read = !this.read;
  lib.display();
};

Book.prototype.delete = function () {
  const id = this.id;
  const index = lib.books.findIndex(function (Book) {
    return Book.id === id;
  });
  lib.remove(index);
};
function Library() {
  this.books = [];
  this.idOfNextBook = 0;
}

Library.prototype.add = function (book) {
  book.id = this.idOfNextBook;
  this.books.push(book);
  this.idOfNextBook += 1;
};

Library.prototype.remove = function (index) {
  this.books.splice(index, 1);
  lib.display();
};

Library.prototype.display = function () {
  elements = [];
  display.replaceChildren();
  this.books.forEach(createCard);
};

let elements = [];
const lib = new Library();
const display = document.getElementById("book-display");
function createCard(value) {
  //create the card itself
  const card = document.createElement("div");
  card.classList.add("book-card");

  //create children
  //title
  const titleElement = document.createElement("div");
  titleElement.classList.add("book-title");
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "x";
  deleteBtn.classList.add("close-btn");
  deleteBtn.onclick = function () {
    value.delete();
  };
  titleElement.textContent += value.title;
  titleElement.appendChild(deleteBtn);
  card.appendChild(titleElement);
  //author
  const author = document.createElement("div");
  author.textContent = "by: " + value.author;
  card.appendChild(author);
  //pages

  const pages = document.createElement("div");
  pages.textContent = "has " + value.pages + " pages";
  card.appendChild(pages);

  //read status
  const readStatus = document.createElement("div");
  if (value.read) {
    readStatus.textContent = "the book was read";
  } else {
    readStatus.textContent = "the book wasn't read";
  }
  card.appendChild(readStatus);

  const changeBtn = document.createElement("button");
  changeBtn.textContent = "Change read status";
  changeBtn.classList.add("book-read");
  changeBtn.onclick = function () {
    value.changeRead();
  };

  card.appendChild(changeBtn);
  //return the card
  display.appendChild(card);
}

var btn = document.getElementsByClassName("add-book-btn")[0];
var modal = document.getElementById("myModal");
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

let btnAdd = document.getElementById("btn-add");
btn.onclick = function () {
  modal.style.display = "block";
};

const submitBtn = document.getElementById("sumbit-btn");
submitBtn.onclick = function () {
  const bookName = document.getElementById("bookName").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;
  const b = new Book(bookName, author, pages, read);
  lib.add(b);
  modal.style.display = "none";
  lib.display();
};
