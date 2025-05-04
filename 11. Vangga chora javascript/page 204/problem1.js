const product = {
    name: "laptop",
    price: 50000,
    brand: "Dell"
};
const { name, ...details } = product;
console.log(details); 