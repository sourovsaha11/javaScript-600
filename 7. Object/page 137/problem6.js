const books = {
    book1: "Harry potter",
    book2: "The Hobbit",
    book3: "Game of thrones"
};
const boiErNames = Object.values(books);
for (const value of boiErNames) {
    console.log(value);
}