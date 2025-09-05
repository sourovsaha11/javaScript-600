import { getFoodPrice } from "./task1.js";
import { orders } from "./task1.js";
import { discountCodes } from "./task1.js";

export function placeOrder(customer, restaurantName, foodItem, discountCode) {
    const foodPrice = getFoodPrice(restaurantName, foodItem);

    if (typeof foodPrice !== "number") {
        return foodPrice; // directly return the error message from getFoodPrice()
    }

    let finalPrice = foodPrice;

    if (discountCode) {
        if (discountCodes.hasOwnProperty(discountCode)) {
            const discount = discountCodes[discountCode];
            finalPrice = foodPrice - (foodPrice * discount / 100);
            // return `you have to pay ${finalPrice}`;
        } else {
            return `Coupon code invalid`;
        }
    }

        const order = {
        customerName: customer,
        foodname: foodItem,
        Price: finalPrice,
        status: "pending",
        id: orders.length + 1,
        restaurantName: restaurantName,
    };

    orders.push(order);

    return `Your order is successfully placed. Order ID: ${order.id}`;
}
