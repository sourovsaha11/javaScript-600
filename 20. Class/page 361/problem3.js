class Library {

    constructor() {
        this.book = [];
    }

    addBook(name) {
        this.book.push(name);
        return this.book;
    }

    hasBook(nameOfBook) {
        return this.book.includes(nameOfBook);    
    }
};

const myLibrary = new Library();
const bookArray = myLibrary.addBook("js book");
const check = bookArray.includes("js book");
console.log(check);
