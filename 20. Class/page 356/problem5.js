class library{
    constructor(name, book, location) {
        this.name = name;
        this.book = book;
        this.location = location;    
    }
};
const library1 = new library("Central Library", 1000, "Dhaka");
console.log(library1 instanceof library);