import { orders, reviews } from "./task1.js";
import { placeOrder } from "./task2.js";


export function submitReview(orderId, restaurantName, ratings, reviewText) {

  // 1. Find the order
  const order = orders.find(
    (o) => o.id === orderId && o.restaurantName === restaurantName
  );

  if (!order) {
    return "na kheye vuya review diben na please";
  }

  // 2. Validate rating
  if (typeof ratings !== "number" || ratings < 0 || ratings > 5) {
    return "Rating must be between 0 and 5";
  }

  // 3. Validate review text length
  if (reviewText.length < 20) {
    return "review 20 character er cheye boro hoite hobe 🥲";
  }

  // 4. Create review object
  const newReview = {
    reviewId: reviews.length + 1,
    orderId: orderId,
    restaurantName: restaurantName,
    ratings: ratings,
    review: reviewText,
  };

  // 5. Push into reviews array
  reviews.push(newReview);

  // 6. Return success message
  return `Review added successfully. Review ID: ${newReview.reviewId}`;
}



// test cases create

placeOrder("Sourov", "Pizza Place", "Pepperoni Pizza", "SAVE10");
placeOrder("Alice", "Pizza Place", "Pepperoni Pizza", "SAVE10");


console.log(submitReview(1, "Pizza Place", 4.5, "The pizza was amazing and fresh!"));
console.log(submitReview(99, "Pizza Place", 5, "Very nice!"));
console.log(submitReview(2, "Pizza Place", 7, "Perfect food!"));
console.log(submitReview(2, "Pizza Place", 4, "Too short"));
