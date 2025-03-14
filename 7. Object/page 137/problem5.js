const bike = {
    brand: "Hero",
    price: 120000,
    model: "splendor"
};

const values = Object.values(bike);
for (const value of values) {
    console.log(value);
}