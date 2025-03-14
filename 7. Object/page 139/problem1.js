const headphone = {
    brand: "sony",
    price: 3000,
    color: "red"
};
Object.freeze(headphone);
headphone.age = 2;
console.log(headphone);