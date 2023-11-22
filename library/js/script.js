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

Book.prototype.toggleBookReadStatus = function(){
  this.read = !this.read;
}

function addBookToLibrary(book) {
  let newBook = new Book(book.title, book.author, book.read);
  myLibrary.push(newBook);
}

function displayBooks(books) {
  // Clear the screen before looping
  booksDiv.innerHTML = "";

  books.forEach((element, i) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute("data-card", i);

    const title = document.createElement('p');
    title.classList.add('card-title');
    const author = document.createElement('p');
    author.classList.add('card-author');
    const readBtn = document.createElement('button');
    const readBtnFlag = element.read ? "read" : "not read";
    const readBtnColor = element.read ? "green-btn-color" : "red-btn-color";
    console.log(readBtnColor, element.read, readBtnFlag);
    readBtn.classList.add('btn','read-btn',readBtnColor);
     
    readBtn.textContent = readBtnFlag;
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn', 'delete-btn')
    deleteBtn.textContent = 'delete book';


    title.textContent = `"${element.title}"`;
    author.textContent = element.author;

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(readBtn);
    card.appendChild(deleteBtn);
    booksDiv.appendChild(card);
  });
}

booksDiv.addEventListener('click', event => {
  let target = event.target.className;
  if (target.includes('read-btn')){
    let cardIndex = event.target.parentElement.dataset.card;
    myLibrary[cardIndex].toggleBookReadStatus();
    displayBooks(myLibrary);
  };
});

booksDiv.addEventListener('click', event => {
  let target = event.target.className;
  if (target.includes('delete-btn')){
    let cardIndex = event.target.parentElement.dataset.card;
    myLibrary.splice(cardIndex, 1);
    displayBooks(myLibrary);
  };
});

submitButton.addEventListener('click', event => {
  const author = document.querySelector('#author').value;
  const title = document.querySelector('#title').value;
  const readBtn = document.querySelector('#read-button').value;
  const bookIsRead = readBtn === 'on' ? true : false;

  if (author === "" || title === "") {
    return
  }

  // create book object
  const newBook = new Book(title, author, bookIsRead);

  addBookToLibrary(newBook);
  displayBooks(myLibrary);
  event.preventDefault();
  dialog.close();

});

addBookButton.addEventListener('click', () => {
  dialog.showModal();
});

closeDialogButton.addEventListener('click', () => {
  dialog.close();
});

// default data
myLibrary.push(defaultData)

// Load books on page load
displayBooks(myLibrary);

