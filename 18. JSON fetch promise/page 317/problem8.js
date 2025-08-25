const productReview = {
    productOne: {
        name: "This is first product",
        reviewerDetails: {
            name: "first reviewer name",
            email: "first@gmail.com",
        },
        rating: 8.3,
        reviewText: "medium quality",
    }
};
const productReviewJSON = JSON.stringify(productReview);
console.log(productReviewJSON);

// Convert JSON string back to JS object
const parsed = JSON.parse(productReviewJSON);

// Convert object values to array
const productArray = Object.values(parsed);
console.log(productArray);