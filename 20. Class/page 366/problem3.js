class vehical {
    constructor(brand,color,tyre,milage) {
        this.brand = brand;
        this.color = color;
        this.tyre = tyre;
        this.milage = milage;
    }
};

class Bus extends vehical{


    constructor(brand, color, seat, tyre, milage) {
        super(brand, color, tyre, milage);
        this.seat = seat;
         
    }
};


class Truck extends vehical {

    constructor(brand, color, tyre, milage, product) {
        super(brand, color, tyre, milage);
        this.product = product;   
    }
};

class bike extends vehical{

    constructor(brand, color, tyre, milage, price) {
        
        super(brand, color, tyre, milage);
        this.price = price;  
    }
};

const vehical1 = new Bus("Honda", "white", 40, 8, 12);
const vehical2 = new Truck("Tata", "yellow", 10, 8, "balu");
const vehical3 = new bike("pulsar", "blue", 2, 35, 180000);

console.log(vehical1, vehical2, vehical3);
