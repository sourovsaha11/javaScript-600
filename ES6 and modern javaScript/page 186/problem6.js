const favouriteBooks = [];
function bookReturn(favouriteBooks) {
    if (favouriteBooks.length === 0) {
        return "JS book";
    }
    else return favouriteBooks;
}
console.log(bookReturn(favouriteBooks));
