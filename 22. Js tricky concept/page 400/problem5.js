let orderstatus = "pending";

switch (orderstatus) {
    case "pending":
        console.log('Your order is being processed');
        break;
    case "shipped":
        console.log("Your order is on the way");
        break;
    case "delivered":
        console.log('Your order has been delivered');
        break;
    case "cancelled":
        console.log('Your order was cancelled');

    default:
        console.log("Order den age bhai 😒")
        break;
}