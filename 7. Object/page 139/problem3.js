const book = {
    title: "Harry Potter",
    author: "jk rowling",
    page: 500
};
Object.seal(book);
book.author = "humayun ahmed";
console.log(book);

// add o kora jabe na , delete o kora jabe na khali modify kora jabe .