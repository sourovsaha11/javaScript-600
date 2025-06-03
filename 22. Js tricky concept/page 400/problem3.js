let paymentMethod = "debit";
switch (paymentMethod) {
    case "cash":
        console.log("Pay with cash");
        break;
    case "credit":
        console.log("Pay with creadit card");
        break;
    case "debit":
        console.log("Pay with debit card");
        break;

    default:
        console.log("Invalid payment method");
        break;
}