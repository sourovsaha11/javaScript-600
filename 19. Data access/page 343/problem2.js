const library = {
    name: 'city library',
    books: [{
        id: 1,
        title: 'Javascript basics',
        price: 300
    },
    {
        id: 2,
        title: 'Python Essentials',
        price: 500
            
    }]
};
const firstBookPrice = library.books[1].price;
console.log(firstBookPrice);