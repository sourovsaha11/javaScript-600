import { placeOrder } from "./task2.js";

// all okay.
console.log(placeOrder("Sourov", "Pizza Place", "Pepperoni Pizza", "SAVE10"));


// id increase check
console.log(placeOrder("Sumit", "Pizza Place", "Pepperoni Pizza", "SAVE10"));


// wrong restaurant name test
console.log(placeOrder("atik", "Pizza hut", "Pepperoni Pizza", "SAVE10"));


// wrong food name test.
console.log(placeOrder("Sourov", "Pizza Place", "Burger", "SAVE10"));


