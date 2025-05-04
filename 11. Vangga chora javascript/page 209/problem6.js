const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
car.year = 2032;
const { ...rest } = car;
const newObject = { ...rest };
console.log(newObject);