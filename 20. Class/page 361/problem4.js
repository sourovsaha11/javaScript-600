class shoppingCart {


    constructor(product=[],totalPrice=0) {
        this.product = product;
        this.totalPrice = totalPrice;
    }

    addToCart(name,price) {
        this.product.push(name);
        this.totalPrice += price;
    }

    getTotalPrice() {
        return this.totalPrice;
    }

};


const myShoppingCart = new shoppingCart();
myShoppingCart.addToCart("genji", 50);
myShoppingCart.addToCart("pant", 500);
console.log(myShoppingCart.getTotalPrice());
