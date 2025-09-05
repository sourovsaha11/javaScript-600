import { orders } from "./task1.js";
import { placeOrder } from "./task2.js";

placeOrder("Sourov", "Pizza Place", "Pepperoni Pizza", "SAVE10");
placeOrder("Alice", "Pizza Place", "Pepperoni Pizza", "SAVE10");
placeOrder("Bob", "Sushi House", "Salmon Sushi", "WELCOME15");


export function totalSell(restaurantName) {
  const restaurantOrders = orders.filter(
    (order) => order.restaurantName === restaurantName
  );

  if (restaurantOrders.length === 0) {
    return 0;
  }

  const total = restaurantOrders.reduce((sum, order) => sum + order.Price, 0);
  return total;
};

// test case for the reduce function.



console.log(totalSell("Pizza Place"));  
console.log(totalSell("Sushi House"));  
console.log(totalSell("Burger King"));
