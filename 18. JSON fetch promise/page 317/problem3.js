const shoppingCart = {
    products: ["phone", "laptop", "tablet"],
    totalPrice: 1150,
    userDetailes: {
        name: "jhankar",
        id: 7,
        contact: 1777777777
    }
};
const shoppingCartJSON = JSON.stringify(shoppingCart);
console.log(shoppingCartJSON);