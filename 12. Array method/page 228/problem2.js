const arr = [{ name: "shampoo", price: 100 }, { name: "soap", price: 50 }, { name: "toothpaste", price: 75 }];
const result = arr.reduce((sum, item) => sum + item.price, 0);
console.log(result);