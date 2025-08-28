const car = {
    speed: 120,
    price: 10205000,
    drive() {
        console.log(`speed is ${this.speed} and price is ${this.price}`);
    }
};

const bike = {
    speed: 120,
    price: 120000,
};

const truck = {
    speed: 60,
    price: 5000000
};

car.drive.call(bike);
car.drive.call(truck);

