import { viewCart } from "./task2.js";
import { placeOrder } from "./task3.js";

let products = [
    { id: 1, name: "smartphone", price: 200, stock: 10 },
    { id: 2, name: "laptop", price: 800, stock: 5 }
];

let cart = [];

// adding a function called addToCart.  
function addToCart(id, quantity) {
        
    try {
        // Find the product by id
        let product = products.find(p => p.id === id);

        if (!product) {
            return `Product not found`;
        }

        if (product.stock >= quantity) {
            // Reduce stock
            product.stock -= quantity;

            // Add to cart
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: quantity
            });

            return `${product.name} added to cart. Quantity: ${quantity}`;
        } else {
            return `Not enough stock for ${product.name}. Available: ${product.stock}`;
        }
    } 
    catch (error) {
    return `something went wrong`;
}
};


// adding viewCart function using import export.

addToCart(2, 3);
viewCart(cart);
// placing the order.
console.log(placeOrder(cart));



// checking if the cart is empty or not. (cart.length = 0) use korar por.
viewCart(cart);


// again add and view and then place the order.
// addToCart(1, 2);
// viewCart(cart);
// console.log(placeOrder(cart));
