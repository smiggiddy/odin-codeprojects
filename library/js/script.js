const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  
  this.info = function(){
    // returns book info 
    let haveRead = this.read ? "have read" : "have not read";
    
    return `${this.title}, by ${this.author}, ${this.pages} pages, ${haveRead}`;
  
  };
}

function addBookToLibrary(book) {
    
}
