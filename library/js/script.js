const myLibrary = [];
const submitButton = document.querySelector('#submit-btn');

const booksDiv = document.querySelector('.book-cards');
const dialog = document.querySelector("dialog");
const addBookButton = document.querySelector(".show-modal");
const closeDialogButton = document.querySelector(".close-btn");



const defaultData = new Book('Atomic Habits', 'James Clear', false);


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


submitButton.addEventListener('click', event => {
  const author = document.querySelector('#author').value;
  const title = document.querySelector('#title').value;
  const newBook = new Book(title, author, false);

  addBookToLibrary(newBook);
  displayBooks(myLibrary);
  event.preventDefault();
});

addBookButton.addEventListener('click', () => {
  dialog.showModal();
});

closeDialogButton.addEventListener('click', () => {
  dialog.close();
});

// document.addEventListener('click', e => {
//   if (!e.target.closest("dialog")) {
//     dialog.showModal();
//   }
// });


// default data
myLibrary.push(defaultData)

// Load books on page load
displayBooks(myLibrary);

