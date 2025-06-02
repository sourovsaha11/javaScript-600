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