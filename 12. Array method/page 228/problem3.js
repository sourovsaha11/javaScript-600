const products = [{ name: "pen", price: 5 }, { name: "book", price: 50 }, { name: "bag", price: 100 }];
const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
console.log(totalPrice);