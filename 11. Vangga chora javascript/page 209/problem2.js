const fruits = ["Apple", "Banana", "Mango"];
const [...rest] = fruits;
const myFruits = [...rest, "Papaya", "Orange"];
console.log(myFruits);