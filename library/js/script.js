const myLibrary = [];
const booksDiv = document.querySelector('.book-cards');
const defaultData = new Book('James Clear', 'Atomic Habits', true);

function Book(title, author, read) {
  this.title = title;
  this.author = author;
  this.read = read;

  this.info = function() {
    let haveRead = this.read ? "have read" : "have not read";

    return `${this.title}, by ${this.author}, ${this.pages} pages, ${haveRead}`;
  };
}

function addBookToLibrary(book) {
  let newBook = new Book(book.title, book.author, book.pages, book.read);
  myLibrary.push(newBook);
}

function displayBooks(books) {
  // Clear the screen before looping
  booksDiv.innerHTML = "";

  books.forEach((element, i) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.classList.add(`data-card${i}`)

    const title = document.createElement('p');
    const author = document.createElement('p');

    title.textContent = element.title;
    author.textContent = element.author;

    card.appendChild(title);
    card.appendChild(author)
    booksDiv.appendChild(card);
  });
}

const button = document.querySelector('#btn');

button.addEventListener('click', event => {
  const author = document.querySelector('#author').value;
  const title = document.querySelector('#title').value;
  const newBook = new Book(title, author, false);

  addBookToLibrary(newBook);
  displayBooks(myLibrary);
  event.preventDefault();
})

// default data
myLibrary.push(defaultData)

// Load books on page load
displayBooks(myLibrary);

