
export function placeOrder(cart) {
    let totalPrice = 0;
    let orders = [];
    if (cart.length == 0) {
        return `your cart is empty`
    }
    else {
         for (let i = 0; i < cart.length; i++) {
            let item = cart[i];
            let priceOfProduct = item.quantity * item.price;
             totalPrice += priceOfProduct;
             
        }

        const order = {
            totalPrice: totalPrice,
            items: [...cart],
        };

        // order array te push kore dilam.
        orders.push(order);
    
        console.log("order array te dekha jacche eta",order);

        //cart er jayga faka kore dilam. 
        cart.length = 0;
        
        return `Order placed. Total price: $${totalPrice}`;    
    }   
};


