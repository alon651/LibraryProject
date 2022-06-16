function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.changeRead = function () {
    this.read = !this.read;
  };
  this.delete = function () {
    console.log(this.title + " trying to delete");
  };
}
function Library() {
  this.books = [];
  this.add = function (book) {
    this.books.push(book);
  };
  this.display = function () {
    elements = [];
    display.replaceChildren();
    this.books.forEach(createCard);
    // display.replaceChildren(elements);
  };
}
let elements = [];
let lib = new Library();
var display = document.getElementById("book-display");
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
  deleteBtn.onclick = value.delete;
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
    pages.textContent = "the book was read";
  } else {
    pages.textContent = "the book wasn't read";
  }
  card.appendChild(readStatus);

  const changeBtn = document.createElement("button");
  changeBtn.textContent = "Change read status";
  changeBtn.classList.add("book-read");
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

var submitBtn = document.getElementById("sumbit-btn");
submitBtn.onclick = function () {
  var answer = document.getElementById("book-form");
  var bookName = document.getElementById("bookName").value;
  var author = document.getElementById("author").value;
  var pages = document.getElementById("pages").value;
  var read = document.getElementById("read").checked;
  var b = new Book(bookName, author, pages, read);
  lib.add(b);
  modal.style.display = "none";
  lib.display();
};
