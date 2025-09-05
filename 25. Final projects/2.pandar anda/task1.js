// import { placeOrder } from "./task2.js";


const restaurants = [
    {
        id: 1,
        name: "Pizza Place",
        menu: [
            {
                name: "Pepperoni Pizza",
                price: 12
            }
        ]
    },
    {
        id: 2,
        name: "Sushi House",
        menu: [
            {
                name: "Salmon Sushi",
                price: 15
            }
        ]
    }

];

export const orders = [];
export const reviews = [];

// Discount in percentage

export const discountCodes = {
    "SAVE10": 10,
    "WELCOME15": 15
};

// task one started from here.
export function getFoodPrice(restaurantName,foodName) {
    

    let restaurant = restaurants.find(restaurant => restaurant.name == restaurantName);
    


    if (!restaurant) {
        return `restaurants not found`;
    }
    else {
        let foodItem = restaurant.menu.find(item => item.name == foodName);
        if (!foodItem) {
            return `Food item not found`;
        }
        else {
            return foodItem.price;
        }
    }

};

console.log(getFoodPrice("Pizza Place","Pepperoni Pizza")); 


